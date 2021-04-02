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
  console.log('Servidor Iniciado! Bora pedir delivery! 😋️');
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

var PRODUCTS = {
  "produtos": [
    {
      "id": 1,
      "name": "Hamburguer Simples",
      "price": 23.5,
      "ingredients": "Pao, Hamburguer, Alface, Tomate e Queijo",
      "img": "https://s2.glbimg.com/-skQXghwNBeLCuYy742th0fMiZQ=/e.glbimg.com/og/ed/f/original/2019/12/10/marfrig.jpg"
    },
    {
      "id": 2,
      "name": "Batata Frita - PEQUENA",
      "price": 5,
      "ingredients": "Batata, sal",
      "img": "https://www.jwdistribuidora.com.br/image/cache/data/eftr/Img_ftr_rp_387601-580x580.JPG"
    },
    {
      "id": 3,
      "name": "Pastel de Carne",
      "price": 2.80,
      "ingredients": "Carne",
      "img": "https://santaterezinhamassas.com.br/wp-content/uploads/2019/08/MassaPastel500g-2-1000x1167.jpg"
    },
    {
      "id": 4,
      "name": "Pizza de Calabresa - GRANDE",
      "price": 29.90,
      "ingredients": "Molho de tomate, calabresa, azeitona",
      "img": "https://static1.casapraticaqualita.com.br/articles/2/77/2/@/809-a-pizza-de-calabresa-e-uma-das-mais-sabo-opengraph_1200-2.jpg"
    },
    {
      "id": 5,
      "name": "Pastel de Frango",
      "price": 2.80,
      "ingredients": "Frango",
      "img": "https://santaterezinhamassas.com.br/wp-content/uploads/2019/08/MassaPastel500g-2-1000x1167.jpg"
    },
    {
      "id": 6,
      "name": "Coxinha de Frango com Catupiry",
      "price": 3.99,
      "ingredients": "Catupiry, frango",
      "img": "https://achougastronomia.com.br/wp-content/uploads/2020/08/coxinha.jpg"
    },
    {
      "id": 7,
      "name": "Hamburguer XEgg Bacon",
      "price": 23.5,
      "ingredients": "Pao, Hamburguer, Alface, Tomate e Queijo",
      "img": "https://s2.glbimg.com/-skQXghwNBeLCuYy742th0fMiZQ=/e.glbimg.com/og/ed/f/original/2019/12/10/marfrig.jpg"
    },
    {
      "id": 8,
      "name": "Batata Frita - GRANDE",
      "price": 8.50,
      "ingredients": "Batata, sal",
      "img": "https://www.jwdistribuidora.com.br/image/cache/data/eftr/Img_ftr_rp_387601-580x580.JPG"
    }
  ],
  "bebidas": [
    {
      "id": 1,
      "name": "Refrigerante Coca Cola Lata",
      "price": 4.90,
      "volume": "250ML",
      "img": "https://uploads.consultaremedios.com.br/product_variation_images/full/74d92ae3a31e672913ce44b969bd9d1cc4221397.jpg?1585055886"
    },
    {
      "id": 2,
      "name": "Refrigerante Guaraná",
      "price": 8.50,
      "volume": "2L",
      "img": "https://io2.convertiez.com.br/m/drogamaxi/shop/products/images/24581/medium/guarana-antarctica-2-litros_3674.jpg"
    }
  ]
};
