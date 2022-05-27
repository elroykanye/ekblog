package com.elroykanye.ekblogserver.config.global;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
public class AngularConfig implements WebMvcConfigurer {

    public void EKBaddResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**/*")
                .addResourceLocations("classpath:/ekblog-client/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        return requestedResource.exists() && requestedResource.isReadable() ? requestedResource : null;
                    }
                });
    }

}
