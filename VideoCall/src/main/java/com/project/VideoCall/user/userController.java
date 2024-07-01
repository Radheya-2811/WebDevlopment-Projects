package com.project.VideoCall.user;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.IntStream;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Slf4j
public class userController {

    private final UserService service;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user){
       service.register(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");

    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return service.login(user);

    }

    @PostMapping("/logout")
    public void logout(@RequestBody User email){
        service.logout(email.getEmail());
    }


    @GetMapping("/getuser")
    public List<User> findAll(){
        return service.findAll();
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handle(Exception e){
        e.printStackTrace();
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(e.getMessage());

    }

}
