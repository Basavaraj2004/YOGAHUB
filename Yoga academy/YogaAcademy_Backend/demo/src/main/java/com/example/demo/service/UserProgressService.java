package com.example.demo.service;

import com.example.demo.model.UserProgress;
import com.example.demo.repository.UserProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserProgressService {

    @Autowired
    private UserProgressRepository userProgressRepository;

    public List<UserProgress> getUserProgress(Long userId, Long courseId) {
        return userProgressRepository.findByUserIdAndCourseId(userId, courseId)
                .map(List::of)
                .orElse(List.of());
    }

    public UserProgress saveOrUpdateUserProgress(UserProgress userProgress) {
        Optional<UserProgress> existingProgress = userProgressRepository.findByUserIdAndCourseId(userProgress.getUser().getId(), userProgress.getCourseId());
        if (existingProgress.isPresent()) {
            UserProgress progress = existingProgress.get();
            progress.setProgressPercentage(userProgress.getProgressPercentage());
            progress.setCompletionDate(userProgress.getCompletionDate());
            return userProgressRepository.save(progress);
        } else {
            return userProgressRepository.save(userProgress);
        }
    }
}
