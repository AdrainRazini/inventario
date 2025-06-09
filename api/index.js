const express = require('express');
const axios = require('axios');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const BIN_ID = process.env.BIN_ID;
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota raiz
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

// Outras rotas (mantidas iguais)
app.get('/inventario', async (req, res) => {
  try {
    const response = await axios.get(JSONBIN_URL, {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    res.json(response.data.record);
  } catch (err) {
    res.status(500).send('Erro ao acessar o inventário.');
  }
});

app.post('/adicionar', async (req, res) => {
  try {
    const response = await axios.get(JSONBIN_URL, {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    const inventario = response.data.record;

    const novoItem = {
      id: inventario.length > 0 ? inventario[inventario.length - 1].id + 1 : 1,
      transportadora: req.body.transportadora,
      cliente: req.body.cliente,
      itens: req.body.itens,
      valor_total_declarado: req.body.valor_total_declarado,
      observacao: req.body.observacao,
      data_local: req.body.data_local,
      assinaturas: req.body.assinaturas
    };

    inventario.push(novoItem);
    await axios.put(JSONBIN_URL, inventario, {
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      }
    });

    res.status(201).send(novoItem);
  } catch (err) {
    res.status(500).send('Erro ao adicionar novo item.');
  }
});

app.delete('/deletar/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await axios.get(JSONBIN_URL, {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    const inventario = response.data.record;

    const index = inventario.findIndex(item => item.id === id);
    if (index === -1) return res.status(404).send('Item não encontrado');

    const itemRemovido = inventario[index];
    inventario.splice(index, 1);

    await axios.put(JSONBIN_URL, inventario, {
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      }
    });

    res.json({ message: 'Item deletado', item: itemRemovido });
  } catch (err) {
    res.status(500).send('Erro ao deletar item.');
  }
});

// Exportar como função serverless
module.exports = app;
module.exports.handler = serverless(app);
