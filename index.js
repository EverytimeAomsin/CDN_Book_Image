const express = require('express');
const app = express();
const path = require('path');

// ทำให้ไฟล์ภายในโฟลเดอร์ 'books' สามารถเข้าถึงได้ผ่านเส้นทาง '/img'
app.use('/img/books/', express.static(path.join(__dirname, 'img/books')));


app.listen(5900, () => {
  console.log('Server is running at http://localhost:5900');
});
