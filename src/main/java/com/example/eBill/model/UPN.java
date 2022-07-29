package com.example.eBill.model;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "upn")
public class UPN {

    @Id
    @SequenceGenerator(
            name = "upn_sequence",
            sequenceName = "upn_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "upn_sequence"
    )

    private Long id;

    @ManyToOne
    @JoinColumn(name = "recipientID", insertable = false, updatable = false)
    private User recipient;

    @ManyToOne
    @JoinColumn(name = "paymentCodeID", insertable = false, updatable = false)
    private PaymentCode paymentCode;

    private String recipientReference;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate deadline;
    private int amount;
    private String description;

    private String recipientIBAN;
    private String uniCode;

    public UPN(
            @RequestParam(required = false) User recipient,
            @RequestParam(required = false) User payer,
            PaymentCode paymentCode,
            String description,
            LocalDate deadline,
            int amount,
            String recipientIBAN,
            String recipientReference) {

        if (recipient != null)
            this.recipient = recipient;
        this.paymentCode = paymentCode;
        this.recipientReference = recipientReference;
        this.deadline = deadline;
        this.amount = amount;
        this.recipientIBAN = recipientIBAN;
        this.description = description;
    }

    public UPN(User recipient) {
        this.recipient = recipient;
    }

    public UPN() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }

    public PaymentCode getPaymentCode() {
        return paymentCode;
    }

    public void setPaymentCode(PaymentCode paymentCode) {
        this.paymentCode = paymentCode;
    }

    public String getRecipientReference() {
        return recipientReference;
    }

    public void setRecipientReference(String recipientReference) {
        this.recipientReference = recipientReference;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRecipientIBAN() {
        return recipientIBAN;
    }

    public void setRecipientIBAN(String recipientIBAN) {
        this.recipientIBAN = recipientIBAN;
    }

    public String getUniCode() {
        return uniCode;
    }

    public void setUniCode(String uniCode) {
        this.uniCode = uniCode;
    }

    @Override
    public String toString() {

        //making string by the instractions 5.3 file https://upn-qr.si/uploads/files/EN_NavodilaZaProgramerjeUPNQR.pdf

        String string = "UPNQR\n\n\n\n\n\n\n\n" + amount + "\n\n\n";

        string += paymentCode.getCode() + "\n"
                + description + "\n"
                + deadline.format(DateTimeFormatter.ofPattern("dd.MM.yyyy")) + "\n"
                + recipientIBAN + "\n"
                + recipientReference + "\n"
                + recipient.getName() + "\n"
                + recipient.getStreet() + " " + recipient.getStreetNumber() + "\n"
                + recipient.getCityCode() + " " + recipient.getCity() + "\n";

        int len = string.length();
        if (len < 100)
            string += "0" + len + "\n";
        else string += len + "\n";

        return string;
    }
}