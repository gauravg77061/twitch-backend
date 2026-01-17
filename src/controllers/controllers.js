const postLogin = require('./auth/postLogin');
const postRegister =require('./auth/postRegister');
const getChannelDetails=require('./channels/getChannelDetails')
const getChannels=require('./channels/getChannels')
const getChannelSettings=require('./settings/getChannelSettng')
const putChannelSettings=require('./settings/putChannelSetting')
const patchUpdatePassword=require('./settings/patchUpdatePassword')

module.exports={postLogin,postRegister,getChannelDetails,getChannels,getChannelSettings,
    putChannelSettings,patchUpdatePassword
};