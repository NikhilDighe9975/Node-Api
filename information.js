const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());

const Course = [
    { id: 1,name: 'Gokul gudhage', fee: 100000, },
    { id: 2,name: 'shubham thitame', fee: 100000, },
    { id: 3, name: 'vaibhav sonawane', fee: 100000, },
    { id: 4, name: 'samir varpe', fee: 100000, },
    { id: 5, name: 'Swapnil gite', fee: 100000, },
    { id: 6, name: 'sahil sonawane', fee: 100000, },
    { id: 7, name: 'shubham kale', fee: 100000, },
    { id: 8,  name: 'sagar kasar', fee: 100000, },
    { id: 9, name: 'yogesh dhone', fee: 100000, },
    { id: 10, name: 'Nikhil dighe', fee: 100000, },
];

app.get('/Course', (req, res) => {
    res.send(Course);
});

app.get('/Course/:id', (req, res) => {
    const course=Course.find((e)=>e.id===Number(req.params.id));
    if (!course) {
        res.send("Record not found");
    } else {
       res.send(course);
    }
});

app.post('/Course', (req, res) => {
  
    const name=req.body.name;
    const fee=req.body.fee;

    if (!name || !fee) {
        res.send("Not Found")
    }

    const newCourse = {
        id: Course.length + 1,
        name: name,
        fee: fee,
    };
    Course.push(newCourse);
    res.send(newCourse);
});

app.listen(5000, () => {
    console.log("Server is running on port 4400");
});