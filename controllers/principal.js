const { where } = require('sequelize');
const Teacher = require('../models/teacher')
const Class = require('../models/class')
const Course = require('../models/course')
const Student = require('../models/student')


const createOneTeacher = async(req,res) =>{
    try {
        const { userName, password, email,principalId } = req.body; 
        const newTeacher = await Teacher.create({
            userName,
            password,
            email,
            principalId
        })
        return res.status(201).json(newTeacher)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const bulkCreateTeacher = async(req,res) =>{
    try {
        const newTeachers = await Teacher.bulkCreate(req.body);
        return res.status(201).json(newTeachers)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const findTeacher = async(req,res) =>{
    try {
        const id = req.params.id
        const Teachers = await Teacher.findAll({
            userName:"changed"
        })
        return res.json(Teachers)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const updateTeacher = async(req,res) =>{
    try {
        const {userName} = req.body
        const changedTeacher = await Teacher.update({userName:userName},{
            where:{
                userName:"changed"
            }
        })
        return res.json({changedTeacher})

    } catch (error) {
        return res.json({message:error.message})
    }
}

const delItemTeacher = async(req,res) =>{
    try {
        const id = req.params.id
        await Teacher.destroy({where:{
           userName : "changed"
        }})
        return res.json("basarıyla silinmistir")
    } catch (error) {
        return res.json({message:error.message})
    }
}


// Student

const createOneStudent = async(req,res) =>{
    try {
        const { userName, password, email,principalId } = req.body; 
        const newStudent = await Student.create({
            userName,
            password,
            email,
            principalId
        })
        return res.status(201).json(newStudent)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const bulkCreateStudent = async(req,res) =>{
    try {
        const newStudents = await Student.bulkCreate(req.body);
        return res.status(201).json(newStudents)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const findStudent = async(req,res) =>{
    try {
        const id = req.params.id
        const Students = await Student.findAll({
            userName:"changed"
        })
        return res.json(Students)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const updateStudent = async(req,res) =>{
    try {
        const {userName} = req.body
        const changedStudent = await Student.update({userName:userName},{
            where:{
                userName:"changed"
            }
        })
        return res.json({changedStudent})

    } catch (error) {
        return res.json({message:error.message})
    }
}

const delItemStudent = async(req,res) =>{
    try {
        const id = req.params.id
        await Student.destroy({where:{
           userName : "changed"
        }})
        return res.json("basarıyla silinmistir")
    } catch (error) {
        return res.json({message:error.message})
    }
}


// Class



const createOneClass = async(req,res) =>{
    try {
        const { userName,principalId } = req.body; 
        const newClass = await Class.create({
            userName,
            principalId
        })
        return res.status(201).json(newClass)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const bulkCreateClass = async(req,res) =>{
    try {
        const newClasses = await Class.bulkCreate(req.body);
        return res.status(201).json(newClasses)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const findClass = async(req,res) =>{
    try {
        const id = req.params.id
        const Classes = await Class.findAll({
            userName:"changed"
        })
        return res.json(Classes)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const updateClass = async(req,res) =>{
    try {
        const {userName} = req.body
        const changedClass = await Class.update({userName:userName},{
            where:{
                userName:"changed"
            }
        })
        return res.json({changedClass})

    } catch (error) {
        return res.json({message:error.message})
    }
}

const delItemClass = async(req,res) =>{
    try {
        const id = req.params.id
        await Class.destroy({where:{
           userName : "changed"
        }})
        return res.json("basarıyla silinmistir")
    } catch (error) {
        return res.json({message:error.message})
    }
}


// Course


const createOneCourse = async(req,res) =>{
    try {
        const { userName, principalId } = req.body; 
        const newCourse = await Course.create({
            userName,
            principalId
        })
        return res.status(201).json(newCourse)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const bulkCreateCourse = async(req,res) =>{
    try {
        const newCourses = await Course.bulkCreate(req.body);
        return res.status(201).json(newCourses)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const findCourse = async(req,res) =>{
    try {
        const id = req.params.id
        const Courses = await Course.findAll({
            userName:"changed"
        })
        return res.json(Courses)
    } catch (error) {
        return res.json({message:error.message})
    }
}

const updateCourse = async(req,res) =>{
    try {
        const {userName} = req.body
        const changedCourse = await Course.update({userName:userName},{
            where:{
                userName:"yetginakcan"
            }
        })
        return res.json({changedCourse})

    } catch (error) {
        return res.json({message:error.message})
    }
}

const delItemCourse = async(req,res) =>{
    try {
        const id = req.params.id
        await Course.destroy({where:{
           userName : "changed"
        }})
        return res.json("basarıyla silinmistir")
    } catch (error) {
        return res.json({message:error.message})
    }
}


module.exports = {
    bulkCreateTeacher,
    createOneTeacher,
    findTeacher,
    updateTeacher,
    delItemTeacher,

    bulkCreateStudent,
    createOneStudent,
    findStudent,
    updateStudent,
    delItemStudent,

    bulkCreateClass,
    createOneClass,
    findClass,
    updateClass,
    delItemClass,

    bulkCreateCourse,
    createOneCourse,
    findCourse,
    updateCourse,
    delItemCourse
}