-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-04 10:28:22
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
(9, 1, '潘卢子健', 1, 0, '2018-03-20 04:03:49', '我想吃早餐'),
(10, 1, '潘卢子健', 1, 0, '2018-05-02 06:25:55', '我不吃了'),
(11, 2, '钟颖华', 1, 0, '2018-05-03 11:10:32', '我不吃');

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
  `sumbittime` timestamp NULL DEFAULT NULL,
  `step` int(2) NOT NULL,
  `submitinfo` text NOT NULL,
  `state` varchar(10) NOT NULL,
  `haveread` text,
  `deleterecord` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bdsy_personal_business`
--

INSERT INTO `bdsy_personal_business` (`id`, `type`, `businessname`, `receiverid`, `posterid`, `content`, `posttime`, `sumbittime`, `step`, `submitinfo`, `state`, `haveread`, `deleterecord`) VALUES
(2, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-03-15 14:00","2018-03-28 09:00","我要加班吖","调休"]', '2018-03-20 06:20:53', '2018-05-04 06:02:56', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:20:53"},{"submiterid":"1","submit":"1","content":"同意吖","step":2,"time":"2018-03-20 14:21:05"},{"submiterid":"1","submit":"1","content":"当然同意","step":3,"time":"2018-03-20 14:24:18"},{"submiterid":"1","submit":"1","content":"我同意","step":4,"time":"2018-03-20 14:25:08"},{"submiterid":"1","submit":"2","content":"已经备案","step":5,"time":"2018-03-20 14:26:03"}]', 'success', '1,1,', '1,'),
(3, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-03-15 17:00","2018-03-29 12:00","我要加班","计加班费"]', '2018-03-20 06:35:28', '2018-05-04 06:02:58', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:35:28"},{"submiterid":"1","submit":"1","content":"很好吖，支持","step":2,"time":"2018-03-20 14:35:40"},{"submiterid":"1","submit":"1","content":"支持！","step":3,"time":"2018-03-20 14:35:49"},{"submiterid":"1","submit":"1","content":"不支持！","step":4,"time":"2018-03-20 14:35:59"},{"submiterid":"1","submit":"2","content":"收到！","step":5,"time":"2018-03-20 14:38:55"}]', 'success', '1,', '1,'),
(4, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-03-22 16:00","2018-03-29 16:00","我要加班","调休"]', '2018-03-20 06:46:00', '2018-05-04 06:03:00', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-03-20 14:46:00"},{"submiterid":"1","submit":"1","content":"同意申请！","step":2,"time":"2018-03-20 15:28:38"},{"submiterid":"1","submit":"1","content":"11111111111","step":3,"time":"2018-05-02 14:20:07"},{"submiterid":"1","submit":"1","content":"好，同意","step":4,"time":"2018-05-02 14:21:09"},{"submiterid":"1","submit":"2","content":"已经备案","step":5,"time":"2018-05-02 14:21:19"}]', 'success', '1,', '1,'),
(6, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-05-01 10:30","2018-05-15 08:30","我要加班","调休"]', '2018-05-02 06:40:47', '2018-05-04 06:03:02', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-02 14:40:47"},{"submiterid":"1","submit":"1","content":"我同意","step":2,"time":"2018-05-02 14:41:00"},{"submiterid":"1","submit":"1","content":"我不同意","step":3,"time":"2018-05-03 15:16:40"},{"submiterid":"1","submit":"1","content":"哦哦哦","step":4,"time":"2018-05-03 16:05:56"},{"submiterid":"1","submit":"2","content":"好","step":5,"time":"2018-05-03 16:29:27"}]', 'success', '1,', '1,'),
(7, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-05-15 15:00","2018-06-12 08:00","我要加班吖","计加班费"]', '2018-05-02 07:03:34', '2018-05-04 06:02:48', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-02 15:03:34"},{"submiterid":"3","submit":"1","content":"同意申请","step":2,"time":"2018-05-02 15:10:40"},{"submiterid":"2","submit":"1","content":"好的。","step":3,"time":"2018-05-02 15:25:26"},{"submiterid":"1","submit":"0","content":"","step":4,"time":"2018-05-02 15:30:00"}]', 'false', '1,2,2,', '2,1,'),
(8, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-05-01 14:30","2018-05-15 12:00","我要加班","调休"]', '2018-05-03 08:06:19', '2018-05-04 06:39:20', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-03 16:06:19"},{"submiterid":"1","submit":"1","content":"同意","step":2,"time":"2018-05-03 16:15:22"},{"submiterid":"2","submit":"1","content":"同意加班","step":3,"time":"2018-05-03 17:52:19"},{"submiterid":"1","submit":"1","content":"好的，非常同意","step":4,"time":"2018-05-03 17:53:58"},{"submiterid":"1","submit":"2","content":"好的","step":5,"time":"2018-05-04 14:39:20"}]', 'success', '1,1,1,1,1,1,1,1,1,1,1,', '1,'),
(9, '人事管理', '加班申请单', 0, '2', '["钟颖华","综合部","部门主管","2018-05-16 19:00","2018-05-24 17:00","我要加班","调休"]', '2018-05-03 11:09:21', '2018-05-04 06:13:15', 5, '[{"submiterid":"2","submit":1,"content":"提交申请","step":1,"time":"2018-05-03 19:09:21"},{"submiterid":"1","submit":"1","content":"很不同意。","step":2,"time":"2018-05-03 19:09:45"},{"submiterid":"1","submit":"1","content":"同意","step":3,"time":"2018-05-04 14:08:59"},{"submiterid":"1","submit":"1","content":"很好","step":4,"time":"2018-05-04 14:11:04"},{"submiterid":"1","submit":"2","content":"已经备案","step":5,"time":"2018-05-04 14:11:41"}]', 'success', '1,1,1,', '1,'),
(10, '人事管理', '加班申请单', 3, '1', '["潘卢子健","综合部","部门专员","2018-05-29 14:30","2018-05-22 16:00","我要加班吖","调休"]', '2018-05-04 06:32:21', '2018-05-04 06:38:35', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-04 14:32:21"},{"submiterid":"1","submit":"1","content":"我同意","step":2,"time":"2018-05-04 14:38:35"}]', 'submit', '1,1,1,1,', '1,'),
(11, '人事管理', '加班申请单', 3, '1', '["潘卢子健","综合部","部门专员","2018-05-28 16:00","2018-05-30 16:00","我要加班","调休"]', '2018-05-04 06:40:00', '2018-05-04 06:40:00', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-04 14:40:00"}]', 'submit', '1,1,', '1,'),
(12, '人事管理', '加班申请单', 0, '1', '["潘卢子健","综合部","部门专员","2018-05-08 13:00","2018-05-24 13:00","我要加班吖","调休"]', '2018-05-04 06:40:15', '2018-05-04 07:10:44', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-04 14:40:15"},{"submiterid":"1","submit":"0","content":"","step":2,"time":"2018-05-04 15:10:44"}]', 'false', '1,', '1,'),
(15, '人事管理', '加班申请单', 3, '1', '["潘卢子健","综合部","部门专员","2018-05-23 12:00","2018-05-31 16:00","我要加班","计加班费"]', '2018-05-04 10:00:43', '2018-05-04 10:01:18', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-04 18:00:43"},{"submiterid":"2","submit":"1","content":"同意","step":2,"time":"2018-05-04 18:01:18"}]', 'submit', '3,1,1,1,1,', NULL),
(16, '人事管理', '加班申请单', 1, '1', '["潘卢子健","综合部","部门专员","2018-05-08 13:00","2018-05-31 17:00","我要加班","调休"]', '2018-05-04 10:26:01', '2018-05-04 10:26:10', 5, '[{"submiterid":"1","submit":1,"content":"提交申请","step":1,"time":"2018-05-04 18:26:01"},{"submiterid":"1","submit":"1","content":"我同意","step":2,"time":"2018-05-04 18:26:10"}]', 'submit', '1,', NULL);

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
(2, 'zyh', '123', '钟颖华', '13751332408', '综合部', '部门主管', '1988-02-03', NULL),
(3, 'zbh', 'zbh', '张宝华', '13751332408', '总经办', '总经理', '1980-03-14', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `bdsy_personal_business`
--
ALTER TABLE `bdsy_personal_business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- 使用表AUTO_INCREMENT `bdsy_personal_message`
--
ALTER TABLE `bdsy_personal_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `bdsy_user_info`
--
ALTER TABLE `bdsy_user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
