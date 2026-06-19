package com.senac.beautyschedule.application.dto;

import com.senac.beautyschedule.domain.enuns.EnumStatusCliente;

public record AlterarStatusClienteRequest(EnumStatusCliente status) {
}
