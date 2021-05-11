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
})