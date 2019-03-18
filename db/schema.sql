-- Create db for app --
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table for app data detailing burger characteristics -- 
CREATE TABLE burgers (
	id INT( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	--  Set ID as primary key --
	PRIMARY KEY (id)
);

