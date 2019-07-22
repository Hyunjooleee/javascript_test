const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
<<<<<<< HEAD
res.sendFile(path.join(__dirname + '/main/output.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
=======
    res.sendFile(path.join(__dirname + '/main/output.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
>>>>>>> e1085f99bd2994f0343751d7274629afe7a7b880
