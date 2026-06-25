package com.senac.beautyschedule.application.dto;

import java.math.BigDecimal;

public record ServicoRequest (
        String descricao,
        double tempo,
        BigDecimal preco
){

}
