-- Products Table with Apple Products
INSERT INTO quarkus.public.products (id, price, created_at, updated_at, description, name)
VALUES (1, 999.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00',
        'A powerful new smartphone with advanced camera features.', 'iPhone 14 Pro'),
       (2, 1199.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 'A sleek and powerful laptop with the new M1 chip.',
        'MacBook Pro 14-inch'),
       (3, 549.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00',
        'Next-generation over-ear headphones with spatial audio.', 'AirPods Max'),
       (4, 499.99, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 'A compact, stylish tablet with seamless interface.',
        'iPad Mini 6th Gen'),
       (5, 399.00, '2024-11-27 10:00:00', '2024-11-27 10:00:00',
        'Smart-watch engineered with precision for fitness tracking.', 'Apple Watch Series 8');

-- Product Images Table with placehold.co URLs
INSERT INTO quarkus.public.product_images (id, height, width, created_at, updated_at, product_id, size_in_bytes,
                                           alt_text, format, title, type, url)
VALUES
    -- Images for Product 1: iPhone 14 Pro
    (1, 225, 180, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 1, 20480, 'iPhone 14 Pro Thumbnail', 'JPEG',
     'iPhone 14 Pro Thumbnail', 'THUMBNAIL', 'https://placehold.co/225x180'),
    (2, 1000, 1000, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 1, 1048000, 'Main image of iPhone 14 Pro', 'JPEG',
     'iPhone 14 Pro Main', 'MAIN', 'https://placehold.co/1000x1000'),

    -- Images for Product 2: MacBook Pro 14-inch
    (3, 200, 250, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 2, 30720, 'Thumbnail of MacBook Pro 14-inch', 'JPEG',
     'MacBook Pro 14-inch Thumbnail', 'THUMBNAIL', 'https://placehold.co/200x250'),
    (4, 1200, 800, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 2, 2048000, 'Main image of MacBook Pro 14-inch', 'PNG',
     'MacBook Pro 14-inch Main', 'MAIN', 'https://placehold.co/1200x800'),

    -- Images for Product 3: AirPods Max
    (5, 250, 250, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 3, 51200, 'Thumbnail of AirPods Max', 'JPEG',
     'AirPods Max Thumbnail', 'THUMBNAIL', 'https://placehold.co/250x250'),
    (6, 800, 800, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 3, 1056000, 'Main image of AirPods Max', 'JPEG',
     'AirPods Max Main', 'MAIN', 'https://placehold.co/800x800'),

    -- Images for Product 4: iPad Mini 6th Gen
    (7, 180, 180, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 4, 20480, 'Thumbnail of iPad Mini 6th Gen', 'JPEG',
     'iPad Mini 6th Gen Thumbnail', 'THUMBNAIL', 'https://placehold.co/180x180'),
    (8, 1000, 1000, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 4, 506000, 'Main image of iPad Mini 6th Gen', 'JPEG',
     'iPad Mini 6th Gen Main', 'MAIN', 'https://placehold.co/1000x1000'),

    -- Images for Product 5: Apple Watch Series 8
    (9, 220, 220, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 5, 25600, 'Thumbnail of Apple Watch Series 8', 'PNG',
     'Apple Watch Series 8 Thumbnail', 'THUMBNAIL', 'https://placehold.co/220x220'),
    (10, 900, 900, '2024-11-27 10:00:00', '2024-11-27 10:00:00', 5, 1546000, 'Main image of Apple Watch Series 8',
     'JPEG', 'Apple Watch Series 8 Main', 'MAIN', 'https://placehold.co/900x900');