var express = require('express')

var router = express.Router()

// req: request
// res: response
router.get('/hello', function (req, res) {
    res.json('hello world') // Convert server response to json
})

module.exports = router
