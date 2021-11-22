const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/signup', function (req, res) {
//     res.send('user signup (post) request received in router')
// })

router.post('/signup', ctrl.user_accounts.signup);
router.post('/delete/:id', ctrl.user_accounts.deleteUser);
router.post('/login', ctrl.user_accounts.login);


module.exports = router;