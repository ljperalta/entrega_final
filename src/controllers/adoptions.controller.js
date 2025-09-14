const { adoptionsService, petsService, usersService } = require("../services/index.js");
const errorHandler = require('../utils/errorHandler');

const getAllAdoptions = async(req,res,next)=>{
    try {
        console.log("Llamando a getAllAdoptions");
        const result = await adoptionsService.getAll();
        //const result = [{ _id: "123", pet: "firulais" }];
        res.send({status:"success",payload:result});
    } catch (error) {
        next(error);
    }
}

const getAdoption = async(req,res)=>{
    try {
        const adoptionId = req.params.aid;
        console.log("Llamando a getAdoption con ID:", adoptionId);
        const adoption = await adoptionsService.getBy({_id:adoptionId})
        if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"})
        res.send({status:"success",payload:adoption})
    } catch (error) {
        errorHandler(error);
    }
}

const createAdoption = async(req,res)=>{
    try {
        //console.log(req.params);
        const {uid,pid} = req.params;
        const user = await usersService.getBy({_id:uid});
        //console.log("User encontrado:", user);
        if(!user) return res.status(405).send({status:"error", error:"user Not found"});
        const pet = await petsService.getBy({_id:pid});
        if(!pet) return res.status(403).send({status:"error",error:"Pet not found"});
        if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});
        user.pets.push(pet._id);
        await usersService.update(user._id,{pets:user.pets})
        await petsService.update(pet._id,{adopted:true,owner:user._id})
        await adoptionsService.create({owner:user._id,pet:pet._id})
        res.send({status:"success",message:"Pet adopted"})
    } catch (error) {
        errorHandler(error);
    }
}

module.exports = {
    createAdoption,
    getAllAdoptions,
    getAdoption
}