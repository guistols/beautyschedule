package com.senac.beautyschedule.presentation;

import com.senac.beautyschedule.application.dto.AgendaRequest;
import com.senac.beautyschedule.application.dto.AgendaResponse;
import com.senac.beautyschedule.application.services.AgendaService;
import com.senac.beautyschedule.domain.entities.Agenda;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agenda")
@Tag(description = "Controle dos agendamentos",name = "Agenda")
public class AgendaController {

    @Autowired
    private AgendaService agendaService;

    @GetMapping("/listar")
    public ResponseEntity<List<AgendaResponse>> listarTodos(){
        return ResponseEntity.ok(agendaService.BuscarTodasAgendas());
    }

    @PostMapping("/salvar")
    public ResponseEntity<Long> salvar(@RequestBody AgendaRequest agenda){
        return ResponseEntity.ok(agendaService.SalvarAgenda(agenda));
    }
}
