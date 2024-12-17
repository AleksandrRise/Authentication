package com.regmenu.backend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class SignupFunction {

    @PostMapping("/posting")
    public String po(@RequestParam("name2") String username) {
        System.out.println(username);
        return "hello " + username;
    }
}
