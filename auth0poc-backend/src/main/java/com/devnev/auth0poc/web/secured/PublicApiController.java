package com.devnev.auth0poc.web.secured;

import com.devnev.auth0poc.dto.Message;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class PublicApiController {

    @GetMapping("/api/public")
    @ResponseBody
    public Message sayHelloPublic() {
        return new Message("Hello fellow guest!", new Date());
    }

}
