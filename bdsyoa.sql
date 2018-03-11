-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2018-03-11 16:12:25
-- 服务器版本： 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdsyoa`
--

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_eat_everyday`
--

DROP TABLE IF EXISTS `bdsy_eat_everyday`;
CREATE TABLE IF NOT EXISTS `bdsy_eat_everyday` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(10) NOT NULL,
  `name` varchar(10) NOT NULL,
  `lunch` int(1) NOT NULL,
  `dinner` int(1) NOT NULL,
  `ordertime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `suggest` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bdsy_eat_everyday`
--

INSERT INTO `bdsy_eat_everyday` (`id`, `userid`, `name`, `lunch`, `dinner`, `ordertime`, `suggest`) VALUES
(1, 1, '潘卢子健', 1, 0, '2018-02-08 09:57:57', '123'),
(2, 1, '潘卢子健', 1, 0, '2018-02-09 04:44:24', '2222222222'),
(7, 2, '钟颖华', 0, 0, '2018-02-09 09:12:57', ''),
(8, 1, '潘卢子健', 1, 0, '2018-03-11 06:49:02', '');

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_personal_business`
--

DROP TABLE IF EXISTS `bdsy_personal_business`;
CREATE TABLE IF NOT EXISTS `bdsy_personal_business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(10) NOT NULL,
  `businessname` varchar(20) NOT NULL,
  `receiverid` int(10) NOT NULL,
  `posterid` varchar(10) NOT NULL,
  `content` text NOT NULL,
  `posttime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sumbittime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `step` int(2) NOT NULL,
  `submitinfo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bdsy_personal_business`
--

INSERT INTO `bdsy_personal_business` (`id`, `type`, `businessname`, `receiverid`, `posterid`, `content`, `posttime`, `sumbittime`, `step`, `submitinfo`) VALUES
(1, '人事管理', '加班申请单', 1, '1', '[\"潘卢子健\",\"综合部\",\"部门专员\",\"2018-03-07 13:00\",\"2018-03-20 17:00\",\"要加班\",\"调休\"]', '2018-03-11 11:48:15', '2018-03-11 11:48:15', 4, '');

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_personal_message`
--

DROP TABLE IF EXISTS `bdsy_personal_message`;
CREATE TABLE IF NOT EXISTS `bdsy_personal_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(10) NOT NULL,
  `content` text NOT NULL,
  `readtime` timestamp NOT NULL,
  `posttime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `poster` int(10) NOT NULL,
  `receiver` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_user_info`
--

DROP TABLE IF EXISTS `bdsy_user_info`;
CREATE TABLE IF NOT EXISTS `bdsy_user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `name` varchar(10) NOT NULL,
  `cellphone` varchar(12) NOT NULL,
  `department` varchar(10) NOT NULL,
  `position` varchar(10) NOT NULL,
  `birthday` date NOT NULL,
  `permission` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `bdsy_user_info`
--

INSERT INTO `bdsy_user_info` (`id`, `account`, `password`, `name`, `cellphone`, `department`, `position`, `birthday`, `permission`) VALUES
(1, 'plzj', '123', '潘卢子健', '13751332408', '综合部', '部门专员', '1993-09-09', NULL),
(2, 'zyh', '123', '钟颖华', '13751332408', '综合部', '部门主管', '1988-02-03', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
