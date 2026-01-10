const getChannelDetails =async(req,res)=>{
    try {

        res.status(200).json({
            id:1,
            title:'channel',
            description:'Hello',
            userName: 'Gaurav',
            isOnline:false,
            streamUrl:'http'
        })
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports=getChannelDetails;




