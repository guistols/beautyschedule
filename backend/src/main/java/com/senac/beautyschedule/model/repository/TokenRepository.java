package com.senac.beautyschedule.model.repository;

import com.senac.beautyschedule.model.entities.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token>findByToken(String token);
}
