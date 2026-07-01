package com.senac.beautyschedule.application.dto;
import com.senac.beautyschedule.application.dto.UsuarioResponse;

public record LoginResponse(String token, UsuarioResponse usuario) {
}
