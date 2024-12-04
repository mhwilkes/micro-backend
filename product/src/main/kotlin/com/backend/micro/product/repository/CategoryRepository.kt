package com.backend.micro.product.repository

import com.backend.micro.product.model.Category
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import jakarta.enterprise.context.ApplicationScoped

@ApplicationScoped
class CategoryRepository : PanacheRepository<Category>