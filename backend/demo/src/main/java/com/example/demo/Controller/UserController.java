package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.JwtService;
import com.example.demo.Service.UserService;
import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.AuthResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;
    @PostMapping("/register")
    public User postMethodName(@RequestBody User user) {
        System.out.println("hello");
        //TODO: process POST request
        return userService.saveUser(user);
    }
    @GetMapping("/login")
    public User getMethodName(@RequestParam String email,@RequestParam String password) {
        User u= userRepository.findByEmail(email);
        if(u!=null && passwordEncoder.matches(password, u.getPassword()))
        {
            return u;
        }
        return null;
        
    }
    
    

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getemail(), authRequest.getPassword())
            );

            if (authentication.isAuthenticated()) {
                String email = authRequest.getemail();
                String token = jwtService.generateToken(email);
                
                // Check role
                String role;
                try {
                    role = userService.getUserRole(email);
                } catch (UsernameNotFoundException e) {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Role not found");
                }

                AuthResponse response = new AuthResponse(token, role);
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }

    // Other methods...
}
