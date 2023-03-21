const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
import { Router } from "express";

const app = express();

const route = Router();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let db = [
    {'1' : { Nome : 'Cliente 1', Idade: '20'}},
    {'2' : { Nome : 'Cliente 2', Idade: '25'}},
    {'3' : { Nome : 'Cliente 3', Idade: '22'}},
]


//Buscar Dados
route.get('/', (req, res) => {
    return res.json(db)
});


//Inserir Dados
route.post('/add', (req, res) => {
    const body = req.body;

    if(!body) {
        return res.status(400).end();
    }
    db.push(body);  
    return res.json(body);
});

app.use(route);

app.listen(3000, () => {
    console.log('Servidor Startado em http://localhost:3000')
});