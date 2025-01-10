package com.regmenu.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

// This controller links frontend with backend
@Controller
public class IndexController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

}
