package com.example.eBill.controller;

import com.example.eBill.reqres.UPNRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UPNController {

    @RequestMapping("/upn/generate")
    public void generateUPN(@Valid @RequestBody UPNRequest upnRequest) {

        System.out.println(upnRequest);

    }
}
