package com.project.VideoCall.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Service
public class UserService {
    private static final List<User> user_list=new ArrayList<>();



    public void register(User user){
        user.setStatus("online");
        user_list.add(user);
    }

    public User login(User user){
        var userIndex=   IntStream.range(0,user_list.size())
                .filter(i -> user_list.get(i).getEmail().equals(user.getEmail()))
                .findAny()
                .orElseThrow(
                        ()->new RuntimeException("User not found")
                );
        var cUser=user_list.get(userIndex);
        if(!cUser.getPassword().equals(user.getPassword())){
            throw new RuntimeException("Incorrect Password");
        }
        cUser.setStatus("online");
        return cUser;
    }

    public void logout(String email){
        var userIndex= IntStream.range(0,user_list.size())
                .filter(i->user_list.get(i).getEmail().equals(email))
                .findAny().orElseThrow(
                        ()->new RuntimeException("User not found")
                );
        user_list.get(userIndex).setStatus("offline");
    }

    public List<User> findAll(){
        return user_list;
    }

}
