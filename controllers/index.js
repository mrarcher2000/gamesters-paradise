const router = require('express').Router();

//will add more routes as the files get added. please name them {name}-routes.js
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
