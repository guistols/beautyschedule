package com.senac.beautyschedule.application.services;

import com.senac.beautyschedule.application.dto.AgendaRequest;
import com.senac.beautyschedule.application.dto.AgendaResponse;
import com.senac.beautyschedule.application.dto.ClienteResponse;
import com.senac.beautyschedule.domain.entities.Agenda;
import com.senac.beautyschedule.domain.entities.Cliente;
import com.senac.beautyschedule.domain.repository.AgendaRepository;
import com.senac.beautyschedule.domain.repository.ClienteRepository;
import com.senac.beautyschedule.domain.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AgendaService {

    @Autowired
    private AgendaRepository agendaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ServicoRepository servicoRepository;

    public List<AgendaResponse> BuscarTodasAgendas() {
        try {
            return agendaRepository.findAll().stream().map(AgendaResponse::new).collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public Long SalvarAgenda(AgendaRequest agenda) {
        try {
            var clienteBd = clienteRepository.findById(agenda.clienteId()).orElse(null);
            var servicoBd = servicoRepository.findById(agenda.servicoId()).orElse(null);

            /*if(clienteBd != null && servicoBd != null) {
              Agenda novaAgenda = new Agenda();

              novaAgenda.setDataHora(agenda.dataHora());
              novaAgenda.setCliente(clienteBd);
              novaAgenda.setServico(servicoBd);
              novaAgenda.setPreco(servicoBd.getPreco());
            }*/

            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
