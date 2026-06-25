package com.senac.beautyschedule.domain.entities;

import com.senac.beautyschedule.application.dto.AgendaRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "agenda")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Agenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataHora;

    private BigDecimal preco;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cliente_id",referencedColumnName = "id")
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "servico_id",referencedColumnName = "id")
    private Servico servico;


    public Agenda(AgendaRequest agenda) {
        this.dataHora = agenda.dataHora();
    }
}
