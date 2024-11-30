import com.backend.micro.product.model.ProductImageMetadata
import com.backend.micro.product.model.constant.ImageType
import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntity
import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "product_images")
data class ProductImage(

    @field:Column(nullable = false, unique = true) var url: String,

    @field:Column(
        name = "alt_text", nullable = false
    ) var altText: String,

    @field:Column(nullable = true) var title: String?,

    @field:Enumerated(EnumType.STRING) @field:Column(nullable = false) var type: ImageType,

    @field:Embedded var metadata: ProductImageMetadata,

    @field:Column(
        name = "created_at", nullable = false
    ) var createdAt: LocalDateTime = LocalDateTime.now(),

    @field:Column(
        name = "updated_at", nullable = false
    ) var updatedAt: LocalDateTime = LocalDateTime.now()

) : PanacheEntity() {
    constructor() : this("", "", "", ImageType.NONE, ProductImageMetadata())
}