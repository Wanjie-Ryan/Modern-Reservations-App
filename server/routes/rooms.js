const express = require('express');
const router = express.Router()
const {createroom, updateroom, deleteroom, getallrooms, singleroom } = require('../controllers/rooms')
const {verifytoken, userverify, verifyadmin} = require('../utils/verifytoken')




router.route('/').get(getallrooms)

router.route('/:hotelid').post(verifyadmin, createroom)

router.route('/:id').get(singleroom).delete(verifyadmin ,deleteroom).put(verifyadmin ,updateroom)

module.exports = router