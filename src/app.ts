import express from 'express';
import cors from 'cors';

const port = 4321;

const server = express();

server.use(express.json());
server.use(cors());


server.get('/', (req, res) => {
    res.json('Ola mundo!!!');
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})