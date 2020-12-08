-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 08, 2020 at 09:39 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newsoft`
--
CREATE DATABASE IF NOT EXISTS `newsoft` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `newsoft`;

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

DROP TABLE IF EXISTS `information`;
CREATE TABLE IF NOT EXISTS `information` (
  `id` int(11) NOT NULL,
  `code` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `hp` varchar(20) NOT NULL,
  `name` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customerId` (`code`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `hp` (`hp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id`, `code`, `email`, `hp`, `name`, `password`, `gender`) VALUES
(1, 'CT00001', 'user@test.com', '0124567833', 'Christine Liow', '$2b$05$WdjA47Gb0mwdhpkq5lZMX.vl2Ze/m0WboOvA9h/YNSghVxWr8Utx.', 'Female'),
(2, 'CT00002', 'user2@test.com', '0124567832', 'Steven Lee', '$2b$05$iCR6dXx/IJnquV8rtRgGS.PsV.xPLTvz3BJJTMzONKpLOt2eMFuVe', 'Male'),
(3, 'CT00003', 'user3@test.com', '0124567836', 'Steven Yee', '$2b$05$PWWxbECQo2Q.5dpseD4aUOXVWbdSg39RSU2PJqFz48MibUJMTp43S', 'Male'),
(4, 'CT00004', 'user4@test.com', '0124563883', 'Steven Lash', '$2b$05$WzdkkQBHRjOSvV7ZuWyw2.9ylCNBG9gaOvNzbuJKTD78eBx.Urvdq', 'Male');

--
-- Triggers `information`
--
DROP TRIGGER IF EXISTS `infor_insert`;
DELIMITER $$
CREATE TRIGGER `infor_insert` BEFORE INSERT ON `information` FOR EACH ROW BEGIN
  INSERT INTO information_seq VALUES (NULL);
  SET NEW.code = CONCAT('CT', LPAD(LAST_INSERT_ID(), 5, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `information_seq`
--

DROP TABLE IF EXISTS `information_seq`;
CREATE TABLE IF NOT EXISTS `information_seq` (
  `code` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `information_seq`
--

INSERT INTO `information_seq` (`code`) VALUES
(1),
(2),
(3),
(4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
