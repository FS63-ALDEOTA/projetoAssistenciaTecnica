import { Client } from "pg";
import dotenv from "dotenv";
import mostrarMensagem from "./utils/mensagem.js";

dotenv.config()

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

console.log(process.env.DB_NAME)

export default client

await client.connect().then( async () => {
    console.log("Conexão com o banco efetuada com sucesso")
    await client.query(`
    CREATE TABLE IF NOT EXISTS enderecos (
    id serial NOT NULL,
    cep character varying(8) COLLATE pg_catalog."default" NOT NULL,
    logradouro character varying(100) COLLATE pg_catalog."default" NOT NULL,
    num character varying(10) COLLATE pg_catalog."default" NOT NULL,
    bairro character varying(30) COLLATE pg_catalog."default" NOT NULL,
    cidade character varying(30) COLLATE pg_catalog."default" NOT NULL,
    uf character(2) COLLATE pg_catalog."default" NOT NULL,
    complemento character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT enderecos_pkey PRIMARY KEY (id));
    
    CREATE TABLE IF NOT EXISTS roles (
     id serial PRIMARY KEY NOT NULL,
     descricao VARCHAR(20) NOT NULL UNIQUE 
    );
    
    CREATE TABLE IF NOT EXISTS usuarios (
    id serial PRIMARY KEY NOT NULL,
    usuario VARCHAR(15) NOT NULL UNIQUE,
    senha VARCHAR(15) NOT NULL,
    role_id INT REFERENCES roles(id) ON DELETE RESTRICT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `).then(()=> {
        mostrarMensagem("success","Tabelas criadas com sucesso")
    })
    .catch((error)=> {
       mostrarMensagem('error', `Erro na criação das tabelas - ${error.message}`)
    })
})