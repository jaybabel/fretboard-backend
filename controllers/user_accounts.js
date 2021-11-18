const User_Account = require('../models').User_Account;

//  app.get('/user_accounts', function (req, res) {
//      res.send('User_Accounts request received in controller')
//  })

const login = (req, res) => {
    // res.send(req.params.id)
    User_Account.findAll({
        where: {
            username: req.params.id
        }
    })
    .then(foundUser => {
            res.json(foundUser);            
        })
    .catch(err => {
        res.send(`ERROR: ${err}`);
        }) 
}

module.exports = {
    login
}