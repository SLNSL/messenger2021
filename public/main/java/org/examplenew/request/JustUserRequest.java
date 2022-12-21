package org.examplenew.request;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JustUserRequest {
        private String login;
        private String token;

}
