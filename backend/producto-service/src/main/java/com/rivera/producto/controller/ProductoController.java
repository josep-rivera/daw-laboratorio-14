package com.rivera.producto.controller;

import com.rivera.producto.entity.Producto;
import com.rivera.producto.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin("*")
public class ProductoController {

    @Autowired
    private ProductoService service;

    @GetMapping
    public List<Producto> listar() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Producto buscar(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Producto crear(@RequestBody Producto producto) {
        return service.save(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.delete(id);
    }
}
