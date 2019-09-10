var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var anis = require('../models/anis')

mongoose.connect('mongodb://127.0.0.1:27017/anilike')

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success');
})
mongoose.connection.on('error', function () {
  console.log('MongoDB connected error');
})
mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected');
})
router.get('/', function (req, res, next) {
  // let page = parseInt(req.param('page'))
  // let sort = parseInt(req.param('sort'))
  // let pageSize = parseInt(req.param('pageSize'))
  // let starNum = parseInt(req.param('starNum'))
  let page = parseInt(req.query.page)
  let pageSize = parseInt(req.query.pageSize)
  let sort = parseInt(req.query.sort)
  let starNum = parseInt(req.query.starNum)

  let skip = (page-1)*pageSize
  let params = starNum==0?{}:{star:starNum}
  let anisModel = anis.find(params).skip(skip).limit(pageSize)
  anisModel.sort({'star':sort})
  anisModel.exec(function (err, doc) {
    if (err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else {
      res.json({
        status:'0',
        msg:'success',
        result:{
          count: doc.length,
          list: doc
        }
      })
    }
  })
})
router.get('/watch', function (req, res, next) {
  res.json({
    status: '0',
    msg: 'success',
    result: ''
  })
})

module.exports = router
