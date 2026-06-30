package com.senac.beautyschedule.application.services;

import com.senac.beautyschedule.application.dto.AgendaRequest;
import com.senac.beautyschedule.application.dto.AgendaResponse;
import com.senac.beautyschedule.application.dto.ClienteResponse;
import com.senac.beautyschedule.domain.entities.Agenda;
import com.senac.beautyschedule.domain.entities.Cliente;
import com.senac.beautyschedule.domain.entities.Usuario;
import com.senac.beautyschedule.domain.repository.AgendaRepository;
import com.senac.beautyschedule.domain.repository.ClienteRepository;
import com.senac.beautyschedule.domain.repository.ServicoRepository;
import com.senac.beautyschedule.domain.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AgendaService {

    @Autowired
    private AgendaRepository agendaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ServicoRepository servicoRepository;

    public List<AgendaResponse> BuscarTodasAgendas() {
        try {
            var usuarioLogado = (Usuario) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            if(usuarioLogado==null){
                throw new IllegalArgumentException();
            }
            if(!usuarioLogado.getRole().equals("ROLE_ADMIN")){
                return agendaRepository.findAllByUsuarioId(usuarioLogado.getId()).stream().map(AgendaResponse::new).collect(Collectors.toList());
            }

            return agendaRepository.findAll().stream().map(AgendaResponse::new).collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public Long SalvarAgenda(AgendaRequest agenda) {
        try {
            var usuarioLogado = (Usuario) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            if(usuarioLogado==null){
                throw new IllegalArgumentException();
            }

            if (agenda.dataHora().isBefore(LocalDateTime.now())) {
                throw new RuntimeException("Não é possível realizar um agendamento no passado.");
            }
            boolean horarioOcupado = agendaRepository.existsByDataHoraAndUsuarioId(agenda.dataHora(),usuarioLogado.getId()
            );

            if (horarioOcupado) {
                throw new RuntimeException("Você já possui um agendamento marcado para este horário.");
            }
            var clienteBd = clienteRepository.findById(agenda.clienteId()).orElse(null);
            var servicoBd = servicoRepository.findById(agenda.servicoId()).orElse(null);

            if(clienteBd != null && servicoBd != null) {
              Agenda novaAgenda = new Agenda();

              novaAgenda.setDataHora(agenda.dataHora());
              novaAgenda.setCliente(clienteBd);
              novaAgenda.setServico(servicoBd);
              novaAgenda.setPreco(servicoBd.getPreco());
              novaAgenda.setUsuario(usuarioLogado);
              return agendaRepository.save(novaAgenda).getId();
            }
            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
