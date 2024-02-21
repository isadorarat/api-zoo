// Importa o framework Express para criação do servidor
import express from 'express';
import cors from 'cors';

// Importa as classes de modelos
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zologico';
import { DatabaseModel } from './model/DatabaseModel';

// Porta em que o servidor irá rodar
const port = 4321;

// Criação do servidor Express
const server = express();

server.use(express.json());

server.use(cors());

// Rota principal que retorna uma lista contendo instâncias de diferentes classes de animais e habitat
server.get('/', (req, res) => {
    // Cria instâncias de diferentes classes de animais e habitat
    let ave: Ave = new Ave('Papagaio', 15, 'Masculino', 10);
    let reptil: Reptil = new Reptil('largato', 2, 'femea', 'cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'cachorro', 102, 'femea');


    // Retorna a lista de instâncias no formato JSON como resposta à requisição
    res.json([ave, reptil, mamifero]);
});

// Rota para criar uma nova ave através de uma requisição POST
server.post('/ave', (req, res) => {
    // Extrai os dados da requisição
    const { nome, idade, genero, envergadura } = req.body;

    // Cria uma nova instância de Ave com os dados fornecidos
    const novaAve = new Ave(nome, idade, genero, envergadura);

    // Retorna a nova ave como resposta à requisição
    res.json(['Esta é a nova ave do Zoologico:', novaAve]);
});

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');

});
server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('atracao criada');

});

server.post('/zologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zologico = new Zoologico(nome, atracao);
    console.log(zologico);
    res.status(200).json('zoologico criado');

});
// Inicia o servidor na porta especificada
new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd) {
        server.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
})
