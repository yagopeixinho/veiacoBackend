<div align="center">
     <img src="https://github.com/yagopeixinho/veiacoPlataforma/raw/main/src/assets/images/logos/logo-big.svg" width="200px">
</div>

<p align="center">
  <a href="https://github.com/yagopeixinho/veiacoBackend/commits/main">
    <img src="https://img.shields.io/github/last-commit/yagopeixinho/veiacoBackend?color=58ADE2">
  </a>
    <img src="https://img.shields.io/github/languages/count/yagopeixinho/veiacoBackend?color=006DB2">
  </a>     
  <a href="https://github.com/yagopeixinho/veiacoPlataforma/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/yagopeixinho/veiacoBackend?color=E390D2">
  </a>
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •  
  <a href="#por-quê">Por quê?</a> •
  <a href="#notas-importantes">Notas importantes</a> •
  <a href="#galeria">Galeria</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#contribuindo">Contribuindo</a> •
  <a href="#contato">Contato</a> •
  <a href="#licença">Licença</a>
</p>

## Sobre o Veiaco

Esse é o backend do Veiaco. O Veiaco é um aplicativo para que você possa gerenciar as pessoas que te devem dinheiro. "Veiaco" é um termo conhecido no Nordeste do Brasil que adjetiva pessoas que não costumam a pagar as suas dívidas e o APP surgiu na expectativa de ajudar as pessoas a cobrarem de forma sutil e cômica as pessoas que te devem.

## Por quê?

O _Veiaco_, na verdade, surgiu como uma piada. Eu estava com uns amigos – que diga-se de passagem estavam me devendo –, e então eu percebi que algumas outras pessoas estavam me devendo, então brincando, eu disse: "Vou ter que fazer uma nota fiscal pra cada um porque eu já esqueci o que cada um me deve" e então surgiu a ideia de criar um aplicativo pra resolver esse problema, pois além de não perder o dinheiro e a piada, eu posso ainda praticar a programação.

## Notas importantes

1 - **CUIDADO!** As informações que estão indo para o banco de dados não estão criptografas então cuidado ao salvar informações sensíveis!

## Galeria

<div align="center">

### Esse é o _back-end_ do projeto Veiaco. Para mais informações visuais, [clique aqui](https://github.com/yagopeixinho/veiacoPlataforma)

</div>

## Instalação

### Pré-requisitos

Antes de rodar o _back-end_ do projeto Veiaco, é necessário ter instalado em sua máquina:

- Git
- Node.js
  - A versão do node de ser >=14.17
- PostegreSQL

### 📦 Clonando o repositório

```bash
$ git clone git@github.com:yagopeixinho/veiacoBackend.git
```

### 🔨 Configurações iniciais

```bash
# Acesse o reposiório pelo terminal.
$ cd veiacoBackend

# Instale as dependências.
$ npm install
```

### 🏷 Variáveis de ambiente

Para iniciarmos o projeto precisamos declarar algumas variáveis de ambiente responsáveis pela definição de algumas informações importante, como a URL do banco de dados e porta em que a aplicação rodará.

```bash
# No diretório do projeto crie o arquivo responsável pela definição das variáveis de ambiente.
$ touch .env
```

Dentro do arquivo `.env` cole as variáveis de ambiente mínimas para rodar o projeto

```bash
# Essa é a porta em que o projeto rodará.
PORT="3333"
# Esse é o URL do banco de dados que será conectado. Lembre-se de alterar os parâmetros USER, PASSWORD, HOST:PORT e DATABASE futuramente quando configurarmos a conexão com o banco de dados.
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### ⚙️ Conectando ao banco de dados

#### PostgreSQL

Nesse projeto vamos utilizar o Prisma como ORM e conectaremos o banco de dados.

##### Criando o banco de dados Veiaco com o Postgres

```bash
# Acesse o psql pelo terminal.
$ sudo -u postgres psql

# Crie o banco de dados.
CREATE DATABASE veiaco;
```

O banco de dados foi criado as tabelas e colunas ainda não foram geradas, somente um banco de dados vazio. Para iniciar o projeto basta digitar `npm start` na pasta raiz.

```bash
# Com o projeto rodando, gere os migrates do banco de dados do Prisma.
$ npx prisma migrate dev
```

As informações foram geradas e agora o banco de dados está pronto pra receber e conceber informações.

> **Notas**
> Caso tenha alguma dúvida e/ou problema durante a instalação do ambiente, [me deixe saber](https://github.com/yagopeixinho) o mais rápido possível!

## Contribuindo

Sinta-se a vontade para enviar quantos _pull request's_ forem necessários, as revisarei gradamente.

## Contato

- 📬 Me envie um e-mail: peixinhoyago@gmail.com
- Se você tem alguma dúvida ou deseja entrar em contato comigo por qualquer outro motivo, encontre mais informações sobre mim [clicando aqui](https://github.com/yagopeixinho/yagopeixinho/blob/master/README.md).

## Licença

Esse projeto está sobre o MIT License. [Clique aqui para mais informações](https://github.com/yagopeixinho/veiacoBackend/blob/master/LICENSE).
