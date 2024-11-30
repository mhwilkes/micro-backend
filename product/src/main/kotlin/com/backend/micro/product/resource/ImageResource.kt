package com.backend.micro.product.resource

import com.backend.micro.product.repository.ImageRepository
import jakarta.inject.Inject
import jakarta.ws.rs.GET
import jakarta.ws.rs.Path
import jakarta.ws.rs.PathParam
import jakarta.ws.rs.core.Response

@Path("/product/image/")
class ImageResource {
    @Inject
    lateinit var imageRepository: ImageRepository

    @GET
    @Path("/{id}")
    fun getImageById(@PathParam("id") id: Long): Response {
        val image = imageRepository.findById(id) ?: return Response.status(404).build()
        return Response.ok(image).build()
    }
}