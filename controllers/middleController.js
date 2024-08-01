// controllers/yourController.js

exports.principalDashboard = (req, res) => {
    res.render('principal/dashboard', {
        title: 'Principal Dashboard',
        userRole: req.userRole
    });
};

exports.teacherDashboard = (req, res) => {
    res.render('teacher/dashboard', {
        title: 'Teacher Dashboard',
        userRole: req.userRole
    });
};

exports.studentDashboard = (req, res) => {
    res.render('student/dashboard', {
        title: 'Student Dashboard',
        userRole: req.userRole
    });
};
