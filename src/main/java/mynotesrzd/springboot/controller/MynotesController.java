/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mynotesrzd.springboot.controller;

import mynotesrzd.springboot.domain.Mynotes;
import mynotesrzd.springboot.service.MynotesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author rizdaannisa
 */
@RestController
@RequestMapping("api/mynotes")
public class MynotesController {
    @Autowired
    private MynotesDao mynotesDao;
    
    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public Mynotes findMynotesById(@PathVariable String id){
        return mynotesDao.findOne(id);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody Mynotes p){
        mynotesDao.save(p);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public Page<Mynotes> findAll(Pageable pageable){
        return mynotesDao.findAll(pageable);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        Mynotes p = mynotesDao.findOne(id);
        if(p !=null){
            mynotesDao.delete(p);
        }
    }
    
    @RequestMapping(value = "/{id}",method = RequestMethod.PUT)
    public void edit(@PathVariable String id, @RequestBody Mynotes p){
        Mynotes mynotes = mynotesDao.findOne(id);
        if(mynotes != null){
            p.setId(id);
            mynotesDao.save(p);
        }
    }
    
}