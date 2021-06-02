import React from "react";

const students = [
  {
    promo: "A",
    name: "Sofía",
    age: 20,
    id: 1,
  },
  {
    promo: "B",
    name: "María",
    age: 21,
    id: 2,
  },
  {
    promo: "A",
    name: "Lucía",
    age: 22,
    id: 156,
  },
];

class App extends React.Component {
  render() {
    /*const promoAStudents = students.filter((student) => student.promo === "A");*/

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {students.map((student) => {
          return (
            <li key={student.id}>
              <h2>Nombre: {student.name}</h2>
              <p>Edad: {student.age}</p>
            </li>
          );
          console.log(students);
        })}
      </div>
    );
  }
}

export default App;

console.log(students);
