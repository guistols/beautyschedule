package com.senac.beautyschedule.model.entities;


import com.senac.beautyschedule.model.entities.enuns.EnumStatusUsuario;
import jakarta.persistence.*;

@Entity
@Table(name = "cliente")
public class Cliente {

    public Cliente(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String telefone;

    private String cpf;

    private EnumStatusUsuario status = EnumStatusUsuario.ATIVO;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public EnumStatusUsuario getStatus() {
        return status;
    }

    public void setStatus(EnumStatusUsuario status) {
        this.status = status;
    }
}
