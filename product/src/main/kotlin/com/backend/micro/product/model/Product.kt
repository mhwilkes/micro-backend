package com.backend.micro.product.model

import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntityBase
import jakarta.json.bind.annotation.JsonbTransient
import jakarta.persistence.*

@Entity
@Table(name = "product")
class Product : PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    @Column(name = "name", nullable = false)
    lateinit var name: String

    @Column(name = "description")
    var description: String? = null

    @Column(name = "price", nullable = false)
    var price: Double = 0.0

    @ElementCollection
    @Column(name = "image_urls")
    var imageUrls: List<String> = mutableListOf()

    @Column(name = "stock_level", nullable = false)
    var stockLevel: Int = 0

    @Column(name = "availability", nullable = false)
    var availability: Boolean = true

    @JsonbTransient
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    var category: Category? = null

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "product_attributes",
        joinColumns = [JoinColumn(name = "product_id")],
        inverseJoinColumns = [JoinColumn(name = "attribute_id")]
    )
    var attributes: MutableSet<Attribute> = mutableSetOf()

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "product_promotions",
        joinColumns = [JoinColumn(name = "product_id")],
        inverseJoinColumns = [JoinColumn(name = "promotion_id")]
    )
    var promotions: MutableSet<Promotion> = mutableSetOf()
}