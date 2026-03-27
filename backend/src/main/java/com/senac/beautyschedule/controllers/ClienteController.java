package com.senac.beautyschedule.controllers;

import com.senac.beautyschedule.model.dto.AlterarStatusRequest;
import com.senac.beautyschedule.model.entities.Cliente;
import com.senac.beautyschedule.model.repository.ClienteRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
@Tag(description = "Controle de clientes",name = "Clientes")
public class ClienteController {

        @Autowired
        public ClienteRepository clienteRepository;

        @Operation(description = "Faz a listagem todos os clientes cadastrados",summary = "Listagem")
        @GetMapping("/listar")
        public ResponseEntity<List<Cliente>> listarTodos(){
            return ResponseEntity.ok(clienteRepository.findAll());
        }

        @Operation(description = "Faz a listagem de um cliente especifíco",summary = "Listagem")
        @GetMapping("/{id}")
        public ResponseEntity<Cliente>listarPorId(@PathVariable Long id){
                return ResponseEntity.ok(clienteRepository.findById(id).orElse(null));
        }

        @Operation(description = "Salva e envia o cadastro do cliente para o banco de dados",summary = "Salvar")
        @PostMapping("/salvar")
        public ResponseEntity<Long> salvar(@RequestBody Cliente cliente){
                return ResponseEntity.ok(clienteRepository.save(cliente).getId());
        }

        @Operation(description = "Edita um cliente especifico",summary = "Editar")
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

        @PutMapping("/{id}/AlterarStatus")
        public ResponseEntity<?> alterarStatus(@PathVariable Long id, @RequestBody AlterarStatusRequest alterarStatusRequest){
                var clienteDb = clienteRepository.findById(id).orElse(null);

                if(clienteDb != null){
                        clienteDb.setStatus(alterarStatusRequest.status());
                        clienteRepository.save(clienteDb);
                        return ResponseEntity.ok("Atualizado com sucesso!");
                }

                return ResponseEntity.notFound().build();
        }

}
