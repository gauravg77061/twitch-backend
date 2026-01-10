
const Channel= require('../../models/channel')

const User=require('../../models/user');

const getChannelDetails =async(req,res)=>{
    try {


        const {channelId}=req.params;

        const channel=await Channel.findById(channelId);

        if(!channel){
            return res.status(400).send('Channelnot found');
        }

        const user=await User.findOne({channel:channelId},{userName:1});

        const streamUrl="http";

        const isOnline=false;

        res.status(200).json({
            id:channel._id,
            title:channel.title,
            description:channel.description,
            userName: user.userName,
            isOnline,
            streamUrl
        })
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports=getChannelDetails;




