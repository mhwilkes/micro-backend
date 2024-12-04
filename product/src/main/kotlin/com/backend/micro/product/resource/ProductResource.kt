package com.backend.micro.product.resource

import com.backend.micro.product.model.Product
import com.backend.micro.product.repository.ProductRepository
import jakarta.enterprise.context.ApplicationScoped
import jakarta.transaction.Transactional
import jakarta.ws.rs.*
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@ApplicationScoped
@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class ProductResource(private val productRepository: ProductRepository) {

    @GET
    fun getAllProducts(): List<Product> {
        return productRepository.listAll()
    }

    @GET
    @Path("/{id}")
    fun getProductById(@PathParam("id") id: Long): Response {
        val product = productRepository.findById(id)
        return if (product != null) {
            Response.ok(product).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @POST
    @Transactional
    fun createProduct(product: Product): Response {
        productRepository.persist(product)
        return Response.status(Response.Status.CREATED).entity(product).build()
    }

    @PUT
    @Path("/{id}")
    @Transactional
    fun updateProduct(@PathParam("id") id: Long, updatedProduct: Product): Response {
        val product = productRepository.findById(id)
        return if (product != null) {
            product.name = updatedProduct.name
            product.description = updatedProduct.description
            product.price = updatedProduct.price
            product.stockLevel = updatedProduct.stockLevel
            product.availability = updatedProduct.availability
            product.category = updatedProduct.category
            productRepository.persist(product)
            Response.ok(product).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    fun deleteProduct(@PathParam("id") id: Long): Response {
        val product = productRepository.findById(id)
        return if (product != null) {
            productRepository.delete(product)
            Response.noContent().build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }
}

