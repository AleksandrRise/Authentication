package com.regmenu.backend.entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Controller for managing requests between backend and database
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping
    public List<UserEntity> getAllUsers() {
        return this.userService.getUsers();
    }

    @PostMapping("/register")
    public ResponseEntity<Object> createUser(@RequestBody UserEntity user) {
        return userService.newUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable Long id, @RequestBody UserEntity updatedUser) {
        return this.userService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        return this.userService.deleteUser(id);
    }

    @GetMapping("/byid/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        return this.userService.getUserById(id);
    }

    @GetMapping("/byname/{username}")
    public ResponseEntity<Object> getUserByName(@PathVariable String username) {
        return this.userService.getUserByName(username);
    }
}
