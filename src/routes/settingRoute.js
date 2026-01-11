const express=require('express');
const expressValidator=require('express-joi-validation');
const joi=require('joi');

const {getChannelSettings }= require('../controllers/controllers');
const userAuth = require('../middlewares/auth.js');

const settingsRouter = express.Router();

const validator=expressValidator.createValidator({});


settingsRouter.get('/channel',userAuth,getChannelSettings);

module.exports=settingsRouter;

