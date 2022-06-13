package com.elroykanye.ekblogserver.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/va")
public class EkbController {

    @GetMapping
    public String index() {
        return "index.html";
    }
}
