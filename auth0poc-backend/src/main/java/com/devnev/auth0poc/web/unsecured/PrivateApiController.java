package com.devnev.auth0poc.web.unsecured;

import com.devnev.auth0poc.dto.Message;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.Date;

@Controller
public class PrivateApiController {

    @GetMapping("/api/private")
    @ResponseBody
    public Message getSecretAncientMessage() {
        return new Message("This is ancient message, allowed only for authorized ones!",
                Date.from(LocalDate.now().minusYears(2000).atStartOfDay().toInstant(ZoneOffset.UTC)));
    }

}
