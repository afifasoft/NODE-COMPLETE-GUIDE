const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    //c console.log('In another middleware');
     res.send('<h1>Hello from Express!</h1>');
 });

 module.exports = router;