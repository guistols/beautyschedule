package com.senac.beautyschedule.application.dto;

public record UsuarioRequestAdm(
        String username,
        String senha,
        String cpf,
        String secretKey,
        String cep,
        String logradouro,
        String bairro,
        String cidade
) {
}
