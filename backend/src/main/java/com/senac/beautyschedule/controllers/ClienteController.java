package com.senac.beautyschedule.controllers;

import com.senac.beautyschedule.model.dto.AlterarStatusClienteRequest;
import com.senac.beautyschedule.model.entities.Cliente;
import com.senac.beautyschedule.model.repository.ClienteRepository;
import com.senac.beautyschedule.services.ClienteService;
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
        private ClienteRepository clienteRepository;

        @Autowired
        private ClienteService clienteService;

        @Operation(description = "Faz a listagem todos os clientes cadastrados",summary = "Listagem")
        @GetMapping("/listar")
        public ResponseEntity<List<Cliente>> listarTodos(){
                return ResponseEntity.ok(clienteService.BuscarTodosClientes());
        }

        @Operation(description = "Faz a listagem de um cliente especifíco",summary = "Listagem")
        @GetMapping("/{id}")
        public ResponseEntity<Cliente>listarPorId(@PathVariable Long id){
                return ResponseEntity.ok(clienteService.BuscarClienteId(id));
        }

        @Operation(description = "Salva e envia o cadastro do cliente para o banco de dados",summary = "Salvar")
        @PostMapping("/salvar")
        public ResponseEntity<Long> salvar(@RequestBody Cliente cliente){
                return ResponseEntity.ok(clienteService.SalvarCliente(cliente));
        }

        @Operation(description = "Edita um cliente especifico",summary = "Editar")
        @PutMapping("/{id}")
        public ResponseEntity<?> editar(@PathVariable Long id,@RequestBody Cliente cliente){
                var clienteResult = clienteService.EditarCliente(id, cliente);
                return clienteResult ? ResponseEntity.ok("Atualizado com sucesso!") : ResponseEntity.notFound().build();
        }

        @PutMapping("/{id}/AlterarStatus")
        public ResponseEntity<?> alterarStatus(@PathVariable Long id, @RequestBody AlterarStatusClienteRequest alterarStatusRequestCliente){
                var alterarStatusResult = clienteService.AlterarStatus(id, alterarStatusRequestCliente);
                return alterarStatusResult ? ResponseEntity.ok("Status alterado") : ResponseEntity.notFound().build();
        }

}
