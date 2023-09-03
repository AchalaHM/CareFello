package com.carefello.backend.service;

import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.payload.response.Response;

public interface RequestService {

    Response validateRequest(RequestDTO requestDTO);
    Response validateRequest1(RequestDTO requestDTO);
    String assignElder(RequestDTO requestDTO);
    String validateRequest2(int id, RequestDTO requestDTO);
}
