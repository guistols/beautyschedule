package com.senac.beautyschedule.model.repository;

import com.senac.beautyschedule.model.entities.Usuario;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsUsuarioByUsernameContainingAndSenha(String username,String senha);

}
