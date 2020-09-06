# Simple CRUD with GraphQL

<h1 align="center">
    <img alt="Proffy" src="assets/logo.png" height="100px" />
    <br/>
   <a href="https://graphql.org" target="_blank" rel="noopener">GraphQL</a> | <a href="https://pt-br.reactjs.org" target="_blank" rel="noopener">ReactJS</a> | <a href="https://www.mongodb.com" target="_blank" rel="noopener">MongoDB</a>
</h1>

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-Gabriel%20Patrola-blue?style=flat&logo=Awesome-Lists">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrielpatrola/graphql?color=informational&style=flat&logo=GitHub-Actions">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gabrielpatrola/graphql?color=important&style=flat&logo=Javascript">
  <img alt="Made By" src="https://img.shields.io/github/license/gabrielpatrola/graphql?&style=flat&logo=Google-Sheets">
<p>

<h3 align="center">
  <a href="#-sobre">Sobre</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-como-usar">Como usar</a>
  <span> · </span>
  <a href="#-como-contribuir">Como contribuir</a>
  <span> · </span>
  <a href="#-licença">Licença</a>
</h3>

## 💭 Sobre

A aplicação foi desenvolvida para entender os conceitos de GraphQL e também para entender como funciona os banco de dados não relacionais, no caso o MongoDB.

Um app bem simples que conta com um CRUD, quase completo, onde é possível criar comentários, listar comentários, e deletar comentários.

## 👨‍💻 Tecnologias Utilizadas

- <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a>
- <a href="https://graphql.org/" target="_blank" rel="noopener">GraphQL</a>
- <a href="https://www.mongodb.com/" target="_blank" rel="noopener">MongoDB</a>

## ⁉ Como usar

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter:

- O **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>** instalado no computador
- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Gabrielpatrola/graphql.git
  # Entre na pasta raiz da aplicação
  $ cd graphql
```

2. Iniciando o Backend

```sh
  # Entre na pasta do backend
  $ cd server
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Antes de iniciar o servidor é necessário criar um arquivo .env com as informações do .env.example
  # Após preencher o seu .env rode o comando abaixo para iniciar o servidor
  $ yarn dev
```

3. Iniciando o Frontend web

```sh
  # Entre na pasta da aplicação web
  $ cd client
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

## 💪 Como contribuir

Basta criar um fork do projeto, realizar as modificações que achar necessário e depois fazer um Pull Request.
Toda ajuda é bem vinda, caso veja algum erro, não hesite em contribuir com o projeto!

## 📃 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

<sup> Feito com 💙 por <a href="https://github.com/gabrielpatrola" target="_blank" rel="noopener">Gabriel Patrola</a>.</sup>
