package com.backend.micro.product.resource

import com.backend.micro.product.model.Category
import com.backend.micro.product.repository.CategoryRepository
import jakarta.enterprise.context.ApplicationScoped
import jakarta.transaction.Transactional
import jakarta.ws.rs.*
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@ApplicationScoped
@Path("/categories")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class CategoryResource(private val categoryRepository: CategoryRepository) {

    @GET
    fun getAllCategories(): List<Category> {
        return categoryRepository.listAll()
    }

    @GET
    @Path("/{id}")
    fun getCategoryById(@PathParam("id") id: Long): Response {
        val category = categoryRepository.findById(id)
        return if (category != null) {
            Response.ok(category).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @POST
    @Transactional
    fun createCategory(category: Category): Response {
        categoryRepository.persist(category)
        return Response.status(Response.Status.CREATED).entity(category).build()
    }

    @PUT
    @Path("/{id}")
    @Transactional
    fun updateCategory(@PathParam("id") id: Long, updatedCategory: Category): Response {
        val category = categoryRepository.findById(id)
        return if (category != null) {
            category.name = updatedCategory.name
            category.parent = updatedCategory.parent
            categoryRepository.persist(category)
            Response.ok(category).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    fun deleteCategory(@PathParam("id") id: Long): Response {
        val category = categoryRepository.findById(id)
        return if (category != null) {
            categoryRepository.delete(category)
            Response.noContent().build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }
}

