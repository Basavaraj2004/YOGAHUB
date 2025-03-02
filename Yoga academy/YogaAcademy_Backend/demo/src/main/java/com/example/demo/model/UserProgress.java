package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Data
@Entity
@Table(name = "user_progress")
public class UserProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @Column(name = "course_id", nullable = false)
    private Long courseId;  // Renamed to follow naming conventions

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "completion_date")
    private Date completionDate;

    @Column(name = "progress_percentage")
    private Double progressPercentage;
}
