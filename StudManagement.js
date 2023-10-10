const express = require('express');

const app = express();

const Student = [
  { id: 1, name: 'Gokul gudhage', fee: 100000, CourseId: 'Baap@118' },
  { id: 2, name: 'shubham thitame', fee: 100000, CourseId: 'Baap@114' },
  { id: 3,  name: 'vaibhav sonawane', fee: 100000, CourseId: 'Baap@78' },
  { id: 4,  name: 'samir varpe', fee: 100000, CourseId: 'Baap@97' },
  { id: 5,  name: 'Swapnil gite', fee: 100000, CourseId: 'Baap@66' },
  { id: 6,  name: 'sahil sonawane', fee: 100000, CourseId: 'Baap@77' },
  { id: 7,  name: 'shubham kale', fee: 100000, CourseId: 'Baap@69' },
  { id: 8,   name: 'sagar kasar', fee: 100000, CourseId: 'Baap@8' },
  { id: 9,  name: 'yogesh dhone', fee: 100000, CourseId: 'Baap@80' },
  { id: 10,  name: 'Nikhil dighe', fee: 100000, CourseId: 'Baap@94' },
];

app.get('/student', (req, res) => {
  res.send(Student);
})

app.get('/student/:id', (req, res) => {
  
  const std = Student.find(e => e.CourseId === req.params.id)

  if (std) {
    res.send(std);
  } else {
    res.send("Record not found......")
  }
});



app.listen(4300, () => {
  console.log(`Server is running on port`);
});
