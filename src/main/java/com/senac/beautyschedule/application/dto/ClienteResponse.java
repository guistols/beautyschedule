package com.senac.beautyschedule.application.dto;

import com.senac.beautyschedule.domain.entities.Cliente;

public record ClienteResponse(
         Long id,
         String nome,
         String telefone,
         String cpf,
         String status
) {
    public ClienteResponse (Cliente cliente){
        this(
                cliente.getId(),
                cliente.getNome(),
                cliente.getCpf(),
                cliente.getTelefone(),
                cliente.getStatus().toString()
        );
    }
}
