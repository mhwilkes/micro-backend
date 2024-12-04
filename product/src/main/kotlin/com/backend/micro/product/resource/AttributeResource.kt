package com.backend.micro.product.resource

import com.backend.micro.product.model.Attribute
import com.backend.micro.product.repository.AttributeRepository
import jakarta.enterprise.context.ApplicationScoped
import jakarta.transaction.Transactional
import jakarta.ws.rs.*
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@ApplicationScoped
@Path("/attributes")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class AttributeResource(private val attributeRepository: AttributeRepository) {

    @GET
    fun getAllAttributes(): List<Attribute> {
        return attributeRepository.listAll()
    }

    @GET
    @Path("/{id}")
    fun getAttributeById(@PathParam("id") id: Long): Response {
        val attribute = attributeRepository.findById(id)
        return if (attribute != null) {
            Response.ok(attribute).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @POST
    @Transactional
    fun createAttribute(attribute: Attribute): Response {
        attributeRepository.persist(attribute)
        return Response.status(Response.Status.CREATED).entity(attribute).build()
    }

    @PUT
    @Path("/{id}")
    @Transactional
    fun updateAttribute(@PathParam("id") id: Long, updatedAttribute: Attribute): Response {
        val attribute = attributeRepository.findById(id)
        return if (attribute != null) {
            attribute.type = updatedAttribute.type
            attribute.value = updatedAttribute.value
            attributeRepository.persist(attribute)
            Response.ok(attribute).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    fun deleteAttribute(@PathParam("id") id: Long): Response {
        val attribute = attributeRepository.findById(id)
        return if (attribute != null) {
            attributeRepository.delete(attribute)
            Response.noContent().build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }
}

