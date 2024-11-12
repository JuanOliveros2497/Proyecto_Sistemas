package com.corhuila.basetareas.models.dao;

import com.corhuila.basetareas.models.entity.Producto;
import org.springframework.data.repository.CrudRepository;

public interface ProductoRepository extends CrudRepository<Producto, Long> {
}
