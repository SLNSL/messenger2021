//package org.examplenew.repos.old_data;
//
//
//import org.examplenew.entity.User;
//import org.examplenew.entity.old_data.Point;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.Collection;
//
//@Repository
//public interface PointRepository extends JpaRepository<Point, Long> {
//
//    @Transactional
//    Collection<Point> deleteAllByUser(User user);
//    @Transactional
//    Collection<Point> findAllByUser(User user);
//
//
//}
