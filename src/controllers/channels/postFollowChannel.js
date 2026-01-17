
const postFollowChannel=async(req,res)=>{
    try {
       return res.status(200).send("hello");
    } catch (error) {
        console.error(error.message);
        return res.status(500).send(error.message);
    }
}
module.exports=postFollowChannel;