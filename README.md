# Exercicios API REST com Express

APIs desenvolvidadas durante o curso de desenvolvimento back-end da Cubos Academy. 

Todas buscam seguir os padões REST.

### Tecnologias
Express | NodeJs | GitHub

### 📋 Pré-requisitos

Durante o desenvolvimento utilizei o VS Code e o Insomnia.

### 🔧 Instalação

Das bibliotecas que utilizei, 2 precisam ser baixadas via npm.

Express - Poderosa ferramenta para a criação de servidores.

Ultils Playground - Biblioteca criado pelo professor Guido Cerqueira, com diversos metodos para o desenvolvimento de funções assincronas.


#### Instalando as dependencias

Dentro da pasta do projeto, abra o terminal de digite o seguinte comando:
```
npm install 
```

## ⚙️ Executando os testes

Abra o terminal dentro da pasta da api que deseja testar e digite:
```
node --watch ./src/index.js
```
Esse comando vai colocar o servidor para rodar.

#### Todas as apis tem dentro da pasta src o arquivo roteador.


Aqui voce encontrará as rotas para realizar os testes.
```
./src/roteador.js
```
![roteador](https://github.com/CaioKWY/exercicios-servidor-express/assets/118061068/3cee2d29-f16e-42a6-956b-80bbd63bb9a3)



### 🔩 Exemplos de testes

Enquanto o servidor estiver rodando, sera possivel testar as rotas.

Aqui é retornado a lista de livros.
![lista-antes](https://github.com/CaioKWY/exercicios-servidor-express/assets/118061068/43a17212-58a9-4057-9d4b-3e6ff451d864)

Aqui sera adiciona a lista de livros os dados enviados no body.
![postar](https://github.com/CaioKWY/exercicios-servidor-express/assets/118061068/0a637895-05c0-4788-bc1e-7d132a6396fb)

Aqui a lista atualizada é retornada.
![lista-depois-adicionar](https://github.com/CaioKWY/exercicios-servidor-express/assets/118061068/34ea91c3-714f-4696-8651-6c41be7f2850)

## ✒️ Autores
Todas as APIs foram escritas por Caio Kaway, baseado na aulas do professor Guido Cerqueira.

## 📄 Licença

Este projeto é totalmente livre.

