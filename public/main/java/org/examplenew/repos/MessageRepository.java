package org.examplenew.repos;

import org.examplenew.entity.Message;
import org.examplenew.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, String> {

    @Transactional
    List<Message> findAllByFrom(User from);

    @Transactional
    List<Message> findAllByTo(User to);

}
