/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mynotesrzd.springboot.service;

import mynotesrzd.springboot.domain.User;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author rizdaannisa
 */
public interface UserDao extends PagingAndSortingRepository<User, String>{
    public User findByUsername(String name); //membuat query
}