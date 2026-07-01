package com.senac.beautyschedule.application.dto;

import com.senac.beautyschedule.domain.entities.Usuario;

public record UsuarioResponse (
        Long id,
        String username,
        String senha,
        String role,
        String cpf
){
    public UsuarioResponse(Usuario usuario){
        this(
                usuario.getId(),
                usuario.getUsername(),
                usuario.getSenha(),
                usuario.getRole(),
                usuario.getCpf() != null ? usuario.getCpf().toString() : null
        );
    }
}