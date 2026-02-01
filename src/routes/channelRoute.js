const express=require('express');
const expressValidator=require('express-joi-validation');
const joi=require('joi');

const {getChannelDetails,getChannels,postFollowChannel ,getFollowedChannel}= require('../controllers/controllers');
const userAuth = require('../middlewares/auth');

const channelRouter = express.Router();

const channelDetailsSchema=joi.object({
    channelId:joi.string().required(),
});

const validator=expressValidator.createValidator({});

//console.log(typeof getChannelDetails, getChannelDetails);



channelRouter.get('',getChannels);
channelRouter.post('/follow/:channelId',userAuth,postFollowChannel);
channelRouter.get('/followedChannel',userAuth,getFollowedChannel);
channelRouter.get('/:channelId',validator.params(channelDetailsSchema),getChannelDetails);
module.exports=channelRouter;


