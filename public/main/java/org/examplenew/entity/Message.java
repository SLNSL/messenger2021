package org.examplenew.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "messages__")
public class Message {
    @Id
    @GeneratedValue
    private Integer messageID;

    @Column
    private String time;

    @Column
    private String message;

    @ManyToOne
    @JoinColumn(name = "fromuserid", referencedColumnName = "userid")
    private User from;

    @ManyToOne
    @JoinColumn(name = "touserid", referencedColumnName = "userid")
    private User to;




    //--------------------------------------
    public Message(){};


}