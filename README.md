# Car auction app

## Um app em Express fazer leilão de carros

## Tecnologias usadas

* NodeJS
* Express
* Mongo
* Docker-compose
* JWT
* Vitest 
* Zod
* GitHub Actions

## Começando
### Pre-requisitos

Para rodar este projeto, é necessário preparar o seu ambiente, isso significa que precisa:

1. Instalar NodeJS 20+ - https://nodejs.org/en
2. Baixar e instalar o Docker - https://www.docker.com/products/docker-desktop/

### Instalando
**Clonando o Repositório**
```
$ git clone git@github.com:ArthurPMachado/car-auction-app.git

$ cd car-auction-app
```
**Instalando dependências**

```
$ pnpm i
```
### Adicionando variáveis de ambiente
Para este projeto, temos algumas váriaveis de ambiente conforme definido no arquivo .env.example. 
Algumas dessas variaveis já estarão preenchidas, como o ambiente, porta, host e as collections do mongo.
As demais variaveis podem ser preenchidas com quaisquer valores, respeitando as regras para se iniciar
uma imagem docker

### Rodando o projeto

**Iniciando docker**
```
$ docker-compose up -d
```

Nesta etapa ocorrerá a subida do container mongo. Quando terminar, a aplicação estará pronta para uso

# Autor

👤 **Arthur Machado**

- Github: [@Arthur Machado](https://github.com/ArthurPMachado)
- LinkedIn: [@Arthur Machado](https://linkedin.com/in/arthurpmachado)
