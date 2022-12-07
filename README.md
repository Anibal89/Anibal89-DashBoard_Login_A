# DashBoard_Login_A
Aplicación React Js , Gestión de Roles y Autenticación  de Usuarios

Dashboard_Login
Aplicación de Login React Js con rest-api-jwt (jsonWebToken)

Instruction
npm install

Create Model and Run Users: copy in index.js and run API: (nodemon run)

import Users from "./models/UserModel.js";

try{ await db.authenticate(); console.log('Base de Datos Conectada...'); await Users.sync(); } catch(error){ console.log(error); }

clone repository api-rest-jwt: https://github.com/Anibal89/Rest-Api-Jwt install: [npm install] run: [nodemon dev]

create Schema DataBase MySql:Legacy

Create Table: users
