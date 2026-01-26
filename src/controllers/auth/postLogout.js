const postLogout= async(req,res)=>{
    try {

        res.cookie("token",null,{
            expires:new Date(Date.now()),
        });
        res.status(200).send("Logout successfully");
    } catch (error) {
        res.status(500).send("something went wrong");
    }
}


module.exports=postLogout