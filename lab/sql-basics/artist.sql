INSERT INTO artist (artist_id, name)
  VALUES (276, 'Something Cool'),
  (277, 'Something Else Cool'),
  (278, 'Something The Coolest');

SELECT *
FROM artist
ORDER BY name DESC LIMIT 10;

SELECT * 
FROM artist 
ORDER BY name ASC LIMIT 5;

SELECT * 
FROM artist 
WHERE name LIKE ('Black%');

SELECT * 
FROM artist 
WHERE name LIKE ('%Black%');