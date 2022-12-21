//package org.examplenew.config;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.DefaultSecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@RequiredArgsConstructor
//public class JwtFilterConfig  extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
//
//    private final JwtProvider jwtProvider;
//
//    @Override
//    public void configure(HttpSecurity http) {
//        System.out.println("filtering...");
//        JwtFilter customFilter = new JwtFilter(jwtProvider);
//        http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
//        System.out.println("!!!!!!!!!!!!" + SecurityContextHolder.getContext().getAuthentication());
//    }
//}