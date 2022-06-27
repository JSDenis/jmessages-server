const Router = require('express')
const router = new Router
const MessageController  = require('../controller/post.controller')

router.post('/post', MessageController.createMessage)
router.get('/post', MessageController.getMessagesByUser)


module.exports = router

