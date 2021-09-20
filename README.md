# PRÉ-REQUISITOS

## Node
Para instalar o node, acesse: https://nodejs.org/pt-br/download/


# INSTALAR DEPENDÊNCIAS
Para instalar as dependências do projeto, rode o comando `npm install`, é necessário para o funcionamento do projeto em sua máquina.


# RODAR LOCALMENTE
Para rodar localmente o projeto, rode o comando `npm start`, depois acesse o endereço http://localhost:3000/ no browser.

# Migrations
As migrations servem para criar as tabelas no banco de dados automaticamente.
Certifique-se de ter criado um arquivo .env com as configurações do seu Mysql preenchidas.
Além disso, certifique-se de ter criado um schema chamado invisivel no seu Mysql.
Após isso, rode o comando `npx sequelize db:migrate` para criar todas as tabelas automaticamente no seu banco.
Para remover as tabelas, uma por uma, rode o comando `npx sequelize db:migrate:undo`.
