-- Database: Inventory

-- DROP DATABASE "Inventory";

CREATE DATABASE "Inventory"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default

--creating staff

CREATE TABLE staff(
staff_id SERIAL PRIMARY KEY,
staff_name VARCHAR(30),
staff_gender CHAR(1),
staff_phoneno INT,
staff_age INT,
staff_dept VARCHAR(30)
-- dept_id INT REFERENCES department (dept_id)
);
 
CREATE TABLE department(
dept_id INT PRIMARY KEY,
dept_name VARCHAR(30)
);  

CREATE TABLE product(
product_id INT PRIMARY KEY,
product_name VARCHAR(30),
manufacturer_name VARCHAR(30) NOT NULL,
shortcode CHAR(3) NOT NULL,
s_price INT,
c_price INT
);

ALTER TABLE product
ADD  product_name VARCHAR(30);

select * from product;

CREATE TABLE category(
category_id INT,
category_name VARCHAR(30) NOT NULL,
product_id INT REFERENCES product(product_id) NOT NULL
);

CREATE TABLE inventory(
inventory_id INT PRIMARY KEY,
product_id INT REFERENCES product(product_id) NOT NULL,
is_stock BOOLEAN NOT NULL,
p_quantity INT
);

CREATE TABLE purchaseorder(
order_id INT PRIMARY KEY,
product_id INT REFERENCES product(product_id)  NOT NULL,
qty_needed INT
);

CREATE TABLE supplier(
product_id INT REFERENCES product(product_id),
supplier_id INT PRIMARY KEY,
supplier_name VARCHAR(128),
order_date DATE,
s_phoneno INT,
s_email VARCHAR(128),
s_city VARCHAR(30),
s_state VARCHAR(30),
order_id INT REFERENCES purchaseorder(order_id)
	
);

CREATE TABLE supplierproduct(
product_id INT REFERENCES product(product_id) NOT NULL,
supplier_id INT REFERENCES supplier(supplier_id) NOT NULL
);

select * from supplier;

select * from product;


--data insertion into staff
INSERT INTO staff (staff_name, staff_gender,staff_phoneno, staff_age, staff_dept) VALUES ('Tomas','M','97285762',12 , 'collector'),
('Rohit','M','927826',22,'searcher'),('priyanka','F','75365287',12,'stocker'),('gaurav','M','6286288',23,'stocker');

select * from staff;

--1. Query staff using name
    SELECT * FROM staff WHERE staff_name = 'priyanka';
   
    --1.Query staff using phone no   
    SELECT * FROM staff WHERE staff_phoneno = '75365287';
   
    -- 2. Query Staff using their role
    SELECT staff_name from staff WHERE staff_dept = 'stocker';

select * from category;


--data insertion into product
INSERT INTO product(product_id,manufacturer_name,shortcode,s_price,c_price,product_name) VALUES (12,'Onida','ONO',2500,4000,'TV'),
    (13, 'Wirlpool','fz',15000,18000,'TV'),
    (14,'Samsung','ac',300000,40000,'Chair'),
    (15,'Vivo','mob',16999,19999,'Mobile'),
    (16,'Lenovo','lap',45000,55000,'Laptop');
   
   
    INSERT INTO product(product_id,manufacturer_name,shortcode,s_price,c_price,product_name)
    VALUES(11, 'sunfeest', 'mg',50,60,'Maggie'),
    (91,'cadbaury', 'dm',100,120,'Dairy Milk'),
    (19, 'ParleG','coo',200,300,'Cookies'),
    (20,'Amul','mlk',50,80,'Milk'),
    (21,'Amul','crm',500,700,'Cream');
	
	
	--data insertion into inventory
    INSERT INTO inventory(inventory_id,product_id,is_stock,p_quantity)
    VALUES(1,11,true,10),
    (2,19,false,0),
    (3,20,true,5),
    (4,21,true,6),
    (5,16,false,0);
	
	
	-- insertion into category
    INSERT INTO category(category_id,category_name,product_id)
    VALUES(1,'Electronics',13),
    (2,'Electronics',14),
    (3,'Electronics',15),
    (4,'Electronics',16),
    (5,'Electronics',12),
    (6,'Food',11),
    (7,'Chocolates',91),
    (8,'Food',19),
    (9,'Dairy',20),
    (10,'Dairy',21)
    
    
    SELECT * from inventory;
    -- Query product  based on Name 
    SELECT *
    FROM product
    WHERE product_name='TV';
   
   --based on category
    SELECT *
    FROM product INNER JOIN  category
    ON product.product_id=category.product_id 
    where category.category_name='Electronics';
    
   --based on instock,outstock
   SELECT *
   from product INNER JOIN inventory
   on product.product_id = inventory.product_id
   where is_stock = true;
   
   
  --SP less than
  SELECT product_name, s_price FROM product WHERE s_price < 1000;
   
   --SP greater than 
   SELECT product_name, s_price FROM product WHERE s_price > 1800;
    --SP between
     SELECT product_name, s_price FROM product WHERE s_price BETWEEN 9000 AND 12000;

 

--4-Numbers of products out of stock
SELECT COUNT(inventory.product_id)
   from products INNER JOIN inventory
   on products.product_id = inventory.product_id
   where isin_stock = false;
   
   --5- Number of product within a categpory
   SELECT COUNT(products.product_id)
    FROM products INNER JOIN  category
    ON products.product_id=category.category_id 
    where category_name='Dairy';
    
    
    --6- highest to lowest
    SELECT category.category_name,COUNT(DISTINCT(products.product_name))
    FROM products INNER JOIN  category
    ON products.product_id=category.category_id 
     GROUP BY category.category_name
     ORDER BY COUNT(DISTINCT(products.product_name)) DESC;
    
    )
    VALUES(1,1,true,10),
    (2,2,false,0),
    (3,3,true,5),
    (4,4,true,6),
    (5,5,false,0);
    
    
    
    SELECT * from inventory;
    -- Query product  based on Name 
    SELECT *
    FROM products
    WHERE product_name='TV';
   
   --based on category
    SELECT *
    FROM products INNER JOIN  category
    ON products.product_id=category.category_id 
    where category_name='Electronics';
    
   --based on instock,outstock
   SELECT *
   from products INNER JOIN inventory
   on products.product_id = inventory.product_id
   where isin_stock = true;
   
   
  --SP less than
  SELECT product_name, s_price FROM products WHERE s_price < 1000;
   
   --SP greater than 
   SELECT product_name, s_price FROM products WHERE s_price > 1000;
    --SP between
     SELECT product_name, s_price FROM products WHERE s_price BETWEEN 12000 AND 20000;

 

--4-Numbers of products out of stock
SELECT COUNT(inventory.product_id)
   from product INNER JOIN inventory
   on product.product_id = inventory.product_id
   where is_stock = false;
   
   --5- Number of product within a categpory
   SELECT COUNT(product.product_id)
    FROM product INNER JOIN  category
    ON product.product_id=category.product_id 
    where category_name='Dairy';
    
    
    --6- highest to lowest
    SELECT category.category_name,COUNT(DISTINCT(product.product_name))
    FROM product INNER JOIN  category
    ON product.product_id=category.product_id 
     GROUP BY category.category_name
     ORDER BY COUNT(DISTINCT(product.product_name)) DESC;
    
	

    INSERT INTO supplier(product_id,supplier_id,supplier_name,order_date,s_phoneno,s_email,s_city,s_state,order_id)
    VALUES(11,1,'Sandeep','2000-12-30','1111232333','sandeep@gmail.com','Ghaziabad','UP',1),
    (12,2,'Sunil','1888-12-30','22222232','sunil@gmail.com','Patna','Bihar',2),
    (13,3,'Sachin','1999-10-21','98923823','sachin@gmail.com','fzd','UP',3),
    (14,4,'Abhishek','2000-1-13','22222432','abhishek@gmail.com','Agra','UP',4),
    (15,5,'Yanshik','1666-12-20','98232323','yanshik@gmail.com','Bijnor','UP',5);

    


INSERT INTO purchaseorder(order_id,product_id,qty_needed)
     VALUES(1,11,5),
     (2,12,10),
     (3,13,10),
     (4,14,20),
     (5,15,2);
	 
select * from purchaseorder;



    --7a. List of supplier NAme;
    SELECT supplier_name FROM supplier;
    SELECT * FROM supplier WHERE supplier_name ='Sachin';
	
	
    --7b. List of supplier Phone;
    SELECT s_phoneno FROM supplier;
   
    --7c. List of supplier Email;
    SELECT s_email FROM supplier;
   
    --7d. List of supplier City;
    SELECT s_city FROM supplier;
	
	
    SELECT s_state FROM supplier;
	
	INSERT INTO supplierproduct(product_id,supplier_id)
    VALUES(11,1),
    (12,1),
    (13,2),
    (14,3),
    (14,4),
    (19,1);
   
    --8
    SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id;
   
   
   select * from supplierproduct;
    --8a Product name
   
    SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE product.product_name = 'TV';

   --8b Supplier Name
   
     SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE supplier.supplier_name ='Sachin';
   
    --8c Product Code
    SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE product.shortcode = 'fz';
   
    --8d Supplied After a particular date
   
    SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE supplier.order_date > '1990-12-25';
   
    --8e Supplied Before a particular date
   
   SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE supplier.order_date < '1990-12-25';
    
    --less than
   
    SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE purchaseorder.qty_needed < 6;

   
    --More than
   
   
    SELECT product.product_name,supplier.supplier_name,supplier.order_date,purchaseorder.qty_needed FROM product
    INNER JOIN supplier
    ON product.product_id= supplier.product_id INNER JOIN supplierproduct
    ON product.product_id = supplierproduct.product_id INNER JOIN purchaseorder ON product.product_id = purchaseorder.product_id
    WHERE purchaseorder.qty_needed > 6;


