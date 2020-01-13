# Adonis API application

API Rest da plataforma de teleconsulta.

## Clone project

```bash
git clone https://github.com/0zz1cl13/backend-teleconsulta.git
```

## Install dependencies 

No diretório do projeto, backend-teleconsulta/

```bash
npm install
```

## Gerar chave privada 

```bash
adonis key:generate
```

## Config .env

Renomear .env.example para .env.
Configurar acesso ao banco, exemplo:

```js
DB_CONNECTION=pg 
DB_HOST=127.0.0.1 
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_DATABASE=db_teleconsulta
```

### Run project

```bash
adonis serve --dev
```

### Test BD

```bash
adonis migration:run
```
