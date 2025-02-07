CREATE DATABASE IF NOT EXISTS ecommerce_sport;
USE ecommerce_sport;

-- Table des utilisateurs
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('user', 'gestionnaire', 'admin') DEFAULT 'user' NOT NULL,
    address VARCHAR(255) NULL,
    phone_number VARCHAR(20) NULL,
    CONSTRAINT unique_user_id UNIQUE (id)
);

-- Table des derniers mots de passe des utilisateurs
CREATE TABLE user_password_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT unique_password_history_id UNIQUE (id)
);

-- Table des catégories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    CONSTRAINT unique_category_id UNIQUE (id)
);

-- Table des sports
CREATE TABLE sports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    CONSTRAINT unique_sport_id UNIQUE (id)
);

-- Table des articles
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    category_id INT,
    sport_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    FOREIGN KEY (sport_id) REFERENCES sports(id) ON DELETE SET NULL,
    CONSTRAINT unique_article_id UNIQUE (id)
);

-- Table des variantes d'articles
CREATE TABLE variants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    article_id INT NOT NULL,
    variant_name VARCHAR(100),
    image_url VARCHAR(255),
    FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
    CONSTRAINT unique_variant_id UNIQUE (id)
);

-- Table du panier
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    article_id INT NOT NULL,
    variant_id INT DEFAULT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
    FOREIGN KEY (variant_id) REFERENCES variants(id) ON DELETE SET NULL,
    CONSTRAINT unique_cart_id UNIQUE (id)
);

-- Trigger pour enregistrer les anciens mots de passe
DELIMITER $$
CREATE TRIGGER before_user_password_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.password_hash <> NEW.password_hash THEN
        INSERT INTO user_password_history (user_id, password_hash)
        VALUES (OLD.id, OLD.password_hash);
    END IF;
END $$
DELIMITER ;

-- Trigger pour vérifier l'unicité de l'email
DELIMITER $$
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    IF (SELECT COUNT(*) FROM users WHERE email = NEW.email) > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Erreur: Cet email est déjà utilisé';
    END IF;
END $$
DELIMITER ;

-- Insérer des utilisateurs
INSERT INTO users (first_name, last_name, email, password_hash, role, address, phone_number) VALUES
('Alice', 'Martin', 'alice@example.com', 'hashed_password1', 'user', '123 rue du Sport, Paris', '0612345678'),
('Bob', 'Dupont', 'bob@example.com', 'hashed_password2', 'gestionnaire', '456 avenue du Stade, Lyon', '0698765432'),
('Admin', 'Super', 'admin@example.com', 'hashed_admin_password', 'admin', NULL, NULL);

-- Insérer des catégories
INSERT INTO categories (name) VALUES ('Chaussures'), ('Vêtements'), ('Accessoires');

-- Insérer des sports
INSERT INTO sports (name) VALUES ('Football'), ('Basketball'), ('Running'), ('Tennis');

-- Insérer des articles
INSERT INTO articles (name, description, price, image_url, category_id, sport_id) VALUES
('Chaussures de foot Adidas', 'Chaussures performantes pour terrains synthétiques', 79.99, 'chaussure_foot.jpg', 1, 1),
('Maillot NBA Lakers', "Maillot officiel de l'équipe des Lakers", 59.99, 'maillot_lakers.jpg', 2, 2),
('Montre GPS Running', 'Montre connectée avec suivi de la performance', 129.99, 'montre_running.jpg', 3, 3);
('Maillot Running', 'Maillot de course pour homme', 59.99, 'maillot_course_homme.png', 2, 3),
('Pantalon Running', 'Pantalon de course pour homme', 69.99, 'pantalon_course.jpg', 2, 3),
('Sac Hydratation Running', "Sac d'hydtration avec flasque", 19.99, 'sac_hydratation.jpg', 3, 3),
('Chaussure Running', 'Chaussure de course à pied asics', 119.99, 'asics_chaussure.jpg', 1, 3),
('Ballon de foot', 'Ballon de football Adidas', 29.99, 'ballon_foot.jpg', 3, 1),
('Short de foot', 'Short de football Nike', 49.99, 'short_foot_homme.jpeg', 2, 1),
('Maillot de foot', 'Maillot de football blanc', 69.99, 'Maillot_foot_homme.png', 2, 1),
('Chaussure de Basketball', 'Chaussure de basketball Air Jordan', 139.99, 'chaussure_basket.png', 1, 2),
('Ballon de Basketball', 'Ballon de Basketball', 39.99, 'ballon_basket.jpg', 3, 2),
('Short de NBA Lakers', 'Short de NBA Lakers', 79.99, 'short_nba.jpeg', 2, 2);

-- Insérer des variantes d\'articles
INSERT INTO variants (article_id, variant_name, image_url) VALUES
(1, 'Taille 42', 'chaussure_foot_42.jpg'),
(1, 'Taille 44', 'chaussure_foot_44.jpg'),
(2, 'Taille M', 'maillot_lakers_m.jpg'),
(2, 'Taille L', 'maillot_lakers_l.jpg');
