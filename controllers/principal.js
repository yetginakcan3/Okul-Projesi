const Principal = require('../models/principal')
const createOne = async(req,res) =>{
    try {
        const { userName, password, email } = req.body; 
        const newPrincipal = await Principal.create({
            userName,
            password,
            email
        })
        return res.status(201).json(newPrincipal)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const bulkCreate = async(req,res) =>{
    try {
        
    } catch (error) {
        return res.json({message:error.message})
    }
}

const find = async(req,res) =>{
    try {
        
    } catch (error) {
        return res.json({message:error.message})
    }
}

const update = async(req,res) =>{
    try {
        
    } catch (error) {
        return res.json({message:error.message})
    }
}

const delItem = async(req,res) =>{
    try {
        
    } catch (error) {
        return res.json({message:error.message})
    }
}

module.exports = {
    bulkCreate,
    createOne,
    find,
    update,
    delItem
}