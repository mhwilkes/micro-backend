package com.backend.micro.product.resource

import Product
import ProductImage
import com.backend.micro.product.repository.ImageRepository
import com.backend.micro.product.repository.ProductRepository
import io.smallrye.common.annotation.RunOnVirtualThread
import jakarta.inject.Inject
import jakarta.persistence.LockModeType
import jakarta.transaction.Transactional
import jakarta.ws.rs.*
import jakarta.ws.rs.core.Response
import java.net.URI
import java.time.LocalDateTime
import java.util.*

@Path("/product")
@RunOnVirtualThread
class ProductResource {

    @Inject
    private lateinit var imageRepository: ImageRepository

    @Inject
    private lateinit var imageResource: ImageResource

    @Inject
    lateinit var productRepository: ProductRepository

    @GET
    @Path("/{id}")
    @Transactional
    fun getProductById(@PathParam("id") id: Long): Response {
        val product = productRepository.findById(id) ?: return Response.status(Response.Status.NOT_FOUND).build()
        return Response.ok(product).build()
    }

    @GET
    @Transactional
    fun getAllProducts(): Response {
        return Response.ok(productRepository.listAll()).build()
    }

    @POST
    @Transactional
    fun createProduct(product: Product): Response {
        if (product.id != null) return Response.status(Response.Status.BAD_REQUEST).build()
        productRepository.persist(product)
        return Response.created(URI.create("")).build()
    }

    @GET
    @Path("/name/{product_name}")
    @Transactional
    fun getProductByName(@PathParam("product_name") productName: String): Response {
        val product = productRepository.find("lower(name) LIKE ?1", productName.lowercase(Locale.getDefault()) + "%")
            .firstResult() ?: return Response.status(404).build()
        return Response.ok(product).build()
    }

    @PUT
    @Path("/{id}")
    @Transactional
    fun updateProductById(@PathParam("id") id: Long, updatedProduct: Product): Response {
        val product = productRepository.findById(id, LockModeType.PESSIMISTIC_WRITE)
            ?: return Response.status(Response.Status.NOT_FOUND).build()

        product.apply {
            name = updatedProduct.name
            description = updatedProduct.description
            price = updatedProduct.price
            updatedAt = LocalDateTime.now()

            // Ensure images are managed by iterating and merging/persisting each
            images.clear()
            updatedProduct.images.forEach { image ->
                val managedImage = if (image.id == null) {
                    imageRepository.getEntityManager().persist(image)
                    image
                } else {
                    imageRepository.getEntityManager().merge(image)
                }
                images.add(managedImage)
            }
        }

        return Response.ok(product).build()

    }

    @DELETE
    @Path("/{id}")
    @Transactional
    fun deleteProduct(@PathParam("id") id: Long): Response {
        val product = productRepository.findById(id) ?: return Response.status(Response.Status.NOT_FOUND).build()
        product.delete()
        return Response.noContent().build()
    }
}