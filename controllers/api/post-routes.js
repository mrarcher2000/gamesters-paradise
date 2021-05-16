const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Like } = require('../../models');
const withAuth = require('../../utils/auth');

//gettin them users
router.get('/', (req, res) => {
    console.log('----------------');
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
            'like_count'
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id:req.params.id
        },
        attributes : [
            'id',
            'post_text',
            'title',
            'created_at',
            'like_count'
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
        if(!dbPostData) {
            res.status(404).json({ message: 'Aw schucks, this post doesn\'t exist!' });
            return;
        }
        const posts = dbPostData.get({plain: true});
        res.json(posts)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id,
        like_count: req.body.like_count
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

router.get('/like/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['like_count']
    }).then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'Nothing here' });
                return;
            }

            const likes =  dbPostData.get({plain: true});
            res.json(likes);
        })
})

router.put('/like/:id', withAuth, (req, res) => {
    Post.increment(
        { like_count: +1 },
        { where: {
            id: req.params.id
        }})
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({message: "That's not a post silly"});
                return;
            }

            res.json(dbPostData);
        })
        .catch(err => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            }
        })
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title:req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'Aw schucks, this post doesn\'t exist!' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'Aw schucks, this post doesn\'t exist!' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
