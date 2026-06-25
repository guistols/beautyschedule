package com.senac.beautyschedule.domain.entities;

import com.senac.beautyschedule.application.dto.ServicoRequest;
import com.senac.beautyschedule.domain.enuns.EnumStatusServico;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "servico")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    private double tempo;

    private BigDecimal preco;

    private EnumStatusServico status = EnumStatusServico.ATIVO;

    public Servico (ServicoRequest servico){
        this.descricao = servico.descricao();
        this.tempo = servico.tempo();
        this.preco = servico.preco();
    }

}
