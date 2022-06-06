create database MotoDicas;
use MotoDicas;

-- Criando a tabela Cadastro	
create table cadastro(
id_cadastro int primary key auto_increment,
nome varchar (80),
email varchar (65),
senha varchar (45),
confirmar_senha varchar (45),
marca varchar (15)
);