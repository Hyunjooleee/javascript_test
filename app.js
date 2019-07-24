const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/switch', function (req, res) {
    res.sendFile(path.join(__dirname + '/main/switch.html'));
    //__dirname : It will resolve to your project folder.
});


//현주
router.get('/main/onsubmit', function (req, res) {
    res.sendFile(path.join(__dirname + '/main/onsubmit.html'));
});

//값 받아오기
router.get('/onsubmit', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.name+','+req.query.password)
    });


    
//채린
router.get('/ans', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.name+', '+req.query.password)
});

router.get('/ans_2', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.firstname+', '+req.query.lastname
    +', '+req.query.username+', '+req.query.City+', '+req.query.State
    +', '+req.query.Zip)
});
router.get('/cookie', function (req, res) {
    res.sendFile(path.join(__dirname + '/main/cookie.html'));
    //__dirname : It will resolve to your project folder.
});
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
