package com.example.eBill;

import com.example.eBill.model.IBAN;
import com.example.eBill.model.PaymentCode;
import com.example.eBill.model.User;
import com.example.eBill.repository.IBANRepo;
import com.example.eBill.repository.PaymentRepository;
import com.example.eBill.repository.UserRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.File;
import java.util.Arrays;
import java.util.List;

@Configuration
public class Config {

    @Bean
    CommandLineRunner commandLineRunner(UserRepo userRepo, IBANRepo ibanRepo, PasswordEncoder passwordEncoder, PaymentRepository paymentRepository) {

        return args -> {

            User milan = new User("Milan Milivojcevic", "miki", passwordEncoder.encode("miki"), "Industrijska cesta", "23", "6310", "Izola",
                    "USER", "miki@miki.com");

            IBAN iban1 = new IBAN("MK51612345678903213");
            IBAN iban2 = new IBAN("SI09876541245123444");

            ibanRepo.saveAll(List.of(iban1,iban2));
            milan.addIBAN(iban1);
            milan.addIBAN(iban2);
            userRepo.save(milan);


            ObjectMapper mapper = new ObjectMapper();

            List<PaymentCode> list = Arrays.asList(mapper.readValue(new File("src/main/resources/kodaNamena.json"), PaymentCode[].class));

            paymentRepository.saveAll(list);
        };
    }
}