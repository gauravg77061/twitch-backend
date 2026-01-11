const express=require('express');
const expressValidator=require('express-joi-validation');
const joi=require('joi');

const {getChannelDetails,getChannels }= require('../controllers/controllers');

const channelRouter = express.Router();

const channelDetailsSchema=joi.object({
    channelId:joi.string().required(),
});

const validator=expressValidator.createValidator({});

//console.log(typeof getChannelDetails, getChannelDetails);


channelRouter.get('/:channelId',validator.params(channelDetailsSchema),getChannelDetails);
channelRouter.get('',getChannels);
module.exports=channelRouter;


