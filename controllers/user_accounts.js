const User = require('../models').User_Account;

//  app.get('/user_accounts', function (req, res) {
//      res.send('User_Accounts request received in controller')
//  })

// const login = (req, res) => {
//     // res.send(req.params.id)
//     User_Account.findAll({
//         where: {
//             username: req.params.id
//         }
//     })
//     .then(foundUser => {
//             res.json(foundUser);            
//         })
//     .catch(err => {
//         res.send(`ERROR: ${err}`);
//         }) 
// }

const login = (req, res) => {
    console.log('=========== ', req.body)
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(req.body.password === foundUser.password) {
            console.log('Successful logon')
                } else {
                    console.log(`ERROR: Incorrect Username/Password`);
    }})
}
module.exports = {
    login
}