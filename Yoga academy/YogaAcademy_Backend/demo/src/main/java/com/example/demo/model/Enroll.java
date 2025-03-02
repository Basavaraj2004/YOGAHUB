package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Data
@Entity
@Table(name = "enrollments")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from this origin
public class Enroll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Course_name", nullable = false)
    private String courseName;
    
    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "Course_id", nullable = false)
    private Long courseId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;
}
