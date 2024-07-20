const UserDetails = require("../Models/UserDetailsModel");
const User = require("../Models/UserModel");

module.exports.addUserDetails = async(req,res) => {
    try{
        const userId = req.user._id;
        const {firstName, lastName, age, address, phoneNumber, profilePicture, updatedAt }=req.body;
        const existingUser = await UserDetails.findOne({userId});
        if(existingUser){
            return res.json({message:"Already added the details"});
        }
        if (!firstName || !lastName || !age || !address || !phoneNumber) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userDetails  = await UserDetails.create({userId,firstName,lastName,age,address,phoneNumber,profilePicture,updatedAt});
        res.status(201).json({message:"added successfully",success:true});
    }catch(error){
        res.status(500).json({message:"userDetails doesn't added",error});
    }
};

module.exports.getUserDetails = async (req,res) => {
    try{

        const userId = req.user._id;
        const userDetails = await UserDetails.findOne({userId:userId});
        if (!userDetails) {
            return res.status(404).json({ success: false, message: "User details not found" });
          }
        res.status(200).json({success:true,userDetails});
    } catch(err){
        res.status(500).json({success: false, message: "Server error", error: err.message});
    }
}

module.exports.updateUserDetails = async(req,res) => {
    try{
        const userId = req.user._id;
        const result = await UserDetails.updateOne(
            {userId:userId},
            {$set:req.body}
        );
        if(result.matchedCount === 0){
            res.status(404).json({message:"Document not found"});
        }
        res.status(200).json({success:true,message:"updated successfully"});
    }catch(err){
        res.status(500).json({success:false,message:"Server error",error:err.message});
    }
};

module.exports.deleteUserDetails = async(req,res) =>{
    try{
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({ success: false, message: "User not found" });
        }
        await UserDetails.deleteMany({userId:userId});
        res.status(200).json({ success: true, message: "User account deleted successfully" });
    }catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
      }
};