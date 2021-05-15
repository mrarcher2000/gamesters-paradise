const { Post } = require('../models');

const postdata = [
    {
        title: 'GTA V',
        post_text: 'Is one of the games ever.',
        user_id: 1
    },
    {
        title: 'Epic Headshot montage',
        post_text: 'Check out my epic headshot montage guyzzzz: https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        user_id: 2
    },
    {
        title: 'Dark Souls 3 sl 125 PvP build',
        post_text: 'Just git gud and you will make a good build. Don\'t forget to get health!!!',
        user_id: 5
    },
    {
        title: 'How to get infinite Robox 100% not a scam',
        post_text: 'Just send me your credit card number, the date, and the 3 funny numbers on the back (please don\'t actually do this)',
        user_id: 4
    },
    {
        title: 'Just bought the 6 star ultra car',
        post_text: 'And it only cost me $620 to get the level! #gatchas are bad',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
