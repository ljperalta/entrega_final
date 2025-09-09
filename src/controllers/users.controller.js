const usersService = require("../services/index.js");

class UsersController {
    static getAllUsers = async(req,res)=>{
        try {
            const users = await usersService.getAll();
            res.send({status:"success",payload:users})
        } catch (error) {
            next(error);
        }
    }

    static getUser = async(req,res)=> {
        try {
            const userId = req.params.uid;
            const user = await usersService.getUserById(userId);
            if(!user) return res.status(404).send({status:"error",error:"User not found"})
            res.send({status:"success",payload:user})
        } catch (error) {
            next(error);
        }
    }

    static updateUser =async(req,res)=>{
        try {
            const updateBody = req.body;
            const userId = req.params.uid;
            const user = await usersService.getUserById(userId);
            if(!user) return res.status(404).send({status:"error", error:"User not found"})
            const result = await usersService.update(userId,updateBody);
            res.send({status:"success",message:"User updated"})
        } catch (error) {
            next(error);
        }
    }

    static deleteUser = async(req,res) =>{
        try {
            const userId = req.params.uid;
            const result = await usersService.getUserById(userId);
            res.send({status:"success",message:"User deleted"})
        } catch (error) {
            next(error);
        }
    }
}
module.exports = UsersController;