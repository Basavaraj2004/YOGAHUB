package com.example.demo.service;

import com.example.demo.model.Course;
import com.example.demo.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
    public String getCourseUpdates(Long courseId) {
        // Implement logic to fetch updates for the course
        // This can be a simple string or a more complex object based on your needs
        // For example:
        Optional<Course> course = courseRepository.findById(courseId);
        if (course.isPresent()) {
            return course.get().getUpdates(); // Make sure 'getUpdates' is a valid method
        } else {
            throw new RuntimeException("Course not found");
        }
    }
}
