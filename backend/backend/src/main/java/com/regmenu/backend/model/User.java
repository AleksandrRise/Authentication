package com.regmenu.backend.model;

public class User {
    private String name2;
    private String pass2;

//    public User(String username, String password) {
//        this.name2 = username;
//        this.pass2 = password;
//    }

    public String getUsername() {
        return name2;
    }

    public String getPassword() {
        return pass2;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + name2 + '\'' +
                ", password='" + pass2 + '\'' +
                '}';
    }
}
