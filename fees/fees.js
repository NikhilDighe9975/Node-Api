const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");


router.use(bodyParse.json())

const StudentFees = [
  {
    id: 1,
    name: "Nikhil khule ",
    amount: 10000,
    date: "12/10/2023",
    mode: "online",
  },
  {
    id: 2,
    name: "Om Thitame ",
    amount: 20000,
    date: "13/09/2023",
    mode: "Cash",
  },
  {
    id: 3,
    name: "Vaibhav Dighe",
    amount: 30000,
    date: "14/09/2023",
    mode: "online",
  },
  {
    id: 4,
    name: "Swapnil Gite",
    amount: 40000,
    date: "15/09/2023",
    mode: "cash",
  },
  {
    id: 5,
    name: "Gokul Rahane",
    amount: 50000,
    date: "12/14/2023",
    mode: "cash",
  },
];

let TotalFee = 100000;

router.get("/fee", (req, resp) => {
  resp.send(StudentFees);
});

router.get("/:id",(req,res)=>{
  const student=Number(req.params.id)
  const found=StudentFees.find(el=>el.id===student)
  if(found){
  res.send({message:"found",StudentFees:StudentFees});
  }
  else{
    res.send({message:" not found",})
  }
})


router.get("/fee/:id", (req, resp) => {
  const student = StudentFees.find((el) => el.id === Number(req.params.id));

  if (student) {
    const totalFeePaid = StudentFees.filter(
      (el) => el.id === Number(req.params.id)
    ).reduce((acc, curr) => acc + curr.amount, 0);

    const balanceAmount = TotalFee - totalFeePaid;

    resp.send(
      `Total Amount paid by ${student.name} is  ${totalFeePaid},Remaining fee is ${balanceAmount}. From ${TotalFee}.`
    );
  } else {
    resp.send("Record not found.......");
  }
});

router.post("/fee/paid", (req, resp) => {
  const a = req.body.name;
  const b = req.body.amount;
  const c = req.body.date;
  const d = req.body.mode;

  if (!a || !b || !c || !d) {
    resp.send("Enter a total field");
  }

  const newOne = {
    id: StudentFees.length+ 1,
    name: a,
    amount: b,
    date: c,
    mode: d,
  };

  const push=StudentFees.push(newOne);

  resp.send(newOne);

});



module.exports = router;