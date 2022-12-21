package org.examplenew.request;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FromAndToRequest {
    private String from;
    private String to;
}
