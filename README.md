<h1 align="center">Nexus - A plataforma líder em boost.</h1>

## Table of contents

* [Backend](#Backend)
* [Web](#Web)
* [Desktop](#Desktop)
<!--## Intro -->

## Desenvolvimento local
## Backend
- Na pasta root copie o .env.example para um arquivo .env 

```
$ docker compose up
```
```
$ docker compose down
```
- Sobe a api e o banco de dados em um container docker
> Derruba o container

## Web 

```bash
# Instala as dependencias
$ npm install
```
```
$ npm run tailwind
```
```
$ npm run dev
```


&nbsp;&nbsp;&nbsp;&nbsp;A biblioteca [shadcnui](https://ui.shadcn.com/) é utilizada como uma forma de agilizar o processo de desenvolvimento.
&nbsp;&nbsp;&nbsp;&nbsp;Por conta do turborepo, é possivel importa-los sem precisar builda-los toda vez que houver uma nova mudança.

## Desktop
O Desktop funiciona da seguinte forma, a biblioteca [Pywebview]() é responsavel por renderizar uma pagina web em uma aplicação desktop.
Para fazer isso ele utiliza os arquivos buildados do frontend como o tailwind e react em forma de html, css,js.

##### Desenvolvimento
```
$ npm install
```
```
$ npm run tailwind
```

```
$ npm run dev 
```

```
$ npm run webview
```


> <strong>Pywebview</strong> é usado para criar um programa desktop com tecnologia de front end {html,css,js}

## Outros
##### Linters
Os linters existentes são configurados por padrão e gerados pelo Turborepo


##### Monorepo
- Repositório é feito com [Turborepo](https://turbo.build/repo/docs) que permite usar caching para acelerar processos 
e uma manutenção mais facil de todo o ambiente.

##### Versões

- Python == 13.2.1
- Node == 21.6.1
- Pip == 23.3.2

Versão 0.0.1

