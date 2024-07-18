# API oficina
# Essa é uma API que criei usando Node.js

Essa API simula uma simples lista de clientes de uma oficina
fique à vontade para modificar e usa-la como base.

# Comandos iniciais(git)
-Na aba "<>Code" clique e copie a URL 

-Dentro do diretorio que você escolheu use o comando "git clone + 'link que você copiou' "

-Após o clone troque de diretorio usando o comando "cd APIoficina"

-Dentro do diretorio ja estara tudo pronto para continuar 

# Requisitos 

Wampserver
https://wampserver.aviatechno.net

Visual Studio Code
https://code.visualstudio.com

Node.js
https://nodejs.org/pt


# Como utilizar (sem modificar a API)

Após instalar todos os programas abra o Wampserver que estará em seu "Ocultar" na sua barra de tarefas.
- Abra o console do MySQL

- Crie um banco de dados com o nome de "oficina"
- CREATE DATABASE oficina;

- Acesse seu banco de dados
-  USE oficina;

-Crie uma tabela com o nome "clientes"

-CREATE TABLE clientes (nome VARCHAR(30), moto VARCHAR(30), telefone INT, id int NOT NULL AUTO_INCREMENT PRIMARY KEY);


# Passando para o Visual Studio

Após o "npm i" a unica coisa que precisara fazer é no terminal digitar o comando "node app.js"
você verá a mensagem no seu log que o servidor esta conectado e apartir dai você pode utilizar a API no "Postman" ou onde preferir.
