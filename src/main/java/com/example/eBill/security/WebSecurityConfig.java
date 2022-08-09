package com.example.eBill.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@RequiredArgsConstructor
@Configuration
public class WebSecurityConfig {

    public static final String ADMIN = "ADMIN";
    public static final String USER = "USER";

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();
        http.authorizeRequests().antMatchers("/", "/home", "/login", "/register").permitAll();
//                .antMatchers("/admin").hasAnyAuthority("ADMIN")
//                .antMatchers("/","/home","/generate/test ").hasAnyAuthority("USER","ADMIN");
//        http.formLogin().loginPage("/login")
//                .defaultSuccessUrl("/")
//                .and().logout();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}