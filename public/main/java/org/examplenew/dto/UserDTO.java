//package org.examplenew.dto;
//
//import lombok.Data;
//
//import org.examplenew.entity.Role;
//import org.examplenew.entity.old_data.User;
//import org.examplenew.entity.UserRole;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.Collection;
//import java.util.Collections;
//import java.util.HashSet;
//import java.util.Set;
//
//@Data
//public class UserDTO implements UserDetails {
//    public Long id;
//    public String userName;
//    public String userPassword;
//    private Collection<UserRole> grantedAuthorities;
//
//    public UserDTO(String userName,
//                   String userPassword){
//        this.userName = userName;
//        this.userPassword = userPassword;
//        grantedAuthorities = new HashSet<>();
//
//    }
//
////    public static UserDTO convertFromEntityToDTO(User userEntity){
////        UserDTO c = new UserDTO();
////        c.userName = userEntity.getUserName();
////        c.userPassword = userEntity.getUserPassword();
////        for (Role roleEntity: userEntity.getRoleSet()){
////            c.grantedAuthorities = Collections.singletonList(new SimpleGrantedAuthority(roleEntity.getRoleName().toString()));
////
////        }
////        return c;
////    }
//
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return grantedAuthorities;
//    }
//
//    @Override
//    public String getPassword() {
//        return userPassword;
//    }
//
//    @Override
//    public String getUsername() {
//        return userName;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//}
