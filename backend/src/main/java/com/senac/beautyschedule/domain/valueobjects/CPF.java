package com.senac.beautyschedule.domain.valueobjects;

public class CPF {

    private String cpf;

    public CPF(){
        this.cpf = "";
    }

    public CPF(String cpf){
        if(cpf==null || !isValid(cpf)){
            throw new IllegalArgumentException("CPF Inválido!");
        }
        this.cpf = cpf;
    }

    private boolean isValid (String cpf){
        String cpfTratado = cpf.replaceAll("[^0-9]","");

        if(cpfTratado.length() !=11 ||cpfTratado.matches("(\\d)\\1{10}")){
            return false;
        }

        return validarDigitosVerificadores(cpf);
    }

    private boolean validarDigitosVerificadores(String cpf){
            try {
                // Calcula e compara os dígitos verificadores
                for (int j = 9; j < 11; j++) {
                    int soma = 0;
                    int peso = j + 1;

                    for (int i = 0; i < j; i++) {
                        soma += Character.getNumericValue(cpf.charAt(i)) * (peso - i);
                    }

                    int digito = 11 - (soma % 11);
                    if (digito > 9) digito = 0;

                    if (digito != Character.getNumericValue(cpf.charAt(j))) {
                        return false;
                    }
                }
            } catch (Exception e) {
                return false;
            }

            return true;
        }

    private String getNumeros(){
        return this.cpf.replaceAll("[^0-9]","");
    }

    @Override
    public String toString (){
        return cpf.replaceAll("\\D","").replaceAll("(\\d{3})(\\d{3})(\\d{3})(\\d{2})", "$1.$2.$3-$4");
    }

}
