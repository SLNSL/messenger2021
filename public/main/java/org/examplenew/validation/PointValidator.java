package org.examplenew.validation;


import org.examplenew.request.PointRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PointValidator implements PointValidatorInter {

    @Override
    public Optional<String> check(PointRequest req){
        if (checkX(req.getX()).isPresent()){
            return checkX(req.getX());
        }
        if (checkY(req.getY()).isPresent()){
            return checkY(req.getY());
        }
        if (checkR(req.getR()).isPresent()){
            return checkR(req.getR());
        }
        return Optional.empty();
    }

    @Override
    public Optional<String> checkX(Double x){
        if (x == null || x.isNaN() || x < -5 || x > 3){
            return Optional.of("X должен быть числом от -5 до 3.");
        }
        return Optional.empty();
    }

    @Override
    public Optional<String> checkY(Double y){
        if (y == null || y.isNaN() || y < -3 || y > 3){
            return Optional.of("Y должен быть числом от -3 до 3.");
        }
        return Optional.empty();
    }

    @Override
    public Optional<String> checkR(Double r){
        if (r == null || r.isNaN() || r < -5 || r > 3){
            return Optional.of("R должен быть числом от -5 до 3.");
        }
        return Optional.empty();
    }
}
