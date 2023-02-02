<!-- <div align="center">
     <img src="assets/images/readmeTemplateIcon.png" width="300px">
</div> -->

<h4 align="center">README - work in progress...</h4>

<p align="center">
    <img src="https://img.shields.io/github/last-commit/yagopeixinho/readmeTemplate?color=008ebd">
    <img src="https://img.shields.io/github/languages/count/yagopeixinho/readmeTemplate?color=b3ecff">
    <img src="https://img.shields.io/netlify/a56c2296-3139-4d5a-8fcd-b32b52f0b6a5?color=69bbc9">
    <img src="https://img.shields.io/github/license/yagopeixinho/vouAoMercado?color=00b6d6">
</p>

<p align="center">
  <a href="#about-the-project">About</a> • 
  <a href="#project-notes">Project notes</a> •
  <a href="#gallery">Gallery</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#contacting">Contacting</a> •
  <a href="#license">License</a>
</p>

<!-- <img src="assets/images/sampleImage2.png" width="100%"> -->

<br>

# About the Project

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacinia mauris. Donec consequat ligula sapien. Fusce vitae vestibulum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit dapibus ligula, non maximus augue tempor a. Etiam sed dolor magna. Praesent rhoncus urna eu ipsum accumsan dignissim.

# Project Notes

- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacinia mauris. Donec consequat ligula sapien. Fusce vitae vestibulum diam.
- Lorem ipsum dolor sit amet, _consectetur adipiscing elit_. Aenean at lacinia mauris. Donec consequat _ligula sapien_. Fusce vitae vestibulum diam.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.

# Gallery

<div align="center">

### Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<!-- <img src="assets/images/sampleImage1.png"> -->

</div>

<br>

# Instalação

## Pré-requisitos

Antes de rodar o _back-end_ do projeto Veiaco, é necessário ter instalado em sua máquina:

- Git
- Node.js
  - A versão do node de ser >=14.17
- PostegreSQL

## 📦 Clonando o repositório

```bash
$ git clone git@github.com:yagopeixinho/veiacoBackend.git
```

## 🔨 Configurações iniciais

```bash
# Acesse o reposiório pelo terminal
$ cd veiacoBackend

# Instale as dependências
$ npm install
```

## Variáveis de ambiente

Para iniciarmos o projeto precisamos declarar algumas variáveis de ambiente responsáveis pela definição de algumas informações importante, como a URL do banco de dados e porta em que a aplicação rodará.

```bash
# No diretório do projeto crie o arquivo responsável pela definição das variáveis de ambiente
$ touch .env
```

Dentro do arquivo _.env_ cole as variáveis de ambiente mínimas para rodar o projeto

```bash
PORT="3333"
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

## 🗂️ Conectando o banco de dados

### PostgreSQL

Nesse projeto vamos utilizar o Prisma como ORM e conectaremos o banco de dados.

##### Criando o banco de dados Veiaco com o Postgres

```bash
# Acesse o psql pelo terminal
$ sudo -u postgres psql

# Crie o banco de dados
CREATE DATABASE veiaco;
```

O banco de dados foi criado as tabelas e colunas ainda não foram geradas, somente um banco de dados vazio. Com o projeto rodando na porta `localhost:3333` digite no terminal

```bash
# Rode os migrates do Prisma
$ npx prisma migrate dev
```

As informações foram geradas e agora o banco de dados está pronto pra receber e conceber informações.

Para iniciar o projeto basta digitar `npm start` na pasta raiz.

# Contributing

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacinia mauris.

# Contacting

- 📬 Lorem ipsum dolor sit amet: loremipsumdolor@sitamet.com
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacinia mauris. Donec consequat ligula sapien. Fusce vitae vestibulum diam. [Lacinia mauris](https://github.com/yagopeixinho/yagopeixinho/blob/master/README.md)

## License

Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Lorem ipsumm dolor siti](https://github.com/yagopeixinho/vouAoMercado/blob/master/LICENSE)
