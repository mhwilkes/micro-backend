package com.backend.micro.product.resource

import com.backend.micro.product.model.Promotion
import com.backend.micro.product.repository.PromotionRepository
import jakarta.enterprise.context.ApplicationScoped
import jakarta.transaction.Transactional
import jakarta.ws.rs.*
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@ApplicationScoped
@Path("/promotions")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class PromotionResource(private val promotionRepository: PromotionRepository) {

    @GET
    fun getAllPromotions(): List<Promotion> {
        return promotionRepository.listAll()
    }

    @GET
    @Path("/{id}")
    fun getPromotionById(@PathParam("id") id: Long): Response {
        val promotion = promotionRepository.findById(id)
        return if (promotion != null) {
            Response.ok(promotion).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @POST
    @Transactional
    fun createPromotion(promotion: Promotion): Response {
        promotionRepository.persist(promotion)
        return Response.status(Response.Status.CREATED).entity(promotion).build()
    }

    @PUT
    @Path("/{id}")
    @Transactional
    fun updatePromotion(@PathParam("id") id: Long, updatedPromotion: Promotion): Response {
        val promotion = promotionRepository.findById(id)
        return if (promotion != null) {
            promotion.name = updatedPromotion.name
            promotion.description = updatedPromotion.description
            promotion.discountPercentage = updatedPromotion.discountPercentage
            promotion.startDate = updatedPromotion.startDate
            promotion.endDate = updatedPromotion.endDate
            promotionRepository.persist(promotion)
            Response.ok(promotion).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    fun deletePromotion(@PathParam("id") id: Long): Response {
        val promotion = promotionRepository.findById(id)
        return if (promotion != null) {
            promotionRepository.delete(promotion)
            Response.noContent().build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }
}

