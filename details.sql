-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: details
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `table_evaluation`
--

DROP TABLE IF EXISTS `table_evaluation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_evaluation` (
  `memberID` varchar(15) DEFAULT NULL,
  `marks` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_evaluation`
--

LOCK TABLES `table_evaluation` WRITE;
/*!40000 ALTER TABLE `table_evaluation` DISABLE KEYS */;
INSERT INTO `table_evaluation` VALUES ('2016a7ps000g',100);
INSERT INTO `table_evaluation` VALUES ('2016a7ps012g',100);
INSERT INTO `table_evaluation` VALUES ('2016a7ps013g',50);
INSERT INTO `table_evaluation` VALUES ('2016a7ps014g',50);
INSERT INTO `table_evaluation` VALUES ('2016a7ps015g',75);
INSERT INTO `table_evaluation` VALUES ('2016a7ps016g',0);
INSERT INTO `table_evaluation` VALUES ('2016a7ps018g',45);
INSERT INTO `table_evaluation` VALUES ('2016a7ps017g',45);
/*!40000 ALTER TABLE `table_evaluation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_team`
--

DROP TABLE IF EXISTS `table_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_team` (
  `memberID` varchar(15) NOT NULL,
  `teamId` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`memberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_team`
--

LOCK TABLES `table_team` WRITE;
/*!40000 ALTER TABLE `table_team` DISABLE KEYS */;
INSERT INTO `table_team` VALUES ('2016a7ps000g','1');
INSERT INTO `table_team` VALUES ('2016a7ps012g','1');
INSERT INTO `table_team` VALUES ('2016a7ps013g','2');
INSERT INTO `table_team` VALUES ('2016a7ps014g','2');
INSERT INTO `table_team` VALUES ('2016a7ps015g','3');
INSERT INTO `table_team` VALUES ('2016a7ps016g','3');
INSERT INTO `table_team` VALUES ('2016a7ps017g','4');
INSERT INTO `table_team` VALUES ('2016a7ps018g','4');
/*!40000 ALTER TABLE `table_team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-04 18:52:57
