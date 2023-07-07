function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    let nextMultiple = Math.ceil(grade / 5) * 5;
    if (nextMultiple - grade < 3) {
      return nextMultiple;
    }
    return grade;
  });
}

// console.log(gradingStudents([73, 67, 38, 33]));
