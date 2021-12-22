const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/signup', function (req, res) {
//     res.send('user signup (post) request received in router')
// })

router.post('/signup', ctrl.user_accounts.signup);
router.post('/delete/:id', ctrl.user_accounts.deleteUser);
router.post('/login', ctrl.user_accounts.login);
router.post('/changePassword/:id/:password', ctrl.user_accounts.changePassword);
router.post('/userId', ctrl.user_accounts.getUserId);


module.exports = router;