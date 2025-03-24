package com.harsh.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fullname;
    private String email;
    private String password;
    private USER_ROLE  role;


    private list<Order> orders=new ArrayList<Order>();

}
