const router = require('express').Router();

//will add more routes as the files get added. please name them {name}-routes.js
const userRoutes = require('./api/user-routes.js');
const postRoutes = require('./api/post-routes.js');


router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
