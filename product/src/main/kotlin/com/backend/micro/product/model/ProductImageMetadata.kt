package com.backend.micro.product.model

import com.backend.micro.product.model.constant.ImageFormat
import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated

@Embeddable
data class ProductImageMetadata(
    @field:Column(nullable = false) var width: Int,                        // Width in pixels

    @field:Column(nullable = false) var height: Int,                       // Height in pixels

    @field:Column(name = "size_in_bytes", nullable = false) var sizeInBytes: Long,                 // File size in bytes

    @field:Enumerated(EnumType.STRING) @Column(nullable = false) var format: ImageFormat                // Format of the image (e.g., JPEG, PNG, etc.)
) {
    constructor() : this(0, 0, 0, ImageFormat.NONE)

}