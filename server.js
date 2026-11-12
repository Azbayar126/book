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

app.get('/api/books/:id', (req, res) => {                  // GET /api/books/1 гэх мэт: :id нь хувьсах хэсэг
  const book = books.find(b => b.id === Number(req.params.id));   // URL-ээс id-г авч, жагсаалтаас тохирох номыг хайна
  if (!book) {                                             // олдоогүй бол
    return res.status(404).json({ error: 'Ном олдсонгүй' });      // 404 статус, алдааны мессеж буцаана
  }
  res.json(book);                                          // олдсон бол тэр номыг буцаана
});

app.listen(PORT, () => {                
  console.log(`Server running on port ${PORT}`);       
});