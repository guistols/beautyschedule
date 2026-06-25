package com.senac.beautyschedule.application.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record AgendaRequest (
        Long id,
        LocalDateTime dataHora,
        Long clienteId,
        Long servicoId
) {
}
