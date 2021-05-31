import React from "react";
import "../stylesheets/App.scss";
import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          name="Pippi Calzaslargas"
          date="31 de mayo de 2021"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pippi_Langkous_in_Nederland_1_%28crop%29.jpg/245px-Pippi_Langkous_in_Nederland_1_%28crop%29.jpg"
          description="Vamos a jugar a mi casa que es todo un castillo. Vais a conocer mi pequeño mono Mister Nilsson. Sé que os va a gustar un caballo que vive conmigo, si queréis montar le debéis llamar pequeño Tío.
          Pipi Calzaslargas, Pipilota para los niños soy.Pipi Calzaslargas sí señor esa soy yo."
          likes="25"
          heart="fas fa-heart"
        />
      </div>
    );
  }
}

export default App;
