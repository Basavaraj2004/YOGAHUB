package com.example.demo.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "programs")
public class Program  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imgSrc;
    private String title;
    private String location;
    private String price;
    private String date;
    private String description;
    
}
