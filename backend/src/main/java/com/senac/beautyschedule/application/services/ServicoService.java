package com.senac.beautyschedule.application.services;

import com.senac.beautyschedule.application.dto.ServicoRequest;
import com.senac.beautyschedule.application.dto.ServicoResponse;
import com.senac.beautyschedule.application.dto.dto.AlterarStatusServicoRequest;
import com.senac.beautyschedule.domain.entities.Servico;
import com.senac.beautyschedule.domain.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public List<ServicoResponse> BuscarTodosServicos() {
        try {
            return servicoRepository.findAll().stream().map(ServicoResponse::new).collect(Collectors.toList());
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public ServicoResponse BuscarServicoId(Long id) {
        try{
            var servico = servicoRepository.findById(id).orElse(null);
            return new ServicoResponse(servico);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public Long SalvarServico(ServicoRequest servico) {
        try {
            return servicoRepository.save(new Servico(servico)).getId();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean EditarServico(Long id, ServicoRequest servico) {
        try {
            var servicoDb = servicoRepository.findById(id).orElse(null);

            if (servicoDb != null) {
                servicoDb.setDescricao(servico.descricao());
                servicoDb.setTempo(servico.tempo());
                servicoDb.setPreco(servico.preco());

                servicoRepository.save(servicoDb);
                return true;
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }

        return false;
    }

    public boolean AlterarStatusServico(Long id, AlterarStatusServicoRequest alterarStatusServicoRequest) {
        try{
            var servicoDb = servicoRepository.findById(id).orElse(null);

            if(servicoDb != null){
                servicoDb.setStatus(alterarStatusServicoRequest.status());
                servicoRepository.save(servicoDb);
                return true;
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return false;
    }
}
