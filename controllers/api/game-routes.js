const router = require('express').Router();
const { Comment, Game, Like, Post, Review, User } = require('../../models');

router.get('/', (req, res) => {
    Game.findAll({
        attributes: [
            'id',
            'game_name',
            'release_year',
            'platforms',
            'developer',
            'sales'
        ]
    })
        .then(dbGameData => {res.json(dbGameData)})
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/:query', (req, res) => {
    Game.findAll({
        where: {
            $or: [
                {game_name: req.params.query},
                {developer: req.params.query},
                {platforms: req.params.query},
                {release_year: req.params.query}
            ]
        },
        attributes: [
            'id',
            'game_name',
            'release_year',
            'platforms',
            'developer',
            'sales'
        ]
    })
    .then(dbGameData => {
        if (!dbGameData) {
            res.json({message: 'Sorry, there were no games found when we searched our database!'});
        }
        res.json(dbGameData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/', (req,res) => {
    Game.create({
        game_name: req.body.game_name,
        release_year: req.body.release_year,
        platforms: req.body.platforms,
        developer: req.body.developer,
        sales: req.body.sales
    })
        .then(dbGameData => {
            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put('/:id', (req, res) => {
    Game.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbGameData => {
            if (!dbGameData) {
                res.status(404).json({ message: 'No game found? Check your request and try again!' });
                return;
            }

            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Game.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbGameData => {
            if (!dbGameData) {
                res.status(404).json({ message: 'No Game Data found? Check your request and try again!' });
                return;
            }

            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;