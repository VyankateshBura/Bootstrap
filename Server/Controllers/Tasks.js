const User = require('../Models/User')
const register = async(req,res)=>{
    try {
        const user = await User.create(req.body);
        console.log("User created");
        res.status(201).json({user})
    } catch (error) {
        console.log(`Error:${error}`);
        res.status(500).json({msg:error});
    }
}

// const login = async(req,res)=>{
//     const {Email,password} = req.body;
//     if(Email)
// }
module.exports = {
    register
}