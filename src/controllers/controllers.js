const postLogin = require('./auth/postLogin');
const postRegister =require('./auth/postRegister');
const getChannelDetails=require('./channels/getChannelDetails')
const getChannels=require('./channels/getChannels')
const getChannelSettings=require('./settings/getChannelSettng')

module.exports={postLogin,postRegister,getChannelDetails,getChannels,getChannelSettings};