const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Game, Like, Post, Review, User } = require('../models');


// DASHBOARD ROUTE
router.get('/dashboard', (req, res) => {
    console.log(req.session);


    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = like.post_id)'), 'like_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attribute: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', {
                posts,
                loggedIn: req.session.logged
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// HOMEPAGE ROUTE
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});




module.exports = router;