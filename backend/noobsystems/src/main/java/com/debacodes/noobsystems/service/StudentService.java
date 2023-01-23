package com.debacodes.noobsystems.service;

import com.debacodes.noobsystems.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudnets();
}
