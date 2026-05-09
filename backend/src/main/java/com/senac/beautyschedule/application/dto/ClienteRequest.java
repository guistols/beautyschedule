package com.senac.beautyschedule.application.dto;

import com.senac.beautyschedule.domain.enuns.EnumStatusCliente;

public record ClienteRequest (
        String nome,
        String telefone,
        String cpf
) {

}
