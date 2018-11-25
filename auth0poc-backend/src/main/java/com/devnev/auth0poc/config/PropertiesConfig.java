package com.devnev.auth0poc.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:auth0.properties")
public class PropertiesConfig {
}
