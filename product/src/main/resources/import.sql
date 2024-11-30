INSERT INTO quarkus.public.products (id, price, created_at, updated_at, description, name)
VALUES (1, 19.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 'A durable and eco-friendly water bottle.',
        'Eco Water Bottle'),
       (2, 299.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00',
        'A state-of-the-art smartwatch with multiple features.', 'Smartwatch Pro'),
       (3, 49.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 'A pair of noise-canceling wireless earbuds.',
        'Noise-Canceling Earbuds'),
       (4, 999.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00',
        'A high-end gaming laptop for professionals and enthusiasts.', 'Gaming Laptop X1'),
       (5, 14.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 'A stylish ceramic mug perfect for coffee lovers.',
        'Ceramic Coffee Mug');

INSERT INTO quarkus.public.product_images (id, height, width, created_at, updated_at, product_id, size_in_bytes, alt_text, format,
                           title, type, url)
VALUES
    -- Images for Product 1: Eco Water Bottle
    (1, 200, 200, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 1, 20480, 'Thumbnail of Eco Water Bottle', 'JPEG',
     'Eco Water Bottle Thumbnail', 'THUMBNAIL', 'https://plus.unsplash.com/premium_photo-1664527307281-faf42c09ac8f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    (2, 900, 600, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 1, 512000, 'Main image of Eco Water Bottle', 'PNG',
     'Eco Water Bottle Main', 'MAIN', 'https://plus.unsplash.com/premium_photo-1664527305901-db3d4e724d15?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

    -- Images for Product 2: Smartwatch Pro
    (3, 200, 200, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 2, 20480, 'Thumbnail of Smartwatch Pro', 'WEBP',
     'Smartwatch Pro Thumbnail', 'THUMBNAIL', 'https://example.com/images/smartwatch-pro-thumbnail.webp'),
    (4, 800, 800, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 2, 512000, 'Main image of Smartwatch Pro', 'JPEG',
     'Smartwatch Pro Main', 'MAIN', 'https://example.com/images/smartwatch-pro-main.jpg'),

    -- Images for Product 3: Noise-Canceling Earbuds
    (5, 200, 200, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 3, 20480, 'Thumbnail of Noise-Canceling Earbuds', 'PNG',
     'Noise-Canceling Earbuds Thumbnail', 'THUMBNAIL',
     'https://example.com/images/noise-canceling-earbuds-thumbnail.png'),
    (6, 600, 600, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 3, 300000, 'Gallery image of Noise-Canceling Earbuds',
     'JPEG', 'Noise-Canceling Earbuds Gallery', 'GALLERY',
     'https://example.com/images/noise-canceling-earbuds-gallery.jpg'),

    -- Images for Product 4: Gaming Laptop X1
    (7, 200, 200, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 4, 20480, 'Thumbnail of Gaming Laptop X1', 'JPEG',
     'Gaming Laptop X1 Thumbnail', 'THUMBNAIL', 'https://example.com/images/gaming-laptop-x1-thumbnail.jpg'),
    (8, 1920, 1080, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 4, 2048000, 'Main image of Gaming Laptop X1', 'PNG',
     'Gaming Laptop X1 Main', 'MAIN', 'https://example.com/images/gaming-laptop-x1-main.png'),
    (9, 1200, 800, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 4, 1536000, 'Banner image of Gaming Laptop X1', 'JPEG',
     'Gaming Laptop X1 Banner', 'BANNER', 'https://example.com/images/gaming-laptop-x1-banner.jpg'),

    -- Images for Product 5: Ceramic Coffee Mug
    (10, 200, 200, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 5, 20480, 'Thumbnail of Ceramic Coffee Mug', 'GIF',
     'Ceramic Coffee Mug Thumbnail', 'THUMBNAIL', 'https://example.com/images/ceramic-coffee-mug-thumbnail.gif'),
    (11, 800, 800, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 5, 512000, 'Main image of Ceramic Coffee Mug', 'WEBP',
     'Ceramic Coffee Mug Main', 'MAIN', 'https://example.com/images/ceramic-coffee-mug-main.webp');
