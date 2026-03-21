package com.senac.beautyschedule.controllers;

import com.senac.beautyschedule.model.dto.LoginRequest;
import com.senac.beautyschedule.model.dto.LoginResponse;
import com.senac.beautyschedule.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

        @Autowired
        private UsuarioRepository usuarioRepository;

        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){

            if(loginRequest.usuario().equals("String@s") && loginRequest.senha().equals("String")){
                return ResponseEntity.ok(new LoginResponse("kkkkkkkkkkkkkkkk"));
            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
}
