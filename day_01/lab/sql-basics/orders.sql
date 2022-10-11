CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id SERIAL,
    product_name VARCHAR(30) NOT NULL,
    product_price DECIMAL NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO orders(product_name, product_price, quantity)
VALUES ('Cheesebuger', 10, 3),
('Option 2 Large', 15, 2);

SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(product_price * quantity) FROM orders;

SELECT SUM(product_price * quantity)
FROM orders
GROUP BY person_id;