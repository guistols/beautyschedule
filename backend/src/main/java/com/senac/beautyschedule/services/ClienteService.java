package com.senac.beautyschedule.services;

import com.senac.beautyschedule.model.dto.AlterarStatusClienteRequest;
import com.senac.beautyschedule.model.entities.Cliente;
import com.senac.beautyschedule.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;


    public List<Cliente> BuscarTodosClientes() {
        try {
            return clienteRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public Cliente BuscarClienteId(Long id) {
        try{
            return clienteRepository.findById(id).orElse(null);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Long SalvarCliente(Cliente cliente) {
        try {
            return clienteRepository.save(cliente).getId();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public boolean EditarCliente(Long id, Cliente cliente) {
        try {
            var clienteDb = clienteRepository.findById(id).orElse(null);

            if (clienteDb != null) {
                clienteDb.setNome(cliente.getNome());
                clienteDb.setCpf(cliente.getCpf());
                clienteDb.setTelefone(cliente.getTelefone());
                clienteDb.setStatus(cliente.getStatus());

                clienteRepository.save(clienteDb);

                return true;
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return false;
    }

    public boolean AlterarStatus(Long id, AlterarStatusClienteRequest alterarStatusRequestCliente) {
        try{
        var clienteDb = clienteRepository.findById(id).orElse(null);

        if(clienteDb != null){
            clienteDb.setStatus(alterarStatusRequestCliente.status());
            clienteRepository.save(clienteDb);
            return true;
        }
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return false;
    }
}
