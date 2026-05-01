package com.senac.beautyschedule.presentation;
import com.senac.beautyschedule.application.dto.dto.AlterarStatusServicoRequest;
import com.senac.beautyschedule.domain.entities.Servico;
import com.senac.beautyschedule.application.services.ServicoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servico")
@Tag(description = "Controle de serviços", name = "Serviços")
public class ServicoController {

    @Autowired
    private ServicoService servicoService;

    @GetMapping("/listar")
    @Operation(description = "Faz a listagem todos os serviços cadastrados",summary = "Listagem")
    public ResponseEntity<List<Servico>> listarTodos(){

        return ResponseEntity.ok(servicoService.BuscarTodosServicos());
    }

    @GetMapping("/{id}")
    @Operation(description = "Faz a listagem de um serviço um específico",summary = "Listagem")
    public ResponseEntity<Servico>listarPorId(@PathVariable Long id){
        return ResponseEntity.ok(servicoService.BuscarServicoId(id));
    }

    @PostMapping("/salvar")
    @Operation(description = "Salva e envia o cadastro do cliente para o banco de dados",summary = "Salvar")
    public ResponseEntity<Long> salvar(@RequestBody Servico servico){
        return ResponseEntity.ok(servicoService.SalvarServico(servico));
    }

    @PutMapping("/{id}")
    @Operation(description = "Edita um servico especifico",summary = "Editar")
    public ResponseEntity<?> editar(@PathVariable Long id,@RequestBody Servico servico){
        var servicoResult = servicoService.EditarServico(id, servico);
        return servicoResult ? ResponseEntity.ok("Servico alterado com sucesso.") : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/AlterarStatus")
    public ResponseEntity<?> alterarStatus(@PathVariable Long id, @RequestBody AlterarStatusServicoRequest alterarStatusServicoRequest){
        var servicoStatusResult = servicoService.AlterarStatusServico(id, alterarStatusServicoRequest);
        return servicoStatusResult ? ResponseEntity.ok("Status alterado com sucesso.") : ResponseEntity.notFound().build();
        }

}
