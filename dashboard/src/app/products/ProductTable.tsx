import React, {useState} from 'react';
import {ProductImage} from "@/types/ProductImage";
import {Product} from "@/types/Product";
import Modal from "@/components/ModalComponent";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";
import GenericTable from "@/components/Table/GenericTable";

const ProductTable = ({products}: { products: Product[] }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const openModal = (images: ProductImage[]) => {
        setModalContent(renderProductImages(images));
        setModalOpen(true);
    };

    const renderProductImages = (images: ProductImage[]) => (
            <>
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={image.url}
                                width={200} // Adjust widths/heights as necessary
                                height={150}
                                alt={image.altText}
                                className="w-full h-48 object-cover rounded"
                            />
                            {image.title && <h4 className="mt-2 font-semibold text-center">{image.title}</h4>}
                            {image.altText && <p className="text-sm text-center">{image.altText}</p>}
                        </div>
                    ))}
                </div>
            </>
        )
    ;

    const closeModal = () => setModalOpen(false);

    const renderCell = (key: keyof Product, item: Product) => {
        if (key === 'images') {
            return (
                <>
                    <button
                        onClick={() => setModalOpen(!isModalOpen)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                        View Images
                    </button>
                    <ClickOutside onClick={() => setModalOpen(false)}>
                        <Modal
                            isOpen={isModalOpen}
                            title="Product Images"
                            content={renderProductImages(item.images)}
                            onClose={closeModal}
                        />
                    </ClickOutside>
                </>
            );
        }

        // Handle other keys appropriately
        const value = item[key];

        if (value instanceof Date) {
            return value.toLocaleDateString(); // Example date formatting
        }

        return String(value);
    };

    return (
        <GenericTable data={products} renderCell={renderCell}/>
    );
};

export default ProductTable;