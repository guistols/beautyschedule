package com.senac.beautyschedule.model.entities;
import com.senac.beautyschedule.model.entities.enuns.EnumStatusCliente;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cliente")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String telefone;

    private String cpf;

    private EnumStatusCliente status = EnumStatusCliente.ATIVO;
}
