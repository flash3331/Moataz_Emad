const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// تشغيل الملفات الثابتة (index.html والفيديو والصور)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`الخادم يعمل بنجاح على البورت: ${PORT}`);
});