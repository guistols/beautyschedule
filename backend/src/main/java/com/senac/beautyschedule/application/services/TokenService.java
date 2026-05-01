package com.senac.beautyschedule.application.services;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.senac.beautyschedule.domain.entities.Token;
import com.senac.beautyschedule.domain.entities.Usuario;
import com.senac.beautyschedule.domain.repository.TokenRepository;
import com.senac.beautyschedule.domain.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${spring.secretkey}")
    private String secret;

    @Value("${spring.emissor}")
    private String emissor;

    @Value("${spring.tempoExpiracao}")
    private Long tempoExpiracao;

    @Autowired
    private TokenRepository tokenRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario validarToken(String token){
        try{
            Algorithm algoritimo = Algorithm.HMAC256(secret);

            JWTVerifier verifier = JWT.require(algoritimo)
                    .withIssuer(emissor)
                    .build();
            verifier.verify(token);

            var tokenBanco = tokenRepository.findByToken(token);

            return tokenBanco.get().getUsuario();
        }catch (Exception e){
            throw new RuntimeException();
        }
    }

    public String gerarToken(String usuario) {
        try{
            Algorithm algoritimo = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer(emissor)
                    .withSubject(usuario)
                    .withExpiresAt(gerarDataExpiracao())
                    .sign(algoritimo);

            var username = usuarioRepository.findAll()
                            .stream()
                            .filter(u -> u.getUsername().equals(usuario)).findFirst().orElse(null);

            tokenRepository.save(new Token(token,username));

            return token;
        }catch (Exception e){
            return null;
        }
    }

    private Instant gerarDataExpiracao(){


        return LocalDateTime.now().plusMinutes(tempoExpiracao).toInstant(ZoneOffset.of("-03:00"));
    }
}
