# <div style="text-align:center; color:blue">Nexus</div> 

### Estrutura de diretórios

##### Monorepo
- Repṕsitorio feito com [Turborepo](https://turbo.build/repo/docs) que permite usar caching para acelerar processos 
e uma manutenção mais facil de todo o ambiente.

##### Filosofia
- O desenvolvimento deve ser o mais otimizado possivel,e portanto evitar rescrever código desnecessáriamente,
e portanto ser baseia em ter componentes e modulos reutilizáveis



### Backend
##### Python

- Fastapi > Api restful
- Sqlalchemy > Orm > banco de dados representado para orientação a objetos
- Postgresql

##### Banco de dados

- Alembic - Facilita o versionamento, migração e controle do banco de dados
- Postgresql
> O banco utilizado, é um postgres por conta da facil integraçao com sql alchemy é versionado com ajuda do [Alembic]([https://alembic.sqlalchemy.org/en/latest)

### Desktop
O Desktop funiciona da seguinte forma, a biblioteca [Pywebview]() é responsavel por renderizar uma pagina web em uma aplicação desktop.
Para fazer isso ele utiliza os arquivos buildados do frontend como o tailwind e react em forma de html, css,js.
> Desenvolvimento
```npm run tailwind```
```npm run dev ```
```ǹpm run webview```

> Agora a aplicação deve abrir já com hot reload funcionando

- <span style="color:LightGray">Mesma coisa que o website </span><br>
- <span style="color:LightGray">Pywebview</span><br>

> <strong>Pywebview</strong> é usado para seu criar um programa Python com tecnologia de front end ```Electron do python ?```

> A aplicação <strong>desktop</strong> faz os boosters logarem automatico e outras funcionalidades 

### Web 

> Development
```npm run tailwind```
```ǹpm run dev```

- TODO Configurar deploy em alguma plataforma como github pages ou vercel

- A biblioteca [shadcnui]() é utilizada como uma forma de agilizar o processo de desenvolvimento, ela prove componentes
prontos que poupam a necessidade de fazer tudo do zero.É recomendavel adaptar os componentes e coloca-los na pasta de componentes
por conta do turborepo, é possivel importa-los sem precisar builda-los toda vez que houver uma nova mudança.


## Docker
- Antes é necessário criar um .env no repositório root e preencher com os dados do .env.example
O ambiente de desenvolvimento é projetado para funcionar com [Docker composer](https://docs.docker.com/compose/)
apartir de qualquer pasta do arquivo é possivel usar ```npm run dev``` no terminal, e assim subir a api e o banco
de forma instantanea

### Reutilização

##### Componentes
Na pasta package/libs estão componentes feitos com tailwind/react, podem ser utilizados tanto pela aplicação desktop
quanto no frontend.

##### Módulos
Os módulos de python estão em /libs/python e são reutilizados no backend e na aplcação desktop

#
### Linters
Os linters existentes são configurados por padrão e gerados pelo Turborepo
> TODO
- Configurar os linters para manter um padrão dentro do projeto

#### Versões

- Python == 13.2.1
- Node == 21.6.1
- Pip == 23.3.2
