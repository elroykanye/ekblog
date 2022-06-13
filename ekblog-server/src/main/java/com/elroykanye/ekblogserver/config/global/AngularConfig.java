package com.elroykanye.ekblogserver.config.global;

import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


public class AngularConfig implements WebMvcConfigurer {

    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addRedirectViewController("/", "/static/index.html");
    }
}
