package com.corhuila.basetareas.models.service;

import com.corhuila.basetareas.models.entity.Producto;

import java.util.List;

public interface IProductoService {

    List<Producto> findAll();

    Producto findById(Long id);

    Producto save(Producto producto);

    void delete(Long id);
}
