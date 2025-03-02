package com.example.demo.controller;

import com.example.demo.model.UserProgress;
import com.example.demo.service.UserProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-progress")
public class UserProgressController {

    @Autowired
    private UserProgressService userProgressService;

    @GetMapping("/{userId}/{courseId}")
    public ResponseEntity<List<UserProgress>> getUserProgress(@PathVariable Long userId, @PathVariable Long courseId) {
        List<UserProgress> userProgressList = userProgressService.getUserProgress(userId, courseId);
        return ResponseEntity.ok(userProgressList);
    }

    @PostMapping("/complete-task")
    public ResponseEntity<UserProgress> completeTask(@RequestBody UserProgress userProgress) {
        UserProgress savedProgress = userProgressService.saveOrUpdateUserProgress(userProgress);
        return ResponseEntity.ok(savedProgress);
    }
}
