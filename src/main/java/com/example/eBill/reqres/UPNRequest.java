package com.example.eBill.reqres;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data

public class UPNRequest {

    @NotBlank
    private String name;

    @NotBlank
    private String iban;

    @NotBlank
    private String address;

    @NotBlank
    private String paymentCode;

    @NotBlank
    private String description;

    @NotBlank
    private String amount;

    @NotBlank
    private String deadline;

}
