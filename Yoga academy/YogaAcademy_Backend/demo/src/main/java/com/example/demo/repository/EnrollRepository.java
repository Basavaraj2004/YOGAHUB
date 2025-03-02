package com.example.demo.repository;

import com.example.demo.model.Enroll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EnrollRepository extends JpaRepository<Enroll, Long> {

    // Custom query to fetch enrollments with user details
    @Query("SELECT e FROM Enroll e LEFT JOIN FETCH e.user")
    List<Enroll> findAllEnrollmentsWithUser();

    // Optionally, fetch enrollments by user ID if needed
    @Query("SELECT e FROM Enroll e WHERE e.user.id = :userId")
    List<Enroll> findByUserId(@Param("userId") Long userId);
}
