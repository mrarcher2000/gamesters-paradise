const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');
const Game = require('./Game');
const Review = require('./Review');

// Associations between Models

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id'
});

Like.belongsTo(User, {
    foreignKey: 'user_id'
});

Like.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Like, {
    foreignKey: 'user_id'
});

Post.hasMany(Like, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Game.hasMany(Review, {
    foreignKey: 'game_id'
});

Review.belongsTo(Game, {
    foreignKey: 'game_id'
});

User.belongsToMany(Game, {
    through: Review,
    as: 'reviewed_games',
    foreignKey: 'user_id'
});

Game.belongsToMany(User, {
    through: Review,
    as: 'reviewed_games',
    foreignKey: 'game_id'
});

Review.belongsTo(User, {
    foreingKey: 'user_id'
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});







module.exports = {Comment, Game, Like, Post, Review, User};