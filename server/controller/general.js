import User from "../models/User.js";

const getUser = async (req , res )=>{
    console.log("req is received ",req.params);
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    }catch(error)
    {
        res.status(403).json({message:error.message});
    }

}


export default getUser;