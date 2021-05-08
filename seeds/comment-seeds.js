const { Comment } = require('./models');

const commentdata = [
    {
        comment_text: '',
        user_id: '',
        post_id: ''
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;