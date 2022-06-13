package com.elroykanye.ekblogserver.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/")
public class EkbController {
    @RequestMapping(value = "va")
    @ResponseBody
    public String home() {
        return "forward:index.html";
    }
}
