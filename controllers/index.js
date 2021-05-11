const router = require('express').Router();

//will add more routes as the files get added. please name them {name}-routes.js
const commentRoutes = require('./comment-routes.js');
const gameRoutes = require('./game-routes.js');
const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/comments', commentRoutes);
router.use('/games', gameRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;
