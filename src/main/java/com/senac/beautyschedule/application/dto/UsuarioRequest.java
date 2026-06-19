package com.senac.beautyschedule.application.dto;

public record UsuarioRequest(
        String username,
        String cpf,
        String senha
) {
}
