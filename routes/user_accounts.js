const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/', function (req, res) {
//     res.send('musical key request received in router')
// })

//router.get('/signup', ctrl.user_accounts.renderNew);
//router.get('/login', ctrl.user_accounts.renderLogin);
router.get('/:id', ctrl.user_accounts.login)
//router.post('/signup', ctrl.user_account.addNew)

module.exports = router;