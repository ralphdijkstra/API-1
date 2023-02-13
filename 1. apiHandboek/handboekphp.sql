/*
MySQL Data Transfer
Source Host: localhost
Source Database: handboekphp
Target Host: localhost
Target Database: handboekphp
Date: 29-9-2021 09:46:22
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for hoofdstukken
-- ----------------------------
CREATE TABLE `hoofdstukken` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `naam` varchar(35) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=innoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for scripts
-- ----------------------------
CREATE TABLE `scripts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `hoofdstuk_id` bigint(20) NOT NULL DEFAULT 0,
  `volgorde` int(11) NOT NULL DEFAULT 1,
  `naam` varchar(50) NOT NULL DEFAULT '',
  `file` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`hoofdstuk_id`) REFERENCES hoofdstukken(`id`)
) ENGINE=innoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `hoofdstukken` VALUES ('1', 'Introductie programmeren');
INSERT INTO `hoofdstukken` VALUES ('2', 'Webformulieren');
INSERT INTO `hoofdstukken` VALUES ('3', 'Bestanden en mappen');
INSERT INTO `hoofdstukken` VALUES ('4', 'Databases');
INSERT INTO `hoofdstukken` VALUES ('5', 'Fouten identificeren');
INSERT INTO `hoofdstukken` VALUES ('6', 'Webshop');
INSERT INTO `hoofdstukken` VALUES ('7', 'Mailen');
INSERT INTO `hoofdstukken` VALUES ('8', 'HTML Editor');
INSERT INTO `hoofdstukken` VALUES ('9', 'PDF Bestanden maken');
INSERT INTO `hoofdstukken` VALUES ('10', 'Geavanceerd MySQL');
INSERT INTO `hoofdstukken` VALUES ('11', 'HTML Sjablonen met Smarty');
INSERT INTO `scripts` VALUES ('1', '1', '1', 'Hello World 1', '/start/helloworld1.php');
INSERT INTO `scripts` VALUES ('2', '1', '2', 'Hello World 2', '/start/helloworld2.php');
INSERT INTO `scripts` VALUES ('3', '1', '3', 'Hello World 3', '/start/helloworld3.php');
INSERT INTO `scripts` VALUES ('4', '1', '4', 'Condities 1', '/start/conditie1.php');
INSERT INTO `scripts` VALUES ('5', '1', '5', 'Condities 2', '/start/conditie2.php');
INSERT INTO `scripts` VALUES ('6', '1', '6', 'Vermenigvuldigen in PHP 1', '/start/reken1.php');
INSERT INTO `scripts` VALUES ('7', '1', '7', 'Vermenigvuldigen in PHP 2', '/start/reken2.php');
INSERT INTO `scripts` VALUES ('8', '1', '8', 'Welk getal is het grootste?', '/start/reken3.php');
INSERT INTO `scripts` VALUES ('9', '1', '9', 'Willekeurig getal', '/start/random1.php');
INSERT INTO `scripts` VALUES ('10', '1', '10', 'Stringvoorbeeld', '/start/string1.php');
INSERT INTO `scripts` VALUES ('11', '1', '10', 'PHP Info', '/start/phpinfo.php');
INSERT INTO `scripts` VALUES ('12', '1', '11', 'Array voorbeeld 1', '/start/array1.php');
INSERT INTO `scripts` VALUES ('13', '1', '12', 'Array voorbeeld 2', '/start/array2.php');
INSERT INTO `scripts` VALUES ('14', '1', '13', 'Array voorbeeld 3', '/start/array3.php');
INSERT INTO `scripts` VALUES ('15', '2', '1', 'Mail formulier 1', '/formulieren/mailform.htm');
INSERT INTO `scripts` VALUES ('16', '2', '2', 'Mail formulier 2', '/formulieren/mailform2.php');
INSERT INTO `scripts` VALUES ('17', '2', '3', 'Mail formulier 3', '/formulieren/mailform3.php');
INSERT INTO `scripts` VALUES ('18', '2', '4', 'Mail formulier 4', '/formulieren/mailform4.php');
INSERT INTO `scripts` VALUES ('19', '2', '5', 'Reguliere expressies 1', '/formulieren/regexp1.php');
INSERT INTO `scripts` VALUES ('20', '2', '6', 'Reguliere expressies 2', '/formulieren/regexp2.php');
INSERT INTO `scripts` VALUES ('21', '2', '7', 'Bestelformulier', '/formulieren/bestel.php');
INSERT INTO `scripts` VALUES ('22', '2', '8', 'Sessies 1', '/formulieren/sessie1.php');
INSERT INTO `scripts` VALUES ('23', '2', '9', 'Sessies 2', '/formulieren/sessie2.php');
INSERT INTO `scripts` VALUES ('24', '2', '10', 'Sessies 3', '/formulieren/sessie3.php');
INSERT INTO `scripts` VALUES ('25', '2', '11', 'Cookie', '/formulieren/cookie1.php');
INSERT INTO `scripts` VALUES ('26', '2', '12', 'Authenticatie 1', '/formulieren/authenticatie.php');
INSERT INTO `scripts` VALUES ('27', '2', '13', 'Authenticatie 2', '/formulieren/authenticatie2.php');
INSERT INTO `scripts` VALUES ('28', '2', '14', 'Authenticatie 3', '/formulieren/authenticatie3.php');
INSERT INTO `scripts` VALUES ('29', '2', '15', 'Aanmeldformulier', '/formulieren/aanmeldformulier.php');
INSERT INTO `scripts` VALUES ('30', '2', '16', 'Winkelwagen 1', '/formulieren/winkelwagen1.php');
INSERT INTO `scripts` VALUES ('31', '2', '17', 'Winkelwagen 2', '/formulieren/winkelwagen2.php');
INSERT INTO `scripts` VALUES ('32', '3', '1', 'Mailing 1', '/bestanden/mailing1.php');
INSERT INTO `scripts` VALUES ('33', '3', '2', 'Mailing 2', '/bestanden/mailing2.php');
INSERT INTO `scripts` VALUES ('34', '3', '3', 'Mailing 3', '/bestanden/mailing3.php');
INSERT INTO `scripts` VALUES ('35', '3', '4', 'Mailing 4', '/bestanden/mailing4.php');
INSERT INTO `scripts` VALUES ('36', '3', '5', 'Nieuws 1', '/bestanden/nieuws1.php');
INSERT INTO `scripts` VALUES ('37', '3', '6', 'Nieuws 2', '/bestanden/nieuws2.php');
INSERT INTO `scripts` VALUES ('38', '3', '7', 'Bestand 1', '/bestanden/bestand1.php');
INSERT INTO `scripts` VALUES ('39', '4', '1', 'Databases 0', '/database/db0.php');
INSERT INTO `scripts` VALUES ('40', '4', '2', 'Databases 1', '/database/db1.php');
INSERT INTO `scripts` VALUES ('41', '4', '3', 'Databases 2', '/database/db2.php');
INSERT INTO `scripts` VALUES ('42', '4', '4', 'Databases 3', '/database/db3.php');
INSERT INTO `scripts` VALUES ('43', '4', '5', 'Databases 4', '/database/db4.php');
INSERT INTO `scripts` VALUES ('44', '4', '6', 'Databases 5', '/database/db5.php');
INSERT INTO `scripts` VALUES ('45', '4', '7', 'Databases 6', '/database/db6.php');
INSERT INTO `scripts` VALUES ('46', '4', '8', 'Databases 7', '/database/db7.php');
INSERT INTO `scripts` VALUES ('47', '4', '10', 'Databases 9', '/database/db9.php');
INSERT INTO `scripts` VALUES ('48', '5', '1', 'Fouten identificeren 1', '/fouten/fout1.php');
INSERT INTO `scripts` VALUES ('49', '6', '1', 'Start de shop', '/mywebshop/index.php');
INSERT INTO `scripts` VALUES ('50', '6', '2', 'Zoekfunctie', '/mywebshop/zoek.php');
INSERT INTO `scripts` VALUES ('51', '6', '3', 'Artikelenoverzicht', '/mywebshop/show.php');
INSERT INTO `scripts` VALUES ('52', '6', '4', 'Aanmeldformulier', '/mywebshop/aanmeldformulier.php');
INSERT INTO `scripts` VALUES ('53', '6', '5', 'Winkelwagen', '/mywebshop/winkelwagen.php');
INSERT INTO `scripts` VALUES ('54', '6', '6', 'Artikeloverzicht', '/mywebshop/artikeloverzicht.php');
INSERT INTO `scripts` VALUES ('55', '6', '7', 'Artikel toevoegen', '/mywebshop/artikel_toevoegen.php');
INSERT INTO `scripts` VALUES ('56', '6', '8', 'Artikel wissen', '/mywebshop/artikel_wissen.php');
INSERT INTO `scripts` VALUES ('57', '6', '9', 'Categorie toevoegen', '/mywebshop/cat_toevoegen.php');
INSERT INTO `scripts` VALUES ('58', '6', '10', 'Categorie wijzigen', '/mywebshop/cat_wijzigen.php');
INSERT INTO `scripts` VALUES ('59', '6', '11', 'Bestelling uitvoeren', '/mywebshop/bestelling_uitvoeren.php');
INSERT INTO `scripts` VALUES ('60', '6', '12', 'Bestelling uitvoeren 2', '/mywebshop/bestelling_uitvoeren2.php');
INSERT INTO `scripts` VALUES ('61', '7', '1', 'Mail 1', '/phpmailer/mail1.php');
INSERT INTO `scripts` VALUES ('62', '7', '2', 'Mail 2', '/phpmailer/mail2.php');
INSERT INTO `scripts` VALUES ('63', '7', '3', 'Mail 3', '/phpmailer/mail3.php');
INSERT INTO `scripts` VALUES ('64', '8', '1', 'Editor 1', '/editor/editor1.php');
INSERT INTO `scripts` VALUES ('65', '8', '2', 'Editor 2', '/editor/editor2.php');
INSERT INTO `scripts` VALUES ('66', '8', '3', 'Editor 3', '/editor/editor3.php');
INSERT INTO `scripts` VALUES ('67', '8', '4', 'Editor 4', '/editor/editor4.php');
INSERT INTO `scripts` VALUES ('68', '8', '5', 'Editor 5', '/editor/editor5.php');
INSERT INTO `scripts` VALUES ('69', '9', '1', 'PDF Voorbeeld 1', '/pdf/pdf1.php');
INSERT INTO `scripts` VALUES ('70', '9', '2', 'PDF Voorbeeld 2', '/pdf/pdf2.php');
INSERT INTO `scripts` VALUES ('71', '9', '3', 'PDF Voorbeeld 2', '/pdf/pdf3.php');
INSERT INTO `scripts` VALUES ('72', '9', '4', 'PDF Voorbeeld 4', '/pdf/pdf4.php');
INSERT INTO `scripts` VALUES ('73', '10', '1', 'Database voorbeeld 1', '/database-adv/data1.php');
INSERT INTO `scripts` VALUES ('74', '10', '2', 'Database voorbeeld 2', '/database-adv/data2.php');
INSERT INTO `scripts` VALUES ('75', '10', '3', 'Database voorbeeld 3', '/database-adv/data3.php');
INSERT INTO `scripts` VALUES ('76', '10', '4', 'Transactions', '/database-adv/transactions.php');
INSERT INTO `scripts` VALUES ('77', '11', '1', 'Template voorbeeld 1', '/template/templ1.php');
INSERT INTO `scripts` VALUES ('78', '11', '2', 'Template voorbeeld 2', '/template/templ2.php');
INSERT INTO `scripts` VALUES ('79', '11', '3', 'Template voorbeeld 3', '/template/templ3.php');
INSERT INTO `scripts` VALUES ('80', '11', '4', 'Template voorbeeld 4', '/template/templ4.php');
INSERT INTO `scripts` VALUES ('81', '11', '5', 'Template voorbeeld 5', '/template/templ5.php');
INSERT INTO `scripts` VALUES ('82', '11', '6', 'Template voorbeeld 6', '/template/templ6.php');
INSERT INTO `scripts` VALUES ('83', '11', '7', 'Template voorbeeld 7', '/template/templ7.php');
INSERT INTO `scripts` VALUES ('84', '11', '8', 'Template voorbeeld 8', '/template/templ8.php');
INSERT INTO `scripts` VALUES ('85', '10', '5', 'Data 2 Array', '/database-adv/data2array.php');
INSERT INTO `scripts` VALUES ('86', '11', '9', 'Mywebshop in templates (index)', '/mywebshop_template/index.php');
INSERT INTO `scripts` VALUES ('87', '4', '9', 'Databases 8', '/database/db8.php');
INSERT INTO `scripts` VALUES ('88', '5', '2', 'Fouten identificeren 2', '/fouten/fout2.php');
INSERT INTO `scripts` VALUES ('89', '11', '10', 'Mywebshop in templates (Zoeken)', '/mywebshop_template/zoek.php');
