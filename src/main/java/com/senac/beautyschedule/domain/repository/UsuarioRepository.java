package com.senac.beautyschedule.domain.repository;

import com.senac.beautyschedule.domain.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findAllByOrderByIdAsc();

    boolean existsUsuarioByUsernameContainingAndSenha(String username,String senha);

}
