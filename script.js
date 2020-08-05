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
console.log(getAverageMark(students[0]));

// #3 getStudentInfo
function getStudentInfo (students) {
  arr = 
}

// const getSubjects = students => Object.keys(students.subjects).map(element => element[0].toUpperCase() + element.slice(1));
// console.log((getSubjects(students[0])).replace('_', ' '));

// function getSubjects (student) {
//   keys = Object.keys(students[0].subjects)


// function getSubjects(students) {
//   keys = Object.keys(students.subjects)
//   modifiedArr = []
//   keys.forEach((element, index) => {
//     modifiedArr[index] = element.charAt(0).toUpperCase() + element.slice(1)
//     modifiedArr[index] = modifiedArr[index].replace('_', ' ')
//   })
//     return modifiedArr;
// }
// console.log(getSubjects(students[0]));
// }
///////////////////////////////////////////
// let total = 0;
// function recurs(number) {
//   if (number > 0) {
//     recurs(number - 1);
//   }
//   total += number;
//   console.log(total);
//   console.log(number);
// }
// recurs(2);
//
// // console.log(total);
// // for (let n = 0; n < students.length; n++)
// // keys = [Object.keys(students[n].subjects)]
// // for (let i = 0; i < keys.length; i++)
// // {console.log(keys[i]);}
// // for (let n = 0; n < students.length; n++)
// // let keys = Object.keys(students[1].subjects);
// // console.log(keys);
// const arr1 = [1, 2, 3, 4, 5];
// let [per, vto, tre, ...ost] = [0, ...arr1];
// console.log(per);
// console.log(vto);
// console.log(tre);
// console.log(ost);
//
// const obj5 = {
//   a: 'a',
//   inner: {
//     innerA: 'inner2',
//   },
//   b: 'b',
// }
// for (let key in obj5) {
//   // console.log(obj5[key]);
//   console.log(key);
// }
//
//
//
// obj1 = {
//   a: 'f',
//   inner: {
//     innerA: 'inner1',
//   }
// }
//
// obj4 = {name: 'Ivan', course: 2}
// // let obj2 = {};
// obj2 = JSON.parse(JSON.stringify(obj1))
// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2);
// // obj2 = obj1;
//
// obj2.a = 'z',
// console.log(obj1);
// console.log(obj2);
// const obj3 = Object.assign({}, obj1, obj2.a)
// console.log(typeof obj3);
