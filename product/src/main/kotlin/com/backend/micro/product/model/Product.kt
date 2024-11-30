import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntity
import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDateTime

@Entity
@Table(name = "products")
data class Product(
    @field:Column(nullable = false, unique = true) var name: String,                      // Name of the product

    @field:Column(
        nullable = true, length = 1000
    ) var description: String?,              // Optional description of the product

    @field:Column(nullable = false) var price: BigDecimal,                 // Price of the product

    @field:OneToMany(
        cascade = [CascadeType.ALL], orphanRemoval = true, fetch = FetchType.EAGER
    ) @field:JoinColumn(name = "product_id") var images: MutableList<ProductImage> = mutableListOf(), // List of associated images

    @field:Column(
        name = "created_at", nullable = false
    ) var createdAt: LocalDateTime = LocalDateTime.now(), // Creation timestamp

    @field:Column(
        name = "updated_at", nullable = false
    ) var updatedAt: LocalDateTime = LocalDateTime.now()  // Last update timestamp

) : PanacheEntity() {
    constructor() : this("", "", BigDecimal.ZERO) {

    }
}