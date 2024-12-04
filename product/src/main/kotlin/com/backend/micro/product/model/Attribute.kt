package com.backend.micro.product.model

import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntityBase
import jakarta.json.bind.annotation.JsonbTransient
import jakarta.persistence.*

@Entity
@Table(name = "attribute")
class Attribute : PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    @Column(name = "type", nullable = false)
    lateinit var type: String

    @Column(name = "value", nullable = false)
    lateinit var value: String

    @JsonbTransient
    @ManyToMany(mappedBy = "attributes", fetch = FetchType.LAZY)
    var products: MutableSet<Product> = mutableSetOf()
}