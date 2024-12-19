package com.regmenu.backend.controller;

import com.regmenu.backend.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    @PostMapping("/register")
    public String userRegistration(@ModelAttribute User user) {
        System.out.println("Done!!!!");
        return "Hello " + user;
    }

}
