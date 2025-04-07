-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 07, 2025 at 03:26 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api-express`
--

-- --------------------------------------------------------

--
-- Table structure for table `mybooks`
--

CREATE TABLE `mybooks` (
  `id` int NOT NULL,
  `judul` varchar(100) NOT NULL,
  `pengarang` varchar(100) NOT NULL,
  `cover` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'cover.jpg',
  `kategori` enum('bahasa','teknologi','pengembangan','lainnya') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `mybooks`
--

INSERT INTO `mybooks` (`id`, `judul`, `pengarang`, `cover`, `kategori`) VALUES
(1, 'Buku Pertama', 'The First Author', 'cover.jpg', 'bahasa'),
(2, 'Second Book', 'Panyerat II', 'cover.jpg', 'bahasa'),
(3, 'Pilihan Ketiga', 'Riwan Januari', 'cover.jpg', 'lainnya'),
(4, 'Empat Satria dari Selatan', 'Rombo Kumbuy', 'cover.jpg', 'bahasa'),
(5, 'Lima Tempat yang Harus Kamu Kunjungi sebelum akhir Tahun 2025', 'Haris Kanyoto', 'cover.jpg', 'lainnya'),
(6, 'Enam Tahun Penantian', 'Pujangga Gemblung', 'cover.jpg', 'bahasa'),
(7, 'Ahli Laravel dalam 7 Jam', 'Hora Oemoem T. Nan', 'cover.jpg', 'teknologi'),
(8, 'Primbon Jawa Seri ke-Delapan', 'Sastro Amungrogo', 'cover.jpg', 'lainnya'),
(9, 'Saving Jagat Lintang Sanga', 'Marhaen Abdul Mukarim', 'cover.jpg', 'lainnya');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mybooks`
--
ALTER TABLE `mybooks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mybooks`
--
ALTER TABLE `mybooks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
