package com.example.demo.controller;

import com.example.demo.model.Program;
import com.example.demo.service.ProgramService;
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
@RequestMapping("/api/programs")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from this origin
public class ProgramController {

    @Autowired
    private ProgramService programService;

    @GetMapping
    public List<Program> getAllPrograms() {
        List<Program> programs = programService.getAllPrograms();
        // Encode images as Base64
        for (Program program : programs) {
            program.setImgSrc(getBase64Image(program.getImgSrc()));
        }
        return programs;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Program> getProgramById(@PathVariable Long id) {
        Optional<Program> program = programService.getProgramById(id);
        if (program.isPresent()) {
            Program programData = program.get();
            programData.setImgSrc(getBase64Image(programData.getImgSrc()));
            return ResponseEntity.ok(programData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Program> addProgram(@RequestBody Program program) {
        Program savedProgram = programService.saveProgram(program);
        return ResponseEntity.ok(savedProgram);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProgram(@PathVariable Long id) {
        try {
            programService.deleteProgram(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting program");
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
