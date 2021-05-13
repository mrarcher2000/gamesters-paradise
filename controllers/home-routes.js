const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Game, Like, Post, Review, User } = require('../models');


// HOMEPAGE ROUTE
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});


// GAMES ROUTE
router.get('/games', (req, res) => {
    res.render('games', {
        loggedIn: req.session.loggedIn
    });
});



// POST ROUTE
router.get('/mypost', (req, res) => {

    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }


    res.render('post', {
        loggedIn: req.session.loggedIn
    });
});



// LOGIN ROUTE
router.get('/login', (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/dashboard', (req, res) =>{
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;