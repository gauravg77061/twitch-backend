const User=require('../../models/user')
const getFollowedChannel=async(req,res) =>{
    try {

        const{_id}=req.user;

        const {followedChannels}= await User.findById(_id,{followedChannels:1});

        // console.log(user);

        return res.status(200).json({
            followedChannels,
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).send(error.message,"something went wrong");
    }
}

module.exports=getFollowedChannel;