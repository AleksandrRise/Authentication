package com.regmenu.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    @PostMapping("/register")
    public String userRegistration(
            @RequestParam("name2") String username,
            @RequestParam("pass2") String password,
            @RequestParam("confPass2") String confPass
            ) {
        System.out.println(username + password + confPass);
        return "index";
    }

}
