const QuestionController = require('../controllers/question')
const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')
router.use(authentication)

router.get('/',QuestionController.read)
router.post('/',QuestionController.create)
router.patch('/:id',QuestionController.update)
router.delete('/:id',QuestionController.delete)

module.exports = router