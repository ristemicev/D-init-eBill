package com.example.eBill.reqres;

import com.example.eBill.model.IBAN;
import lombok.Data;

import java.util.ArrayList;

@Data
public class UserInfoResponse {

    private String name;
    private String address;
    private String city;
    private ArrayList<IBAN> accounts;

}
