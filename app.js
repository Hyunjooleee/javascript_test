const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/main/output.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))