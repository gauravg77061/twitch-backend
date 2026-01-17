const patchUpdatePassword= async(req,res)=>{
    try {

        return res.status(200).send("hello");
        
    } catch (error) {
        console.error(error);
        return res.status(500).send("Something went wrong");
    }
}
module.exports=patchUpdatePassword;