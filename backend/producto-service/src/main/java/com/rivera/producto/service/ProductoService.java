package com.rivera.producto.service;

import com.rivera.producto.entity.Producto;
import java.util.List;

public interface ProductoService {

    List<Producto> findAll();
    Producto save(Producto producto);
    Producto findById(Long id);
    void delete(Long id);
}
