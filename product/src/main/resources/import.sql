-- Insert categories
INSERT INTO category (id, name)
VALUES (1, 'Electronics');
INSERT INTO category (id, name)
VALUES (2, 'Books');
INSERT INTO category (id, name, parent_id)
VALUES (3, 'Clothing', NULL);

-- Insert attributes
INSERT INTO attribute (id, type, value)
VALUES (1, 'Color', 'Red');
INSERT INTO attribute (id, type, value)
VALUES (2, 'Size', 'Medium');

-- Insert promotions
INSERT INTO promotion (id, name, discount_percentage, start_date, end_date)
VALUES (1, 'New Year Sale', 20, '2024-01-01', '2024-01-31');

INSERT INTO promotion (id, name, discount_percentage, start_date, end_date)
VALUES (2, 'Summer Discount', 15, '2024-06-01', '2024-06-30');

-- Insert products
INSERT INTO product (id, name, description, price, stock_level, availability, category_id)
VALUES (1, 'Smartphone', 'Latest model smartphone', 699.99, 50, TRUE, 1),
       (2, 'Laptop', 'High performance laptop', 999.99, 30, TRUE, 1),
       (3, 'Novel', 'Bestselling novel', 19.99, 100, TRUE, 2),
       (4, 'T-Shirt', 'Cotton t-shirt', 9.99, 200, TRUE, 3);

-- Link product attributes
INSERT INTO product_attributes (product_id, attribute_id)
VALUES (1, 1);
INSERT INTO product_attributes (product_id, attribute_id)
VALUES (4, 2);

-- Link product promotions
INSERT INTO product_promotions (product_id, promotion_id)
VALUES (1, 1);
INSERT INTO product_promotions (product_id, promotion_id)
VALUES (3, 2);