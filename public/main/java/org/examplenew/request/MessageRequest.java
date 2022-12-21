package org.examplenew.request;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MessageRequest {
    String from;
    String to;
    String time;
    String message;
}
