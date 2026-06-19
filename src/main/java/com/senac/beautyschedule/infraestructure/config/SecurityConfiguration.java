package com.senac.beautyschedule.infraestructure.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    //ditar regras de segurança, programação de perfil

    @Autowired
    private JwtFilter jwtFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.cors(Customizer.withDefaults())
                   .csrf(AbstractHttpConfigurer::disable)
                   .authorizeHttpRequests( auth -> auth
                           .requestMatchers("/auth/login",
                           "/swagger-ui/**",
                           "/v3/api-docs/**",
                           "/webjars/**",
                           "/swagger-resources/**",
                                   "/usuarios/adm")
                           .permitAll()
                           //controle de url por roles (cargos)
                           //.requestMatchers(HttpMethod.GET,"/agenda").hasRole("ADMIN")
                           .anyRequest().authenticated()
                   )
                   .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                   .build()
                   ;
    }
}
