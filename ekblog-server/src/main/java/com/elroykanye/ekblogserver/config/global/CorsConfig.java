package com.elroykanye.ekblogserver.config.global;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    private static final String[] ALLOWED_ORIGINS = new String[]{
            "http://localhost:8080",
            "http://localhost:4200",
            "http://localhost:8000",
            "http://localhost:4200",
            "http://localhost:3000"
    };
    private static final String[] ALLOWED_METHODS = new String[]{
            "GET", "POST", "PUT", "DELETE"
    };

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedMethods(ALLOWED_METHODS)
                .allowedOrigins(ALLOWED_ORIGINS);
    }
}
