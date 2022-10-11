CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    height INTEGER NOT NULL,
    city VARCHAR(30) NOT NULL,
    favorite_color VARCHAR(20) NOT NULL
); 

INSERT INTO person(name, age, height, city, favorite_color)
VALUES ('Kellie', 36, 175, 'Saint George', 'green'),
('Garrett', 37, 177, 'San Jose', 'blue'),
('Alyssa', 9, 116, 'Boise', 'pink'),
('Emily', 7, 118, 'American Fork', 'purple'),
('Ian', 5, 97, 'American Fork', 'red');

SELECT name
from person
ORDER BY height DESC;

SELECT name
from person
ORDER BY height ASC;

SELECT name
from person
ORDER BY age DESC;

SELECT name
from person
WHERE age >20;

SELECT name
from person
WHERE age =18;

SELECT name
from person
WHERE age <20 OR age >30;

SELECT name
from person
WHERE age !=27;

SELECT name
from person
WHERE favorite_color !='red';

SELECT name
from person
WHERE favorite_color !='red' AND favorite_color != 'blue';

SELECT name
from person
WHERE favorite_color ='orange' OR favorite_color = 'green';

SELECT name
from person
WHERE favorite_color IN ('orange', 'green', 'blue');