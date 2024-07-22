const { where } = require('sequelize');
const Grade = require('../models/grade');

const findGrade = async (req, res) => {
    try {
        const studentId = req.params.studentId
        const Grades = await Grade.findByPk(9)
        return res.json(Grades)
    } catch (error) {
        return res.json({message:error.message})
    }
};

module.exports = {
  findGrade,
};
