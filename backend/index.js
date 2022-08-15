//Javascript aceita tanto aspas simples, como aspas duplas.

// Área da Preparação, onde cria uma Aplicação usando express.
// Require indica que precisamos do pacote express e atribuo ele a variável também express, que é uma constante.
// Versãos mais antigas do JavaScrip usa-se "formato" Require, mas nas versões mais novas usa-se o "formato" Import (VS Code corrigi automaticamente, se quiser).
// Por fim, executa-se a nossa "função" express colocando () e, pelo padrão, atribui-se ela à variável constante app, que será nossa Aplicação.
const express = require("express");
const app = express();

// Essa área cria o endpoint (rota) principal (/).
// Aplicação (app) está preparada para receber um requesição (request) do método HTTP Get do navegador e então executa a function e com res.send devolve para esse Get "valor" (Oi, Mundão!).
// Conteúdo (ações) da function fica entre {}.
app.get("/", function (req, res) {
    res.send("Oi, Mundão!");
});

// Rota alternativa (/ola) que também tem informação diferente (Olá, Mundo!).
app.get("/ola", function (req, res) {
    res.send("Olá, Mundo!");
});

// Aqui, aplicação está ouvindo qualquer solicitação na porta 3000 e ele conclui nossa aplicação, então tudo que quisermos criar e executar tem que vir antes deste listen.
app.listen(3000);
