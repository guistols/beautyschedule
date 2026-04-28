package com.senac.beautyschedule.services;

import com.senac.beautyschedule.model.dto.AlterarStatusServicoRequest;
import com.senac.beautyschedule.model.entities.Servico;
import com.senac.beautyschedule.model.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public List<Servico> BuscarTodosServicos() {
        try {
            return servicoRepository.findAll();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public Servico BuscarServicoId(Long id) {
        try{
            return servicoRepository.findById(id).orElse(null);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public Long SalvarServico(Servico servico) {
        try {
            return servicoRepository.save(servico).getId();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean EditarServico(Long id, Servico servico) {
        try {
            var servicoDb = servicoRepository.findById(id).orElse(null);

            if (servicoDb != null) {
                servicoDb.setDescricao(servico.getDescricao());
                servicoDb.setTempo(servico.getTempo());
                servicoDb.setPreco(servico.getPreco());
                servicoDb.setStatus(servico.getStatus());
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
