const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const products = [
  { 
    id: 1, 
    name: "Noise-Cancelling Headphones", 
    price: 149.99, 
    category: "Audio", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" 
  },
  { 
    id: 2, 
    name: "RGB Mechanical Keyboard", 
    price: 99.50, 
    category: "Peripherals", 
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" 
  },
  { 
    id: 3, 
    name: "Wireless Precision Mouse", 
    price: 49.99, 
    category: "Peripherals", 
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" 
  },
  { 
    id: 4, 
    name: "4K Ultra-Wide Monitor", 
    price: 389.00, 
    category: "Displays", 
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" 
  }
];

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

module.exports = app;