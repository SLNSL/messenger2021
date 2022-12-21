package org.examplenew.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.examplenew.comparator.MessagesComparator;
import org.examplenew.entity.Message;
import org.examplenew.entity.User;
import org.examplenew.repos.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserService userService;


    public Message send(String from, String to, String message, String time) {
        Message messageEnt = new Message();
        User fromEnt = userService.findByUserName(from);
        User toEnt = userService.findByUserName(to);

        messageEnt.setFrom(fromEnt);
        messageEnt.setTo(toEnt);
        messageEnt.setTime(time);
        messageEnt.setMessage(message);

        return messageRepository.save(messageEnt);
    }

    public List<Message> findAllMessagesByFrom(User from){
        List<Message> list = messageRepository.findAllByFrom(from);
        list.addAll(messageRepository.findAllByTo(from));
        list.sort(new MessagesComparator());
        System.out.println("************");
        list.stream().map(e -> e.getTo().getUserName()+"->"+e.getFrom().getUserName()).forEach(System.out::println);
        return list;

    }
}
