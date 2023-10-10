const express = require('express');
const router = express.Router();

router.get('/course', (req, res) => {
   
    const courses = [
        { id: 1, name: 'Nikhil', fee: 35000 },
        { id: 2, name: 'om', fee: 36000 },
        { id: 3, name: 'sai', fee: 30000 }
    ];

    router.get('/add', (req, res) => {
        courses.push({ id: 19, name: 'sanchit', fee: 3000 });
        res.send({ message: 'Course added successfully', courses });
    });

    router.get('/find/:id', (req, res) => {
        const findId = Number(req.params.id);
        const foundCourse = courses.find(course => course.id === findId);
        
        if (foundCourse) {
            res.send({ message: 'Course found successfully', course: foundCourse });
        } else {
            res.status(404).send({ message: 'Course not found' });
        }
    });

     
    res.send({ message: 'List of all courses', courses });
});

module.exports = router;
