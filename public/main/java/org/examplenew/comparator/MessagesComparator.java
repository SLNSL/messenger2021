package org.examplenew.comparator;

import org.examplenew.dto.PointDTO;
import org.examplenew.entity.Message;

import java.util.Comparator;

public class MessagesComparator implements Comparator {

        @Override
        public int compare(Object o1, Object o2) {
            Message p1 = (Message) o1;
            Message p2 = (Message) o2;
            return p1.getTime().compareTo(p2.getTime()); // use your logic
        }


}
