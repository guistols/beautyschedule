package com.senac.beautyschedule.model.dto;

import com.senac.beautyschedule.model.entities.enuns.EnumStatusServico;

public record AlterarStatusServicoRequest(EnumStatusServico status) {
}
