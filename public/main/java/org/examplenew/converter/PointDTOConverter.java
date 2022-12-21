//package org.examplenew.converter;
//
//import org.examplenew.dto.PointDTO;
//import org.examplenew.entity.User1;
//import org.examplenew.entity.old_data.Point;
//import org.examplenew.entity.old_data.User;
//
//import java.util.Collection;
//import java.util.LinkedList;
//import java.util.List;
//
//public class PointDTOConverter {
//
//
//    public static List<PointDTO> listEntityToDTO(Collection<Point> pointList){
//        List<PointDTO> listPointDTO = new LinkedList<>();
//        for (Point point : pointList){
//            listPointDTO.add(entityToDTO(point));
//        }
//        return listPointDTO;
//    }
//
//    public static List<Point> listDTOtoEntity(Collection<PointDTO> pointDTOList, User1 user){
//        List<Point> listPoint = new LinkedList<>();
//        for (PointDTO pointDTO : pointDTOList){
//            listPoint.add(dtoToEntity(pointDTO, user));
//        }
//        return listPoint;
//    }
//}
