package com.example.demo.controller;

import com.example.demo.model.Course;
import com.example.demo.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from this origin
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        // Encode images as Base64
        for (Course course : courses) {
            course.setImage(getBase64Image(course.getImage()));
        }
        return courses;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Optional<Course> course = courseService.getCourseById(id);
        if (course.isPresent()) {
            Course courseData = course.get();
            courseData.setImage(getBase64Image(courseData.getImage()));
            return ResponseEntity.ok(courseData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/updates")
    public ResponseEntity<String> getCourseUpdates(@PathVariable Long id) {
        try {
            // Fetch course updates based on the course id
            String updates = courseService.getCourseUpdates(id); // Implement this method in your service
            return ResponseEntity.ok(updates);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching updates");
        }
    }

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Course savedCourse = courseService.saveCourse(course);
        return ResponseEntity.ok(savedCourse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        try {
            courseService.deleteCourse(id); // Ensure this method exists in your service class
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting course");
        }
    }

    private String getBase64Image(String imagePath) {
        try {
            ClassPathResource imgFile = new ClassPathResource("static" + imagePath);
            InputStream in = imgFile.getInputStream();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                baos.write(buffer, 0, bytesRead);
            }
            byte[] imageBytes = baos.toByteArray();
            return "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(imageBytes);
        } catch (IOException e) {
            e.printStackTrace(); // Log the exception for debugging
            return "";
        }
    }
}
