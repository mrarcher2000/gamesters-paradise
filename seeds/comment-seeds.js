const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This is literally just rickroll.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'Mine is better: https://www.youtube.com/watch?v=fC7oUOUEEi4',
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: 'Mine is better: https://www.youtube.com/watch?v=fC7oUOUEEi4',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'MEGA SCAM. DO NOT SEND ANYTHING TO THIS FOOL!',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'MEGA SCAM. DO NOT SEND ANYTHING TO THIS FOOL!',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'MEGA SCAM. DO NOT SEND ANYTHING TO THIS FOOL!',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'MEGA SCAM. DO NOT SEND ANYTHING TO THIS FOOL!',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'True. Also, I can hook you up with $10B GTA for only $420.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'No health. Only damage >:(',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'What\'s a Dark Soul? Does it have the AWP?',
        user_id: 2,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
