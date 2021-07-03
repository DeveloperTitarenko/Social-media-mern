const Post = require('../models/Post')
const User = require('../models/User')

const request = require('request')

const createPost = async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err)
  }

}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({$set: req.body})
      res.status(200).json("the post has been update")
    } else {
      res.status(403).json("you can update only your post")
    }
  } catch (err) {
    res.status(500).json(err)
  }

}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (req.body.userId === post.userId) {
      await Post.findByIdAndDelete(req.params.id)
      res.status(200).json('post deleted successfully')
    } else {
      res.status(403).json("you can delete only your post")
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({$push: {likes: req.body.userId}})
      res.status(200).json("The post has been liked")
    } else {
      await post.updateOne({$pull: {likes: req.body.userId}})
      res.status(200).json("The post has been disliked")
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
  res.status(500).json(err)
  }
}

const getTimelinePosts = async (req, res) => {
  try{
    const currentUser = await User.findById(req.body.userId)
    const userPosts = await Post.find({userId: currentUser._id})
    const friendPost = await Promise.all(
      currentUser.followings.map(friendId => {
       return Post.find({userId: friendId})
      })
    )
    res.json(userPosts.concat(...friendPost))
  }catch (err){
    res.status(500).json(err)
  }
}


const getHeaders = async (req, res) => {
  try{
    request.get(req.body.url ,async (err, response, body) => {
      res.status(200).json({response: response.headers, request: response.request})
    })
  }catch (err){
    console.log(err)
  }
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimelinePosts,
  getHeaders
}