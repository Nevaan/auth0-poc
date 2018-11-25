package com.devnev.auth0poc.dto;

import java.util.Date;

public class Message {
    private String msg;
    private Date greetingDate;

    public Message(String msg, Date greetingDate) {
        this.msg = msg;
        this.greetingDate = greetingDate;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Date getGreetingDate() {
        return greetingDate;
    }

    public void setGreetingDate(Date greetingDate) {
        this.greetingDate = greetingDate;
    }
}
