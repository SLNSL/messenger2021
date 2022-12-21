//package org.examplenew.service.old_data;
//
//
//import lombok.RequiredArgsConstructor;
//import org.examplenew.converter.PointDTOConverter;
//import org.examplenew.dto.PointDTO;
//import org.examplenew.entity.old_data.Point;
//import org.examplenew.entity.old_data.User;
//import org.examplenew.repos.old_data.PointRepository;
//import org.examplenew.repos.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.*;
//
//@Service
//@RequiredArgsConstructor
//public class PointService implements PointServiceInter {
//    @Autowired
//    private PointRepository pointRepository;
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public Optional<PointDTO> savePoint(PointDTO customPoint){
//        Optional<User> userOptional = userRepository.findById(customPoint.getUserID());
//        if (!userOptional.isPresent()){
//            return Optional.empty();
//        }
//        Point point = PointDTOConverter.dtoToEntity(customPoint, userOptional.get());
//        Point savedPoint = pointRepository.save(point);
//        PointDTO savedPointDTO = PointDTOConverter.entityToDTO(savedPoint);
//        return Optional.of(savedPointDTO);
//    }
//
//    @Override
//    public List<PointDTO> findAllByUserID(Integer userID){
//        return PointDTOConverter.listEntityToDTO(pointRepository.findAllByUser(userRepository.findById(userID).get()));
//    }
//
//
//    @Override
//    public Collection<PointDTO> deletePointsByUserID(Integer userID){
//        Optional<User> userOptional = userRepository.findById(userID);
//        if (!userOptional.isPresent()){
//            return Collections.<PointDTO>emptyList();
//        }
//        Collection<Point> pointList = pointRepository.deleteAllByUser(userRepository.findById(userID).get());
//        return PointDTOConverter.listEntityToDTO(pointList);
//    }
//}
//
//
//// Несколько реализаций и как фиксить
//// ЧТО ТАКОЕ репозитор стринг
//// ключевые слова спринг дата
//// jparepository чем заменить
//// минусы спринг