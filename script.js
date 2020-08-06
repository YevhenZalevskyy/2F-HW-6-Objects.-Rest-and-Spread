students = [{ name: "Tanya", course: 3,
  subjects: { math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4] }
}, { name: "Victor", course: 4,
    subjects: { physics: [5, 5, 5, 3],
              economics: [2, 3, 3, 3, 3, 5],
              geometry: [5, 5, 2, 3, 5] }
}, { name: "Anton", course: 2,
  subjects: { statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
              english: [5, 3],
              cosmology: [5, 5, 5, 5] }
}];

// #1 getSubjects
getSubjects = students => {
  firstCharToUpper = element => {
    return element[0].toUpperCase() + element.slice(1);
  }
return Object.keys(students.subjects).map(subject => firstCharToUpper(subject.replace('_', ' ')));
}
console.log(students[0].name + ': ' + getSubjects(students[0]));

// #2 getAverageMark
function getAverageMark (students) {
arr = Object.values(students.subjects)
arr = [...arr[0], ...arr[1], ...arr[2]]
sum = 0
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return (sum / arr.length).toFixed(2);
}
console.log(getAverageMark(students[2]));

// #3 getStudentInfo
function getStudentInfo (students) {
  arrInfo = {}
  arrInfo.name = students.name
  arrInfo.course = students.course
  arrInfo['averageMark'] = getAverageMark(students)
  return arrInfo
}
console.log(getStudentInfo(students[1]));

// #4 getStudentsNames
getStudentsNames = students => {return students.map(element => element.name).sort()}
console.log(getStudentsNames(students));

// #5 getBestStudent
function getBestStudent (students) {
  bestMark = 0
  for (let i = 0; i < students.length; i++) {
    if (bestMark < getAverageMark(students[i])) {
      bestMark = getAverageMark(students[i])
      bestStudent = students[i].name
    }
  }
    return bestStudent
}
console.log(getBestStudent(students));

// #6 calculateWordLetters
function calculateWordLetters (str) {
  obj = {}
  for (i = 0; i < str.length; i++) {
    chart = str[i]
    count = obj[chart]
    obj[chart] = count ? count +1 : 1
  }
  return obj;
}
console.log(calculateWordLetters('text'));
