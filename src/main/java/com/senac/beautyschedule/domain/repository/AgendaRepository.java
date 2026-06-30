package com.senac.beautyschedule.domain.repository;

import com.senac.beautyschedule.domain.entities.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, Long> {
    List<Agenda> findByUsuarioId(Long usuarioId);
    boolean existsByDataHoraAndUsuarioId(LocalDateTime dataHora, Long usuarioId);
}
