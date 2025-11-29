package com.rivera.categoria.service;

import com.rivera.categoria.entity.Categoria;
import java.util.List;

public interface CategoriaService {
    List<Categoria> findAll();
    Categoria save(Categoria categoria);
    Categoria findById(Long id);
    void delete(Long id);
}
