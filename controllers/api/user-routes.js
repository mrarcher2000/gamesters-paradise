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
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attrubutes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attrubutes: ['id', 'title', 'post_url', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attrubutes: ['title']
                }
            },
            {
                model: Post,
                attrubutes: ['title'],
                through: Like,
                as: 'liked_posts'
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'Aw shucks, there\'s nobody with this name!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;