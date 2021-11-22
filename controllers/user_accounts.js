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

}

const deleteUser = (req, res) => {
    console.log(req.body)
    // User.findByPk(req.params.id)
    //     if (username === null) {
    //         console.log('User record not found')
    //     } else {
    //         console.log(username instanceof User)
    //     }
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
module.exports = {
    signup,
    changePassword,
    deleteUser,
    login
}