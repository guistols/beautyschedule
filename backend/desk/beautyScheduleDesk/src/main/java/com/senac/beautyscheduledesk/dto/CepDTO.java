package com.senac.beautyscheduledesk.dto;

import com.google.gson.annotations.SerializedName;

public class CepDTO {
    private String logradouro;

    private String bairro;

    @SerializedName("localidade")
    private String cidade;

    public String getLogradouro() { return logradouro; }
    public String getBairro() { return bairro; }
    public String getCidade() { return cidade; }
}
