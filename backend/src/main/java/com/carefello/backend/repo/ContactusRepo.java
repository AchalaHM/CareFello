package com.carefello.backend.repo;

import com.carefello.backend.model.Contactus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface ContactusRepo extends JpaRepository<Contactus, Integer> {

}
