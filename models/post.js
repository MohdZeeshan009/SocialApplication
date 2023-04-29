
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    content:{
        type: String,
        required: true
    },
    user: {

        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    //Including the array of Ids of all comments in the post schema itself
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }]

},
{
    timestamps : true
});

const Post= new mongoose.model('Post', postSchema);

module.exports=Post;