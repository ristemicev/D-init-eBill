package com.example.eBill.reqres;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private Long id;
    private String name;
    private String role;
}