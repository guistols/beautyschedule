package com.senac.beautyschedule.controllers;

import com.senac.beautyschedule.model.entities.Cliente;
import com.senac.beautyschedule.model.repository.ClienteRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

        @Autowired
        public ClienteRepository clienteRepository;

        @GetMapping("/listar")
        public ResponseEntity<List<Cliente>> listarTodos(){
            return ResponseEntity.ok(clienteRepository.findAll());
        }

        @GetMapping("/{id}")
        public ResponseEntity<Cliente>listarPorId(@PathVariable Long id){
                return ResponseEntity.ok(clienteRepository.findById(id).orElse(null));
        }

        @PostMapping("/salvar")
        public ResponseEntity<Long> salvar(@RequestBody Cliente cliente){
                return ResponseEntity.ok(clienteRepository.save(cliente).getId());
        }

        @PutMapping("/{id}")
        public ResponseEntity<?> editar(@PathVariable Long id,@RequestBody Cliente cliente){
                var clienteDb = clienteRepository.findById(id).orElse(null);

                if(clienteDb != null){
                        clienteDb.setNome(cliente.getNome());
                        clienteDb.setCpf(cliente.getCpf());
                        clienteDb.setTelefone(cliente.getTelefone());
                        clienteDb.setStatus(cliente.getStatus());
                        clienteRepository.save(clienteDb);
                        return ResponseEntity.ok("Atualizado com sucesso!");
                }

                return ResponseEntity.notFound().build();

        }

}
