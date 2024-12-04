package com.backend.micro.product.model

import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntityBase
import jakarta.json.bind.annotation.JsonbTransient
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "promotion")
class Promotion : PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    @Column(name = "name", nullable = false)
    lateinit var name: String

    @Column(name = "description")
    var description: String? = null

    @Column(name = "discount_percentage", nullable = false)
    var discountPercentage: Double = 0.0

    @Column(name = "start_date", nullable = false)
    var startDate: LocalDate? = null

    @Column(name = "end_date", nullable = false)
    var endDate: LocalDate? = null

    @JsonbTransient
    @ManyToMany(mappedBy = "promotions", fetch = FetchType.LAZY)
    var products: MutableSet<Product> = mutableSetOf()
}