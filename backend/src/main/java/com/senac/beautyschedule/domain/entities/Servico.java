package com.senac.beautyschedule.domain.entities;

import com.senac.beautyschedule.domain.enuns.EnumStatusServico;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private double preco;

    private EnumStatusServico status = EnumStatusServico.ATIVO;

}
