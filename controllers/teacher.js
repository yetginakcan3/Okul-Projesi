const { where } = require('sequelize');
const Grade= require('../models/grade')

const createOneGrade = async(req,res) =>{
    try {
        const { studentId,teacherId,value } = req.body; 
        const newGrade = await Grade.create({
            studentId,
            teacherId,
            value
        })
        return res.status(201).json(newGrade)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const bulkCreateGrade = async(req,res) =>{
    try {
        const newGrades = await Grade.bulkCreate(req.body);
        return res.status(201).json(newGrades)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const findGrade = async(req,res) =>{
    try {
        const studentId = req.params.studentId
        const Grades = await Grade.findAll({
            studentId:1
        })
        return res.json(Grades)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const updateGrade = async(req,res) =>{
    try {
        const {value} = req.body
        const changedGrade = await Grade.update({value:value},{
            where:{
                value:90
            }
        })
        return res.json({changedGrade})

    } catch (error) {
        return res.json({message:error.message})
    }
}

const delItemGrade = async(req,res) =>{
    try {
        const id = req.params.id
        await Grade.destroy({where:{
           studentId:1
        }})
        return res.json("basarıyla silinmistir")
    } catch (error) {
        return res.json({message:error.message})
    }
}

module.exports = {
    bulkCreateGrade,
    createOneGrade,
    findGrade,
    updateGrade,
    delItemGrade
}
