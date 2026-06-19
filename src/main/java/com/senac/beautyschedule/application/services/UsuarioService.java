package com.senac.beautyschedule.application.services;

import com.senac.beautyschedule.application.dto.UsuarioRequest;
import com.senac.beautyschedule.application.dto.UsuarioRequestAdm;
import com.senac.beautyschedule.application.dto.UsuarioResponse;
import com.senac.beautyschedule.application.dto.dto.LoginRequest;
import com.senac.beautyschedule.domain.entities.Usuario;
import com.senac.beautyschedule.domain.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Value("${spring.secretkey}")
    private String secret;

    public boolean ValidaUsuarioSenha(LoginRequest loginRequest){

        try{
            return usuarioRepository.existsUsuarioByUsernameContainingAndSenha(loginRequest.username(), loginRequest.senha());
        }catch (Exception e){
            throw new RuntimeException(e);
        }


    }

        public UsuarioResponse BuscarUsuarioPorId(Long id) {
            try {
                var usuario = usuarioRepository.findById(id).orElse(null);
                return new UsuarioResponse(usuario);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        public List<UsuarioResponse> ListarTodos() {
            try{
                return usuarioRepository.findAllByOrderByIdAsc()
                        .stream()
                        .map(UsuarioResponse::new)
                        .collect(Collectors.toList());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        public boolean AlterarUsuario(Long id, UsuarioRequest usuario) {

            try {
                var usuarioBanco = usuarioRepository.findById(id).orElse(null);
                if (usuarioBanco != null) {
                    usuarioBanco.setUsername(usuario.username());
                    usuarioBanco.setSenha(usuario.senha());
                    usuarioRepository.save(usuarioBanco);
                    return true;
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }

            return false;
        }

        public Long SalvarUsuario(UsuarioRequest usuario) {
            try {
                return usuarioRepository.save(new Usuario(usuario)).getId();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        public Long SalvarUsuarioAdm(UsuarioRequestAdm usuario) {
            try {
                if(usuario.secretKey().equals(secret)) {

                    return usuarioRepository.save(new Usuario(usuario)).getId();
                }else{
                    return 0L;
                }

            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }
