const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const listLesson = (lesson) => {
//   const arrOfLesson = Object.keys(lesson);
//   for (i in arrOfLesson) {
//     console.log(`${arrOfLesson[i]} -> ${lesson[arrOfLesson[i]]}`);
//   }
// };

// console.log('lesson 1');
// listLesson(lesson1);

// console.log('lesson 2');
// listLesson(lesson2);

// console.log('lesson 3');
// listLesson(lesson3);

// Gabarito
const listKeys = (lesson1) =>  Object.keys(lesson1);
console.log(listKeys(lesson1));



