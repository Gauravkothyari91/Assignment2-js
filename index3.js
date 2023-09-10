const students = [
    {name : "Mithun", marks : 95,},
    {name : "Rohit", marks : 91,},
    {name : "Amit", marks : 78,},
    {name : "Gaurav", marks : 99,},
    {name : "Sumit", marks : 67,},
];

const checkResults = (name) => {
    for (let student of students) {
      if (student.name === name) {
        return student.marks > 90
          ? console.log(
              `Congratulations ${student.name}! You have cleared the exam.`
            )
          : console.log(`Sorry ! You have not cleared the exam.`);
      }
    }
    console.log("Invalid User !!!");
  };
  
  checkResults("Mithun");
  // OUTPUT: Congratulations Mithun! You have cleared the exam.
  
  checkResults("Prabir");
  // OUTPUT: Sorry ! You have not cleared the exam.
  
  checkResults("Amit");
  // OUTPUT: Invalid User !!!