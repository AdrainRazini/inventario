const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para tratamento de erros
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para obter o inventário completo
app.get('/inventario', (req, res) => {
    fs.readFile('inventario.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(JSON.parse(data)); // Envia o inventário completo como JSON
    });
});

// Rota para adicionar novo item
app.post('/adicionar', (req, res) => {
    fs.readFile('inventario.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        
        const inventario = JSON.parse(data);
        const novoItem = {
            id: inventario.length > 0 ? inventario[inventario.length - 1].id + 1 : 1, // Gera um novo ID
            transportadora: req.body.transportadora,
            cliente: req.body.cliente,
            itens: req.body.itens,
            valor_total_declarado: req.body.valor_total_declarado,
            observacao: req.body.observacao,
            data_local: req.body.data_local,
            assinaturas: req.body.assinaturas
        };

        inventario.push(novoItem); // Adiciona o novo item ao inventário
        fs.writeFile('inventario.json', JSON.stringify(inventario, null, 2), (err) => {
            if (err) return res.status(500).send(err);
            res.status(201).send(novoItem); // Retorna o novo item adicionado
        });
    });
});

// Rota para deletar um item
app.delete('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('inventario.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        const inventario = JSON.parse(data);
        const index = inventario.findIndex(item => item.id === id); // Encontra o índice do item pelo ID
        if (index === -1) {
            return res.status(404).send('Item não encontrado');
        }
        const itemRemovido = inventario[index]; // Guarda o item que será removido
        inventario.splice(index, 1); // Remove o item do inventário
        fs.writeFile('inventario.json', JSON.stringify(inventario, null, 2), (err) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Item deletado', item: itemRemovido }); // Retorna o item removido
        });
    });
});

// Middleware de tratamento de erros
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
