package com.senac.beautyschedule.model.dto;

import com.senac.beautyschedule.model.entities.enuns.EnumStatusCliente;

public record AlterarStatusRequest(EnumStatusCliente status) {
}
