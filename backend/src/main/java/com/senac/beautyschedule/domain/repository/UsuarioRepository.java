package com.senac.beautyschedule.domain.repository;

import com.senac.beautyschedule.domain.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsUsuarioByUsernameContainingAndSenha(String username,String senha);

}
