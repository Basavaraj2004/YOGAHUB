package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
// import java.util.List;

@Entity
@Data
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private String title;
    private String content;
    private Integer day;
    private Long courseId;

    // @OneToMany(mappedBy = "task", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    // private List<UserProgress> userProgressList;
}
