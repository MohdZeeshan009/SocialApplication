
const post = require('../models/post');
module.exports.home = function (req, res) {

    // post.find({}, function(err, posts){
    //     if(err){
    //         console.log('Error in showing post'); return};

    //         return res.render('home', {
    //             title: 'Codeial | Home',
    //             posts: posts
    //         })
    // })


    // Populate data 
    post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate:{
                path: 'user',
            },
        })
        .exec(function (err, posts) {
            if (err) {
                console.log('Error in showing user post');
            }

            return res.render('home', {
                title: 'Home | Codieal',
                posts: posts,
            });
        });


}
// module.exports.actionName = function(req, res){}