-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : ven. 10 jan. 2025 à 12:32
-- Version du serveur : 8.0.40
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `at_account_type`
--

CREATE TABLE `at_account_type` (
  `at_account_type_id` int NOT NULL,
  `at_account_type_name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `a_accounts`
--

CREATE TABLE `a_accounts` (
  `a_accounts_id` int NOT NULL,
  `a_accounts_mail` varchar(80) NOT NULL,
  `a_accounts_pwd` varchar(255) NOT NULL,
  `a_accounts_name` varchar(15) NOT NULL,
  `a_accounts_firstname` varchar(50) DEFAULT NULL,
  `a_accounts_city` varchar(50) DEFAULT NULL,
  `a_accounts_zip` int DEFAULT NULL,
  `a_accounts_street` varchar(100) DEFAULT NULL,
  `a_accounts_number` int DEFAULT NULL,
  `a_accounts_type` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `a_articles`
--

CREATE TABLE `a_articles` (
  `a_articles_id` int NOT NULL,
  `a_articles_name` varchar(50) NOT NULL,
  `a_articles_price` decimal(5,2) NOT NULL,
  `a_articles_category` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `a_articles`
--

INSERT INTO `a_articles` (`a_articles_id`, `a_articles_name`, `a_articles_price`, `a_articles_category`) VALUES
(2, 'Veste de kung-fu', 22.90, 2);

-- --------------------------------------------------------

--
-- Structure de la table `a_order_items`
--

CREATE TABLE `a_order_items` (
  `a_order_items_id` int NOT NULL,
  `a_order_items_order` int NOT NULL,
  `a_order_items_variant` int NOT NULL,
  `a_order_items_amount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `a_variants`
--

CREATE TABLE `a_variants` (
  `a_variants_id` int NOT NULL,
  `a_variants_name` varchar(50) NOT NULL,
  `a_variants_price` decimal(5,2) NOT NULL,
  `a_variants_description` text NOT NULL,
  `a_variants_article` int NOT NULL,
  `a_variants_image` varchar(255) DEFAULT NULL,
  `a_variants_stock` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `a_variants`
--

INSERT INTO `a_variants` (`a_variants_id`, `a_variants_name`, `a_variants_price`, `a_variants_description`, `a_variants_article`, `a_variants_image`, `a_variants_stock`) VALUES
(3, 'Veste kung-fu', 8.90, 'testdec', 2, 'test2.jpg', 56);

-- --------------------------------------------------------

--
-- Structure de la table `cat_categories`
--

CREATE TABLE `cat_categories` (
  `cat_category_id` int NOT NULL,
  `cat_category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `cat_categories`
--

INSERT INTO `cat_categories` (`cat_category_id`, `cat_category_name`) VALUES
(1, 'Chaussures'),
(2, 'Veste');

-- --------------------------------------------------------

--
-- Structure de la table `c_orders`
--

CREATE TABLE `c_orders` (
  `c_orders_id` int NOT NULL,
  `c_orders_user` int NOT NULL,
  `c_orders_date` date NOT NULL,
  `c_orders_status` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `p_password`
--

CREATE TABLE `p_password` (
  `p_password_id` int NOT NULL,
  `p_password_user` int NOT NULL,
  `p_password_1` varchar(255) DEFAULT NULL,
  `p_password_2` varchar(255) DEFAULT NULL,
  `p_password_3` varchar(255) DEFAULT NULL,
  `p_password_4` varchar(255) DEFAULT NULL,
  `p_password_5` varchar(255) DEFAULT NULL,
  `p_password_6` varchar(255) DEFAULT NULL,
  `p_password_7` varchar(255) DEFAULT NULL,
  `p_password_8` varchar(255) DEFAULT NULL,
  `p_password_9` varchar(255) DEFAULT NULL,
  `p_password_10` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `at_account_type`
--
ALTER TABLE `at_account_type`
  ADD PRIMARY KEY (`at_account_type_id`),
  ADD UNIQUE KEY `account_type` (`at_account_type_id`);

--
-- Index pour la table `a_accounts`
--
ALTER TABLE `a_accounts`
  ADD PRIMARY KEY (`a_accounts_id`),
  ADD UNIQUE KEY `accounts` (`a_accounts_id`),
  ADD KEY `a_accounts_type` (`a_accounts_type`);

--
-- Index pour la table `a_articles`
--
ALTER TABLE `a_articles`
  ADD PRIMARY KEY (`a_articles_id`),
  ADD UNIQUE KEY `article` (`a_articles_id`),
  ADD KEY `a_articles_category` (`a_articles_category`);

--
-- Index pour la table `a_order_items`
--
ALTER TABLE `a_order_items`
  ADD PRIMARY KEY (`a_order_items_id`),
  ADD UNIQUE KEY `order_items` (`a_order_items_id`),
  ADD KEY `a_order_items_order` (`a_order_items_order`),
  ADD KEY `a_order_items_variant` (`a_order_items_variant`);

--
-- Index pour la table `a_variants`
--
ALTER TABLE `a_variants`
  ADD PRIMARY KEY (`a_variants_id`),
  ADD KEY `a_variants_article` (`a_variants_article`);

--
-- Index pour la table `cat_categories`
--
ALTER TABLE `cat_categories`
  ADD PRIMARY KEY (`cat_category_id`),
  ADD UNIQUE KEY `category` (`cat_category_id`);

--
-- Index pour la table `c_orders`
--
ALTER TABLE `c_orders`
  ADD PRIMARY KEY (`c_orders_id`),
  ADD UNIQUE KEY `orders` (`c_orders_id`),
  ADD KEY `c_orders_user` (`c_orders_user`);

--
-- Index pour la table `p_password`
--
ALTER TABLE `p_password`
  ADD PRIMARY KEY (`p_password_id`),
  ADD UNIQUE KEY `p_password` (`p_password_id`),
  ADD KEY `p_password_user` (`p_password_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `at_account_type`
--
ALTER TABLE `at_account_type`
  MODIFY `at_account_type_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `a_accounts`
--
ALTER TABLE `a_accounts`
  MODIFY `a_accounts_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `a_articles`
--
ALTER TABLE `a_articles`
  MODIFY `a_articles_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `a_order_items`
--
ALTER TABLE `a_order_items`
  MODIFY `a_order_items_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `a_variants`
--
ALTER TABLE `a_variants`
  MODIFY `a_variants_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `cat_categories`
--
ALTER TABLE `cat_categories`
  MODIFY `cat_category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `c_orders`
--
ALTER TABLE `c_orders`
  MODIFY `c_orders_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `p_password`
--
ALTER TABLE `p_password`
  MODIFY `p_password_id` int NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `a_accounts`
--
ALTER TABLE `a_accounts`
  ADD CONSTRAINT `a_accounts_ibfk_1` FOREIGN KEY (`a_accounts_type`) REFERENCES `at_account_type` (`at_account_type_id`);

--
-- Contraintes pour la table `a_articles`
--
ALTER TABLE `a_articles`
  ADD CONSTRAINT `a_articles_ibfk_1` FOREIGN KEY (`a_articles_category`) REFERENCES `cat_categories` (`cat_category_id`);

--
-- Contraintes pour la table `a_order_items`
--
ALTER TABLE `a_order_items`
  ADD CONSTRAINT `a_order_items_ibfk_1` FOREIGN KEY (`a_order_items_order`) REFERENCES `c_orders` (`c_orders_id`),
  ADD CONSTRAINT `a_order_items_ibfk_2` FOREIGN KEY (`a_order_items_variant`) REFERENCES `a_variants` (`a_variants_id`);

--
-- Contraintes pour la table `a_variants`
--
ALTER TABLE `a_variants`
  ADD CONSTRAINT `a_variants_ibfk_1` FOREIGN KEY (`a_variants_article`) REFERENCES `a_articles` (`a_articles_id`);

--
-- Contraintes pour la table `c_orders`
--
ALTER TABLE `c_orders`
  ADD CONSTRAINT `c_orders_ibfk_1` FOREIGN KEY (`c_orders_user`) REFERENCES `a_accounts` (`a_accounts_id`);

--
-- Contraintes pour la table `p_password`
--
ALTER TABLE `p_password`
  ADD CONSTRAINT `p_password_ibfk_1` FOREIGN KEY (`p_password_user`) REFERENCES `a_accounts` (`a_accounts_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
