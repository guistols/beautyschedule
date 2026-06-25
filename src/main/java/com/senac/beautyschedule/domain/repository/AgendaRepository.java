package com.senac.beautyschedule.domain.repository;

import com.senac.beautyschedule.domain.entities.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, Long> {


}
