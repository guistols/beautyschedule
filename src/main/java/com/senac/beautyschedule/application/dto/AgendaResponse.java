package com.senac.beautyschedule.application.dto;

import com.senac.beautyschedule.domain.entities.Agenda;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record AgendaResponse (
        Long id,
        BigDecimal preco,
        LocalDateTime dataHora,
        String clienteNome,
        String servicoDesc
) {
    public AgendaResponse (Agenda agenda){
        this(
                agenda.getId(),
                agenda.getPreco(),
                agenda.getDataHora(),
                agenda.getCliente().getNome(),
                agenda.getServico().getDescricao()
        );
    }
}
