const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// الرد على الرابط الرئيسي
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// الرابط المطلوب /validate
app.get('/validate', (req, res) => {
    res.json({
        "valid": true,
        "reason": "ok",
        "expires": "2099-12-31T23:59:59Z",
        "sig": "42e051828c47281e49f21a0d674bbcb014f645118c8961e8bb965053bcea1132"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
