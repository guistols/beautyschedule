package com.senac.beautyschedule.controllers;

import com.senac.beautyschedule.model.dto.LoginRequest;
import com.senac.beautyschedule.model.dto.LoginResponse;
import com.senac.beautyschedule.model.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(description = "Controle de acesso do usuário", name = "Usuário")
public class AuthController {

        @Autowired
        private UsuarioRepository usuarioRepository;

        @Operation(description = "Faz a validação do usuário", summary = "Acessar")
        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){

            if(loginRequest.usuario().equals("String@s") && loginRequest.senha().equals("String")){
                return ResponseEntity.ok(new LoginResponse("kkkkkkkkkkkkkkkk"));
            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
}
