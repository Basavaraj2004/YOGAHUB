package com.example.demo.controller;

import com.example.demo.model.Enroll;
import com.example.demo.service.EnrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from this origin
public class EnrollController {

    @Autowired
    private EnrollService enrollService;

    // Endpoint to create a new enrollment
    @PostMapping
    public ResponseEntity<Enroll> createEnrollment(@RequestBody Enroll enroll) {
        Enroll savedEnroll = enrollService.saveEnrollment(enroll);
        return ResponseEntity.ok(savedEnroll);
    }

    // Endpoint to get all enrollments with user details
    @GetMapping("/all")
    public ResponseEntity<List<Enroll>> getAllEnrollments() {
        List<Enroll> enrollments = enrollService.getAllEnrollments();
        return ResponseEntity.ok(enrollments);
    }

    // Endpoint to get enrollments by user ID
    @GetMapping
    public ResponseEntity<List<Enroll>> getEnrollmentsByUserId(@RequestParam Long userId) {
        List<Enroll> enrollments = enrollService.getEnrollmentsByUserId(userId);
        return ResponseEntity.ok(enrollments);
    }
}
