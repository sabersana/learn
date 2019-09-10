var express = require('express');
var router = express.Router();

var User = require('./../models/user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', (req, res, next) => {
  let param = {
    name: req.body.userName,
    pwd: req.body.userPwd
  }
  User.findOne(param, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (doc) {
        res.cookie('userName', doc.name, {
          path: '/',
          maxAge: 600000
        })
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.name
          }
        })
      } else {
        res.json({
          status: '1',
          msg: 'error'
        })
      }
    }
  })
})
router.post('/loginout', (req, res, next) => {
  res.cookie('userName', "", {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: 'success',
    result: ''
  })
})
router.get('/islogin', function (req, res, next) {
  res.json({
    status: '0',
    msg: '',
    result: req.cookies.userName || ''
  })
})
module.exports = router;
