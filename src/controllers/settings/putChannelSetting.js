const User = require('../../models/user')

const Channel=require('../../models/channel');

const putChannelSettings= async(req,res)=>{
    try {

        const {_id}=req.user;

        const{title,description,userName,avatarUrl}=req.body;

        const userData = await User.findById(_id,{userName:1,channel:1})
        
        if(userData.userName !== userName ){
            await User.updateOne({_id},{userName});
        }

        const channelData= await Channel.findByIdAndUpdate(userData.channel,{
            title,
            description,
            avatarUrl,
            isActive:true,
        }
     ,{ new: true })

        return res.status(200).json({
            channelId:channelData._id,
            userName,
            title:channelData.title,
            description:channelData.description,
            avatarUrl:channelData.avatarUrl,
            isActive:channelData.isActive

        })

        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("something went wrong");
    }
}

module.exports=putChannelSettings;