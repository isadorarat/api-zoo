import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';

const port = 4321;

const server = express();

server.use(express.json());
server.use(cors());


server.get('/', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 15, 'Masculino', 10);
    let reptil: Reptil = new Reptil('largato', 2, 'femea', 'cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'cachorro', 102, 'femea');
    res.json([ave, reptil, mamifero]);
})
server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    const novaAve = new Ave('papagaio', 15, 'masculino', 10);
    res.json(['Está é a nova ave do Zoologico:', novaAve]);
})


server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})

