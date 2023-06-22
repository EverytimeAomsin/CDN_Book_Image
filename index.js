const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.send('DOH18 CDN file Service \n|||--||| Contact dev: 082-430-3880 or sarin542@hotmail.com');
});

// ทำให้ไฟล์ภายในโฟลเดอร์ 'books' สามารถเข้าถึงได้ผ่านเส้นทาง '/img'
app.use('/img/books/', express.static(path.join(__dirname, 'img/books')));

app.use('/video/drone', express.static(path.join(__dirname, 'video/drone')));


app.listen(5900, () => {
  console.log('Server is running at http://localhost:5900');
});
