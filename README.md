## Table of contents
* [Backend](#Intro)
* [Web](#Desktop)
* [Desktop](#Desktop)
<!--## Intro -->

## Backend
##### Desenvolvimento
- Na pasta root copie o .env.example para um arquivo .env 

```
$ docker compose up
```
> Sobe a api e o banco de dados em um container docker
```
$ docker compose down
```
> Derruba o container

## Web 
##### Desenvolvimento

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
$ npm run tailwind
```

```
$ npm run dev 
```

```
$ npm run webview
```


> <strong>Pywebview</strong> é usado para seu criar um programa Python com tecnologia de front end

## Outros
##### Linters
Os linters existentes são configurados por padrão e gerados pelo Turborepo

###### TODO
- Configurar os linters para manter um padrão dentro do projeto
- Configurar deploy em alguma plataforma como github pages ou vercel
##### Monorepo
- Repositório é feito com [Turborepo](https://turbo.build/repo/docs) que permite usar caching para acelerar processos 
e uma manutenção mais facil de todo o ambiente.

##### Versões

- Python == 13.2.1
- Node == 21.6.1
- Pip == 23.3.2

Versão 0.0.1

