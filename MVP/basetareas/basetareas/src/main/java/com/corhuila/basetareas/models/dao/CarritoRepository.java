package com.corhuila.basetareas.models.dao;

import com.corhuila.basetareas.models.entity.Carrito;
import org.springframework.data.repository.CrudRepository;

public interface CarritoRepository extends CrudRepository<Carrito, Long> {
    Carrito findByProductoId(Long productoId);  // Método para encontrar carrito por producto

}
