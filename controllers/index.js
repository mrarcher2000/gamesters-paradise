const router = require('express').Router();

//will add more routes as the files get added. please name them {name}-routes.js
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;