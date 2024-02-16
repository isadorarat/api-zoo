CREATE TABLE reptil(id SERIAL NOT NULL PRIMARY KEY, 
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR (12) NOT NULL, 
					tipo_de_escamas VARCHAR(50));
					
					
CREATE TABLE ave(id SERIAL NOT NULL PRIMARY KEY, 
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR (12) NOT NULL, 
					envergadura FLOAT);
										
										
CREATE TABLE mamifero(id SERIAL NOT NULL PRIMARY KEY, 
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR (12) NOT NULL, 
					raca VARCHAR(30));

INSERT INTO mamifero (nome, idade, genero, raca )
    VALUES
	('Simba', 2 , 'Macho', 'Leão'),
	('Timão',1,'Macho','Suricato'),
	('Pumba',10,'Macho','Javali');
	
INSERT INTO ave (nome, idade, genero,envergadura )
	VALUES 
	('Zalu', 3, 'Femea',20),
	('Iago', 5, 'Macho',30);

INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
	VALUES 
	('pascal', 4 , 'Macho' , 'Escamas Dérmicas'), 
	('Crush', 50, 'Macho' , 'Escudos');
	
--ALTER TABLE reptil
--ALTER COLUMN ripo_de_escamas Type VARCHAR(50);

--SELECT * FROM mamifero ;
--SELECT * FROM ave;
--SELECT * FROM retil;

	