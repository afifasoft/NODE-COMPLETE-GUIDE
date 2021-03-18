const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');


const router = express.Router();

router.get('/', (req, res, next) => {
    //c console.log('In another middleware');
    // res.send('<h1>Hello from Express!</h1>');
    console.log('shop.js',adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop');

});

module.exports = router;