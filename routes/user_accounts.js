const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/signup', function (req, res) {
//     res.send('user signup (post) request received in router')
// })

router.post('/signup', ctrl.user_accounts.signup);
//router.get('/login', ctrl.user_accounts.renderLogin);
router.post('/login', ctrl.user_accounts.login)
//router.post('/signup', ctrl.user_account.addNew)

module.exports = router;