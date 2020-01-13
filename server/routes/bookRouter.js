'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookController')

router.get('/', controller.getBookTitles)
router.get('/:title', controller.getBook)
router.get('/search/:searchTitle', controller.getSearch)

module.exports = router
