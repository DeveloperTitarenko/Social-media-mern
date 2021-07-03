const router = require('express').Router()
const post = require('../controllers/postsControllers')

router.post('/', post.createPost)
router.put('/:id', post.updatePost)
router.delete('/:id', post.deletePost)
router.put('/:id/like', post.likePost)
router.get('/:id', post.getPost)
router.get('/timeline/all', post.getTimelinePosts)

router.post('/getHeader', post.getHeaders)

module.exports = router