-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-03-20 10:29:59
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `bdsy_eat_everyday` (
  `id` int(11) NOT NULL,
  `userid` int(10) NOT NULL,
  `name` varchar(10) NOT NULL,
  `lunch` int(1) NOT NULL,
  `dinner` int(1) NOT NULL,
  `ordertime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `suggest` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bdsy_eat_everyday`
--

INSERT INTO `bdsy_eat_everyday` (`id`, `userid`, `name`, `lunch`, `dinner`, `ordertime`, `suggest`) VALUES
(1, 1, '潘卢子健', 1, 0, '2018-02-08 09:57:57', '123'),
(2, 1, '潘卢子健', 1, 0, '2018-02-09 04:44:24', '2222222222'),
(7, 2, '钟颖华', 0, 0, '2018-02-09 09:12:57', ''),
(8, 1, '潘卢子健', 1, 0, '2018-03-11 06:49:02', ''),
(9, 1, '潘卢子健', 1, 0, '2018-03-20 04:03:49', '我想吃早餐');

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_personal_business`
--

CREATE TABLE `bdsy_personal_business` (
  `id` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `businessname` varchar(20) NOT NULL,
  `receiverid` int(10) NOT NULL,
  `posterid` varchar(10) NOT NULL,
  `content` text NOT NULL,
  `posttime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sumbittime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `step` int(2) NOT NULL,
  `submitinfo` text NOT NULL,
  `state` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bdsy_personal_business`
--

INSERT INTO `bdsy_personal_business` (`id`, `type`, `businessname`, `receiverid`, `posterid`, `content`, `posttime`, `sumbittime`, `step`, `submitinfo`, `state`) VALUES
(1, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-03-18 12:00","2018-03-30 14:00","我要加班吖","调休"]', '2018-03-20 06:16:52', '2018-03-20 06:17:31', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:16:52"},{"submiterid":"1","submit":"1","content":"我同意","step":2,"time":"2018-03-20 14:17:24"},{"submiterid":"1","submit":"0","content":"我不同意","step":3,"time":"2018-03-20 14:17:31"}]', 'false'),
(2, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-03-15 14:00","2018-03-28 09:00","我要加班吖","调休"]', '2018-03-20 06:20:53', '2018-03-20 06:26:03', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:20:53"},{"submiterid":"1","submit":"1","content":"同意吖","step":2,"time":"2018-03-20 14:21:05"},{"submiterid":"1","submit":"1","content":"当然同意","step":3,"time":"2018-03-20 14:24:18"},{"submiterid":"1","submit":"1","content":"我同意","step":4,"time":"2018-03-20 14:25:08"},{"submiterid":"1","submit":"2","content":"已经备案","step":5,"time":"2018-03-20 14:26:03"}]', 'success'),
(3, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-03-15 17:00","2018-03-29 12:00","我要加班","计加班费"]', '2018-03-20 06:35:28', '2018-03-20 06:38:55', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:35:28"},{"submiterid":"1","submit":"1","content":"很好吖，支持","step":2,"time":"2018-03-20 14:35:40"},{"submiterid":"1","submit":"1","content":"支持！","step":3,"time":"2018-03-20 14:35:49"},{"submiterid":"1","submit":"1","content":"不支持！","step":4,"time":"2018-03-20 14:35:59"},{"submiterid":"1","submit":"2","content":"收到！","step":5,"time":"2018-03-20 14:38:55"}]', 'success'),
(4, '人事管理', '加班申请单', 1, '1', '["潘卢子健","综合部","部门专员","2018-03-22 16:00","2018-03-29 16:00","我要加班","调休"]', '2018-03-20 06:46:00', '2018-03-20 07:28:38', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:46:00"},{"submiterid":"1","submit":"1","content":"同意申请！","step":2,"time":"2018-03-20 15:28:38"}]', 'submit');

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_personal_message`
--

CREATE TABLE `bdsy_personal_message` (
  `id` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `content` text NOT NULL,
  `readtime` timestamp NOT NULL,
  `posttime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `poster` int(10) NOT NULL,
  `receiver` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `bdsy_user_info`
--

CREATE TABLE `bdsy_user_info` (
  `id` int(11) NOT NULL,
  `account` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `name` varchar(10) NOT NULL,
  `cellphone` varchar(12) NOT NULL,
  `department` varchar(10) NOT NULL,
  `position` varchar(10) NOT NULL,
  `birthday` date NOT NULL,
  `permission` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `bdsy_user_info`
--

INSERT INTO `bdsy_user_info` (`id`, `account`, `password`, `name`, `cellphone`, `department`, `position`, `birthday`, `permission`) VALUES
(1, 'plzj', '123', '潘卢子健', '13751332408', '综合部', '部门专员', '1993-09-09', NULL),
(2, 'zyh', '123', '钟颖华', '13751332408', '综合部', '部门主管', '1988-02-03', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bdsy_eat_everyday`
--
ALTER TABLE `bdsy_eat_everyday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bdsy_personal_business`
--
ALTER TABLE `bdsy_personal_business`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bdsy_personal_message`
--
ALTER TABLE `bdsy_personal_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bdsy_user_info`
--
ALTER TABLE `bdsy_user_info`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `bdsy_eat_everyday`
--
ALTER TABLE `bdsy_eat_everyday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `bdsy_personal_business`
--
ALTER TABLE `bdsy_personal_business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `bdsy_personal_message`
--
ALTER TABLE `bdsy_personal_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `bdsy_user_info`
--
ALTER TABLE `bdsy_user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
