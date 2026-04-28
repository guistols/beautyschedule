package com.senac.beautyschedule.config;


import com.senac.beautyschedule.model.entities.Usuario;
import com.senac.beautyschedule.services.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
public class JwtFilter extends OncePerRequestFilter {


    @Autowired
    private TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String path = request.getRequestURI();
        // liberacao dos metodos para nao travar o token jwt
        if(path.equals("/auth/login")
                || path.startsWith("/swagger-ui")
                || path.startsWith("/v3/api-docs")
                || path.startsWith("/webjars")
                || path.startsWith("/swagger-resources")
                || request.getMethod().startsWith("OPTIONS")){
            filterChain.doFilter(request,response);
            return;
        }

        String header = request.getHeader("Authorization");

        if(header!=null && header.startsWith("Bearer ")){
            String token = header.replace("Bearer ","");

            var retornoToken = tokenService.validarToken(token);
            var usuarioLogado = retornoToken;

            UsernamePasswordAuthenticationToken usuario = new UsernamePasswordAuthenticationToken(
                    usuarioLogado,
                    null,
                    usuarioLogado.getAuthorities()
            );

            SecurityContextHolder.getContext().setAuthentication(usuario);
        }else{
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token não informado ou invalido");
            return;
        }

        filterChain.doFilter(request,response);
    }
}
