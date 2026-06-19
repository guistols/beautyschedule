package com.senac.beautyscheduledesk;

import com.google.gson.Gson;
import com.senac.beautyscheduledesk.dto.CepDTO;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

import javax.swing.*;
import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class UsuarioController {

    @FXML
    private TextField txtUsername;

    @FXML
    private TextField txtCep;

    @FXML
    private TextField txtSenha;

    @FXML
    private TextField txtCidade;

    @FXML
    private TextField txtBairro;

    @FXML
    private TextField txtLogradouro;

    @FXML
    private void onVoltarButtonClick(ActionEvent event) throws IOException{

        FXMLLoader loader = new FXMLLoader(getClass().getResource("menu-view.fxml"));
        Scene scene = new Scene(loader.load());
        Stage stage= (Stage) ((Node) event.getSource()).getScene().getWindow();
        stage.setScene(scene);
    }

    @FXML
    private void onSalvarButtonClick(ActionEvent event) throws IOException {

        URL url = new URL("http://localhost:8080/usuarios/adm");

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-type","application/json");

        conn.setDoOutput(true);

        String json = "{\n" +
                "  \"username\": \""+txtUsername.getText()+"\",\n"+
                "  \"senha\": \""+txtSenha.getText()+"\",\n" +
                "  \"secretKey\": \"johnamdadmsadmksaokjuniozeadomaskodsamkooguricap\",\n" +
                "  \"cep\": \""+txtCep.getText()+"\",\n" +
                "  \"logradouro\": \""+txtLogradouro.getText()+" \",\n" +
                "  \"bairro\": \""+txtBairro.getText()+"\",\n" +
                "  \"cidade\": \""+txtCidade.getText()+"\"\n" +
                "}";

        try(OutputStream os = conn.getOutputStream()){
            os.write(json.getBytes());
        }

        var code = conn.getResponseCode();
        if(code==200){
            showMenssage("Sucesso ao salvar!", Alert.AlertType.INFORMATION);
            FXMLLoader loader = new FXMLLoader(getClass().getResource("menu-view.fxml"));
            Scene scene = new Scene(loader.load());
            Stage stage= (Stage) ((Node) event.getSource()).getScene().getWindow();
            stage.setScene(scene);
        }else{
            showMenssage("Erro ao salvar!" , Alert.AlertType.ERROR);
        }

        conn.disconnect();
    }

    @FXML
    private void onBuscarCepClick(ActionEvent event) throws IOException {
        //System.out.print(txtCep.getText());
        if(txtCep.getText().length() != 8) {
            showMenssage("CEP Inválido", Alert.AlertType.ERROR);
        } else{
            URL url = new URL("https://viacep.com.br/ws/" + txtCep.getText() + "/json/");

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("GET");

            var code = conn.getResponseCode();
            if (code == 200) {
                String json = new String(conn.getInputStream().readAllBytes());
                //o gson converte JSON em objeto java
                Gson gson = new Gson();
                //atraves do .class pegando o json que vem da requisição
                CepDTO cepDto = gson.fromJson(json, CepDTO.class);
                txtCidade.setText(cepDto.getCidade());
                txtBairro.setText(cepDto.getBairro());
                txtLogradouro.setText(cepDto.getLogradouro());
                showMenssage("CEP Encontrado com sucesso!", Alert.AlertType.INFORMATION);
            } else {
                showMenssage("CEP Não encontrado/inválido!", Alert.AlertType.ERROR);
            }

        }
    }

    private void showMenssage(String mensagem, Alert.AlertType tipo){
        Alert alert = new Alert(tipo);

        alert.setTitle("Login");
        alert.setHeaderText(null);
        alert.setContentText(mensagem);

        alert.showAndWait();
    }
}

