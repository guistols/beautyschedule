package com.senac.beautyschedule.domain.entities;


import com.senac.beautyschedule.application.dto.UsuarioRequest;
import com.senac.beautyschedule.application.dto.UsuarioRequestAdm;
import com.senac.beautyschedule.domain.valueobjects.CPF;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Embedded
    private CPF cpf;

    private String senha;

    private String role;

    private String cep;
    private String logradouro;
    private String bairro;
    private String cidade;

    public Usuario(UsuarioRequest usuario){
        this.username = usuario.username();
        this.cpf = new CPF(usuario.cpf());
        this.senha = usuario.senha();
        this.role = "ROLE_USER";
    }

    public Usuario(UsuarioRequestAdm usuario){
        this.username = usuario.username();
        this.senha = usuario.senha();
        this.cpf = new CPF(usuario.cpf());
        this.cep = usuario.cep();
        this.bairro = usuario.bairro();
        this.cidade = usuario.cidade();
        this.role = "ROLE_ADMIN";
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.role));
    }

    @Override
    public @Nullable String getPassword() {
        return this.senha;
    }

    @Override
    public String getUsername() {
        return this.username;
    }
}

