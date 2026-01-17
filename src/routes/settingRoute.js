const express=require('express');
const expressValidator=require('express-joi-validation');
const joi=require('joi');

const {getChannelSettings ,putChannelSettings}= require('../controllers/controllers');
const userAuth = require('../middlewares/auth.js');

const settingsRouter = express.Router();

const validator=expressValidator.createValidator({});

const channelSettingSchema = joi.object({
    userName:joi.string().min(1).max(12),
    description:joi.string().min(1).max(100),
    title:joi.string().min(3).max(30),
    avatarUrl:joi.string().uri(),
})

settingsRouter.get('/channel',userAuth,getChannelSettings);

settingsRouter.put('/channel',validator.body(channelSettingSchema),userAuth,putChannelSettings);

module.exports=settingsRouter;

