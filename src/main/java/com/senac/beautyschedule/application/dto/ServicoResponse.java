package com.senac.beautyschedule.application.dto;

import com.senac.beautyschedule.domain.entities.Servico;

import java.math.BigDecimal;

public record ServicoResponse(
        Long id,
        String descricao,
        double tempo,
        BigDecimal preco,
        String status
) {
     public ServicoResponse (Servico servico){
             this(
                 servico.getId(),
                 servico.getDescricao(),
                 servico.getTempo(),
                 servico.getPreco(),
                 servico.getStatus().toString()
             );
     }
}
