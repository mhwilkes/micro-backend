package com.backend.micro.product.repository

import com.backend.micro.product.model.Product
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import jakarta.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProductRepository : PanacheRepository<Product>