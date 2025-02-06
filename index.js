const appHeader = "INFORME DE LA ESCUELA\n";

//Datos de los cursos
const courseName1 = "Gestión sostenible de recursos";
const courseName2 = "Marketing digital";
const courseName3 = "Desarrollo de videojuegos";

const courseLevel1 = "nivel básico";
const courseLevel2 = "nivel intermedio";
const courseLevel3 = "nivel avanzado";

const courseDuration1 = "12 horas";
const courseDuration2 = "40 horas";
const courseDuration3 = "80 horas";

const courseData1 =
  "  - " +
  courseName1 +
  " (" +
  courseLevel1 +
  ", " +
  courseDuration1 +
  ")" +
  "\n";
const courseData2 =
  "  - " +
  courseName2 +
  " (" +
  courseLevel2 +
  ", " +
  courseDuration2 +
  ")" +
  "\n";
const courseData3 =
  "  - " +
  courseName3 +
  " (" +
  courseLevel3 +
  ", " +
  courseDuration3 +
  ")" +
  "\n";

const coursesList =
  "\n  Cursos:" + "\n" + courseData1 + courseData2 + courseData3;

//Datos de los alumnos
const studentName1 = "María";
const studentName2 = "Cristian";

const studentLastName1 = "Areces";
const studentLastName2 = "Sánchez";

const studentAge1 = 24;
const studentAge2 = 32;

const studentData1 =
  "  - " +
  studentName1 +
  " " +
  studentLastName1 +
  ", " +
  studentAge1 +
  " años\n";
const studentData2 =
  "  - " +
  studentName2 +
  " " +
  studentLastName2 +
  ", " +
  studentAge2 +
  " años\n";

const studentsList = "\n  Alumnos:" + "\n" + studentData1 + studentData2;

//Calcular media de edad
const averageStudentsAges =
  "\n  Edad media de los alumnos: " + (studentAge1 + studentAge2) / 2 + " años";

console.log(appHeader + coursesList + studentsList + averageStudentsAges);
