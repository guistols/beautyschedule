package com.senac.beautyschedule.application.services;

import com.senac.beautyschedule.application.dto.dto.LoginRequest;
import com.senac.beautyschedule.domain.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
