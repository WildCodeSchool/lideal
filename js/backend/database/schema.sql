DROP DATABASE IF EXISTS lideal;

CREATE DATABASE lideal;

-- Sélectionner la base de données
USE lideal;

DROP TABLE IF EXISTS customers;
-- Créer la table "customers"
CREATE TABLE
    customers (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        address VARCHAR(155) NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(155) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        UNIQUE (email)
    );

-- Insérer des données dans la table
INSERT INTO customers (
    firstname,
    lastname,
    address,
    city,
    country,
    phone,
    email,
    password
)
VALUES (
    'Frédérique',
    'Druet',
    '25 cours alsace Lorraine',
    'Bordeaux',
    'France',
    '05.56.47.65.25',
    'fredd@lideal.fr',
    '1234'
);
