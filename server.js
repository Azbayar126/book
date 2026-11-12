const express = require('express');      
const app = express();                    
const PORT = process.env.PORT || 3020;    

const books = [                          
  { id: 1, title: 'Монголын нууц товчоо' },
  { id: 2, title: 'Тунгалаг Тамир' }
];

app.get('/', (req, res) => {              
  res.json({ message: 'Номын API ажиллаж байна' });   
});

app.get('/api/books', (req, res) => {     
  res.json(books);
});

app.listen(PORT, () => {                
  console.log(`Server running on port ${PORT}`);       
});