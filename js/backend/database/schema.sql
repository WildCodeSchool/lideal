CREATE DATABASE lideal_db;

-- Sélectionner la base de données
USE lideal_db;

DROP TABLE IF EXISTS customers;
-- Créer la table "customers"
CREATE TABLE
    customers (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        address VARCHAR(155) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        UNIQUE (email)
    );

-- Insérer des données dans la table
INSERT INTO customers (
    firstname,
    lastname,
    phone,
    address,
    email,
    password
)
VALUES (
    'Frédérique',
    'Druet',
    '0473728392',
    '46 boulevard Alfred Musset',
    'fredd@lideal.fr',
    '1234'
);