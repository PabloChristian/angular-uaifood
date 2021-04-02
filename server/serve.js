const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/produtos').get((request, response) => {
  response.send(PRODUCTS);
});

app.route('/api/produtos').post((request, response) => {
  let product = request.body;

  const firstId = PRODUCTS ? Math.max.apply(null, PRODUCTS.map(productIterator => productIterator.id)) + 1 : 1;
  product.id = firstId;
  PRODUCTS.push(product);
  

  response.status(201).send(product);
});

app.route('/api/produtos/:id').put((request, response) => {
  const productId = +request.params['id'];
  const product = request.body;

  const index = PRODUCTS.findIndex(productIterator => productIterator.id === productId);
  PRODUCTS[index] = product;

  response.status(200).send(product);
});

app.route('/api/produtos/:id').get((request, response) => {
  const productId = +request.params['id'];

  response.status(200).send(PRODUCTS.find(productIterator => productIterator.id === productId));
});

app.route('/api/produtos/:id').delete((request, response)=> {
  const productId = +request.params['id'];
  PRODUCTS = PRODUCTS.filter(productIterator => productIterator.id !== productId);
  
  response.status(204).send({});
});

var PRODUCTS = [
  {
    "id": 1,
    "name": "Hamburguer",
    "price": 23.5,
    "ingredients": "Pao, Hamburguer, Alface, Tomate e Queijo",
    "img": "https://s2.glbimg.com/-skQXghwNBeLCuYy742th0fMiZQ=/e.glbimg.com/og/ed/f/original/2019/12/10/marfrig.jpg"
  },
  {
    "id": 2,
    "name": "Batata Frita",
    "price": 5,
    "ingredients": "Batata, sal",
    "img": "https://www.jwdistribuidora.com.br/image/cache/data/eftr/Img_ftr_rp_387601-580x580.JPG"
  }
];
