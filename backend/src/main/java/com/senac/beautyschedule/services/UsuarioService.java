package com.senac.beautyschedule.services;

import com.senac.beautyschedule.model.dto.LoginRequest;
import com.senac.beautyschedule.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public boolean ValidaUsuarioSenha(LoginRequest loginRequest){

        try{
            return usuarioRepository.existsUsuarioByUsernameContainingAndSenha(loginRequest.username(), loginRequest.senha());
        }catch (Exception e){
            throw new RuntimeException(e);
        }


    }

}
