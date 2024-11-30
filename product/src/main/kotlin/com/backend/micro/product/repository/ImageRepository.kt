package com.backend.micro.product.repository

import ProductImage
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import jakarta.enterprise.context.ApplicationScoped

@ApplicationScoped
class ImageRepository : PanacheRepository<ProductImage> {}