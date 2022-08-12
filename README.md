# webjump

COMO RODAR A APLICAÇÃO:
1-Aplicação utiliza o banco de dados postgreSQL. Para facilitar, utilize este comando para criar container no docker: docker run --name db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5433:5432 -d postgres
2-Após criar o container no docker, criar uma conexão no postgres com o nome de "db";
3-npm install;
4-Antes de iniciar a aplicação, troque o nome do .env.example para .env
5-npm start;
