package com.debacodes.noobsystems.service;

import com.debacodes.noobsystems.model.Student;
import com.debacodes.noobsystems.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudnets() {
        return studentRepository.findAll();
    }
}
