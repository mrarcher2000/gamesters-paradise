const router = require('express').Router();
const { User, Post, Comment, Like } = require('../../models');

//all your users are belong to us (gets the users)
router.get('/', (req, res) => {
    User.findAll({
        attrubutes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500)
    })
})