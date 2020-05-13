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

// Gabarito

const sizeObj1 = (lesson1) =>  Object.keys(lesson1).length;
console.log(sizeObj1(lesson1));

const sizeObj2 = (lesson2) =>  Object.keys(lesson2).length;
console.log(sizeObj2(lesson2));