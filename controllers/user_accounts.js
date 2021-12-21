const User = require('../models').User_Account;

const signup = (req, res) => {
    User.create(req.body)
        .then((newUser) => {
            [ newUser.name,
              newUser.username,
              newUser.password,
              newUser.is_admin
            ]
        })
}

const changePassword = (req, res) => {
    console.log(req.params)
    User.update(
        // attributes:['username', 'password'],
        { password: req.params.password },
        { where: {username: req.params.id}
    })
    .then(foundUser => {
        console.log('Controller - change password')
            res.json({username: foundUser.username})
        })           
   // console.log(`ERROR: Incorrect Username/Password`);
}

const deleteUser = (req, res) => {
    User.destroy({ where: { username: req.params.id } })
    .then(() => {
        res.redirect('/');
    })
}

const login = (req, res) => {
    User.findOne({
        attributes:['username', 'password'],
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(req.body.password === foundUser.password) {
            console.log('Successful logon')
            res.json({username: foundUser.username})
                } else {
                    console.log(`ERROR: Incorrect Username/Password`);
                }
    })
}

const getUserId = (req, res) => {
    User.findOne({ 
        attributes:['id'],
        where: { 
            username: req.body.username
        }
    })
    .then(foundId => {
        res.json({userId: foundId.id})
    })
}

module.exports = {
    signup,
    changePassword,
    deleteUser,
    login,
    getUserId
}