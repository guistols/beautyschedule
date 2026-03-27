package com.senac.beautyschedule.controllers;
import com.senac.beautyschedule.model.entities.Servico;
import com.senac.beautyschedule.model.repository.ServicoRepository;
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
@RequestMapping("/servico")
@Tag(description = "Controle de serviços", name = "Serviços")
public class ServicoController {

    @Autowired
    public ServicoRepository servicoRepository;

    @GetMapping("/listar")
    @Operation(description = "Faz a listagem todos os serviços cadastrados",summary = "Listagem")
    public ResponseEntity<List<Servico>> listarTodos(){

        return ResponseEntity.ok(servicoRepository.findAll());
    }

    @GetMapping("/{id}")
    @Operation(description = "Faz a listagem de um serviço um específico",summary = "Listagem")
    public ResponseEntity<Servico>listarPorId(@PathVariable Long id){
        return ResponseEntity.ok(servicoRepository.findById(id).orElse(null));
    }

    @PostMapping("/salvar")
    @Operation(description = "Salva e envia o cadastro do cliente para o banco de dados",summary = "Salvar")
    public ResponseEntity<Long> salvar(@RequestBody Servico servico){
        return ResponseEntity.ok(servicoRepository.save(servico).getId());
    }

    @PutMapping("/{id}")
    @Operation(description = "Edita um cliente especifico",summary = "Editar")
    public ResponseEntity<?> editar(@PathVariable Long id,@RequestBody Servico servico){
        var servicoDb = servicoRepository.findById(id).orElse(null);

        if(servicoDb != null){
            servicoDb.setDescricao(servico.getDescricao());
            servicoDb.setTempo(servico.getTempo());
            servicoDb.setPreco(servico.getPreco());
            servicoDb.setStatus(servico.getStatus());
            servicoRepository.save(servicoDb);
            return ResponseEntity.ok("Atualizado com sucesso!");
        }

        return ResponseEntity.notFound().build();

    }

}
