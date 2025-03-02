package com.example.demo.service;

import com.example.demo.model.Enroll;
import com.example.demo.repository.EnrollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    // Method to save an enrollment
    public Enroll saveEnrollment(Enroll enroll) {
        return enrollRepository.save(enroll);
    }

    // Method to get all enrollments with user details
    public List<Enroll> getAllEnrollments() {
        return enrollRepository.findAllEnrollmentsWithUser();
    }

    // Method to get enrollments by user ID
    public List<Enroll> getEnrollmentsByUserId(Long userId) {
        return enrollRepository.findByUserId(userId);
    }
}
