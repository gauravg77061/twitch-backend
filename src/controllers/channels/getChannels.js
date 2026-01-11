
const getChannels= (req,res)=>{
    try {
        return res.status(200).send("hello world")
    } catch (error) {
        console.error(error.message);
         res.status(400).send("something went wrong");
    }
}

module.exports=getChannels;