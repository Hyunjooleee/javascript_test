const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main/event_onsubmit.html'));
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
router.get('/hyunjoo/try_event', function (req, res) {
    res.sendFile(path.join(__dirname + '/hyunjoo/try_event.html'));
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
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
