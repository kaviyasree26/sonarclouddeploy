package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
