

const getChannelSettings=async(req,res)=>{

    try {

        //console.log(req.user);
        const {_id}=req.user;
        
        res.status(200).send("hello");
        
    } catch (error) {
        return res.status(400).send("something wwent wrong",error.message);
    }

}
module.exports=getChannelSettings;