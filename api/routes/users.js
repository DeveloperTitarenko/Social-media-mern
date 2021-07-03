const router = require('express').Router()
const user = require('../controllers/usersControllers')

router.put('/:id', user.updateUser)
router.delete('/:id', user.deleteUser)
router.get('/:id', user.getUser)
router.put('/:id/follow', user.followUser)
router.put('/:id/unfollow', user.unFollowUser)


module.exports = router