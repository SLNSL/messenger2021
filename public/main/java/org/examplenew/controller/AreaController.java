package org.examplenew.controller;


import org.examplenew.entity.User;
import org.examplenew.request.*;
import org.examplenew.response.OtherResponseWrapper;
import org.examplenew.service.MessageService;

import org.examplenew.service.UserService;
import org.examplenew.validation.PointValidatorInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.OffsetDateTime;
import java.util.List;

@RestController
@RequestMapping("/points/")
public class AreaController {


    private PointValidatorInter pointValidator;

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    public AreaController(
                          PointValidatorInter pointValidator){
        this.pointValidator = pointValidator;
    }

    @PostMapping("/send")
    public ResponseEntity<?> send(@RequestBody MessageRequest req){
        try {
            if (SecurityContextHolder.getContext().getAuthentication() == null){
                return ResponseEntity.badRequest().body(new OtherResponseWrapper("Недостаточно прав."));
            }
            System.out.println("******* " + req.getFrom() + " " + req.getTo() + req.getMessage());

            String message = req.getMessage();
            String from = req.getFrom();
            String to = req.getTo();
            String fullCurrentTime = OffsetDateTime.now().toString();
            String time = fullCurrentTime.substring(0, 10) + " " + fullCurrentTime.substring(11, 19);
            return ResponseEntity.ok().body(messageService.send(from, to, message, time));


        } catch (Exception e){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper(e.getMessage()));
        }
    }

    @PostMapping("get")
    public ResponseEntity<?> get(@RequestBody GetRequest req){
        if (SecurityContextHolder.getContext().getAuthentication() == null){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Недостаточно прав."));
        }
        List<User> users = userService.findAll();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping("getMessages")
    public ResponseEntity<?> getMessages(@RequestBody FromAndToRequest req){
        if (SecurityContextHolder.getContext().getAuthentication() == null){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Недостаточно прав."));
        }
        User from = userService.findByUserName(req.getFrom());
        User to = userService.findByUserName(req.getTo());
        return ResponseEntity.ok().body(messageService.findAllMessagesByFrom(from));
    }

//    @PostMapping("/save")
//    public ResponseEntity<?> save(@RequestBody PointRequest pointRequest){
//        try {
//            if (SecurityContextHolder.getContext().getAuthentication() == null){
//                return ResponseEntity.badRequest().body(new OtherResponseWrapper("Недостаточно прав."));
//            }
////            System.out.println("auth: " + SecurityContextHolder.getContext().getAuthentication());
//
//            Optional<String> checkPoint = pointValidator.check(pointRequest);
//            if (checkPoint.isPresent()) {
////                System.err.println(checkPoint.get());
//                return ResponseEntity.badRequest().body(new OtherResponseWrapper(checkPoint.get()));
//            }
//            Integer userID = ((CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserID();
//            Optional<PointDTO> savePointOptional = pointService.savePoint(
//                    new PointDTO(
//                            pointRequest.getX(),
//                            pointRequest.getY(),
//                            pointRequest.getR(),
//                            userID));
////            System.out.println(!savePointOptional.isPresent());
//            if (!savePointOptional.isPresent()) {
//                return ResponseEntity.badRequest().body(new OtherResponseWrapper("Точка не была сохранена."));
//            }
//            return ResponseEntity.ok().body(savePointOptional.get());
//        } catch (Exception e){
//            return ResponseEntity.badRequest().body(new OtherResponseWrapper(e.getMessage()));
//        }
//    }
//
//
//    @PostMapping("get")
//    public ResponseEntity<?> get(@RequestBody GetRequest req){
////        System.out.println("req"  + req.getUserID());
//        if (SecurityContextHolder.getContext().getAuthentication() == null){
//            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Недостаточно прав."));
//        }
//        List<PointDTO> points = pointService.findAllByUserID(Integer.valueOf(req.getUserID()));
//        points.sort(new PointDTODataComparator());
//        return ResponseEntity.ok().body(points);
//    }
//
//    @PostMapping("clear")
//    public ResponseEntity<?> clear(@RequestBody PointRequest pointRequest){
////        System.out.println(pointRequest.getUserID());
//        if (SecurityContextHolder.getContext().getAuthentication() == null){
//            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Недостаточно прав."));
//        }
////        System.out.println("FFDAFA" + pointRequest.getUserID());
//        Collection<PointDTO> deletedDTOPoints = pointService.deletePointsByUserID(pointRequest.getUserID());
//        return ResponseEntity.ok().body(deletedDTOPoints);
//    }


}
