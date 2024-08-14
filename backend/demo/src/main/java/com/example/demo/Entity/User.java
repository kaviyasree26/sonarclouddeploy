package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;    
    private String coursepursued;
    private String resume;  // Store resume as a URL or base64 string
    private String city;
    private String country;

    // @ManyToOne
    // @JoinColumn(name = "id")
    // private Agent agent;

    // @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    // private Set<Property> properties;

    private String role;  // Add this field to store the user's role
}
