package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.service.ElderService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ElderImpl implements ElderService {

    @Autowired
    private GuardianRepo guardianRepo;

    @Autowired
    private ElderRepo elderRepo;

    @Override
    public Elder addElderToGuardian(int guardianId, ElderDTO elderDTO) {
        // Retrieve the guardian
        Guardian guardian = guardianRepo.findById(guardianId)
                .orElseThrow(() -> new EntityNotFoundException("Guardian not found"));

        // Check if the elder count exceeds the maximum limit
        if (guardian.getElders().size() >= 4) {
            throw new MaxEldersReachedException("Maximum elders reached for this guardian");
        }

        // Create an Elder instance and populate it with elderDTO data
        Elder elder = new Elder();
        elder.setName(elderDTO.getName());
        elder.setDob(elderDTO.getDob());
        elder.setNic(elderDTO.getNic());
        elder.setGuardian(guardian);
        elder.setRelationship(elderDTO.getRelationship());

        // Handle the image file upload
        MultipartFile image = elderDTO.getImage();
        if (elderDTO.getImage() != null) {
            try {
                byte[] imageData = elderDTO.getImage().getBytes();
                elder.setImage(imageData);
            } catch (IOException e) {
                throw new RuntimeException("Error uploading image: " + e.getMessage());
            }
        }

        // Save the elder and update the guardian's elders list
        guardian.getElders().add(elder);
        guardianRepo.save(guardian);

        return elder;
    }

    public class MaxEldersReachedException extends RuntimeException {
        public MaxEldersReachedException(String message) {
            super(message);
        }
    }

    @Override
    public List<ElderDTO> getEldersByGuardianId(int guardianId){
        List<Elder> elders = elderRepo.findByGuardianId(guardianId);
        List<ElderDTO> elderDTOs = new ArrayList<>();

        for (Elder elder : elders){
            ElderDTO elderDTO = new ElderDTO();
            elderDTO.setId(elder.getId());
            elderDTO.setName(elder.getName());
            elderDTO.setNic(elder.getNic());
            elderDTO.setDob(elder.getDob());
            elderDTO.setRelationship(elder.getRelationship());
            elderDTOs.add(elderDTO);
        }

        return elderDTOs;
    }

    @Override
    public List<byte[]> getElderImagesByGuardianId(int guardianId) {
        List<Elder> elders = elderRepo.findByGuardianId(guardianId);
        List<byte[]> elderImages = new ArrayList<>();

        for (Elder elder : elders) {
            if (elder.getImage() != null) {
                elderImages.add(elder.getImage());
            }
        }

        return elderImages;
    }


}

