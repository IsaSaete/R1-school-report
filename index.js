const appHeader = " INFORME DE LA ESCUELA";

console.log(appHeader + " \n\n  Cursos:");

const courseNames = [
  "Gestión sostenible de recursos",
  "Marketing digital",
  "Desarrollo de videojuegos",
];

const courseLevels = ["nivel básico", "nivel intermedio", "nivel avanzado"];

const courseDurations = ["12 horas", "80 horas", "40 horas"];

for (let index = 0; index < courseNames.length; index++) {
  const courseName = courseNames[index];
  const courseLevel = courseLevels[index];
  const courseDuration = courseDurations[index];

  console.log(
    "  - " + courseName + " (" + courseLevel + ", " + courseDuration + ")"
  );
}

console.log("\n  Alumnos:");

const studentsNames = ["María", "Cristian"];
const studentsLastNames = ["Areces", "Sánchez"];
const studentsAges = [24, 31];

for (let index = 0; index < studentsNames.length; index++) {
  const student = studentsNames[index] + " " + studentsLastNames[index];
  const ages = studentsAges[index];

  console.log("  - " + student + ", " + ages + " años");
}

function getAverageAge() {
  let sum = 0;
  for (let i = 0; i < studentsAges.length; i++) {
    sum = sum + studentsAges[i];
  }
  return sum / studentsAges.length;
}

console.log("\n  Edad media de los alumnos: " + getAverageAge() + " años");
