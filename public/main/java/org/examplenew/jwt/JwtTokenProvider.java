package org.examplenew.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.java.Log;
import org.examplenew.dto.CustomUserDetails;
import org.examplenew.exception.InvalidTokenException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;


import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.stream.Collectors;

@Component
@Log
public class JwtTokenProvider implements JwtProvider{

    @Value("$(jwt.secret)")
    private String jwtSecret;

    @Override
    public String generateToken(CustomUserDetails customUserDetails) {
        Date date = Date.from(LocalDate.now().plusDays(15).atStartOfDay(ZoneId.systemDefault()).toInstant());

        Claims claims = Jwts.claims().setSubject(customUserDetails.getUsername());
        claims.put("auth",
                customUserDetails.getAuthorities()
                        .stream()
                        .map(role -> new SimpleGrantedAuthority(role.getAuthority()))
                        .collect(Collectors.toList()));

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setClaims(claims)
                .setExpiration(date)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    @Override
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            throw new InvalidTokenException("Недостаточно прав.");
        }
    }
    @Override
    public String getLoginFromToken(String token) {
        Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }




}