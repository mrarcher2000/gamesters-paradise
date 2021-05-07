const { Post } = require('../models');

const postdata = [
    {
        title: '',
        post_url: '',
        user_id: ''
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
