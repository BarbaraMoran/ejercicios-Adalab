import React from "react";
import MediaCard from "./MediaCard";

class MediaList extends React.Component {
  render() {
    return (
      <section className="cards">
        <h1 className="title">Tarjetas</h1>
        <ul className="list">
          <li>
            <MediaCard
              name="Pippi Calzaslargas"
              date="31 de mayo de 2021"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pippi_Langkous_in_Nederland_1_%28crop%29.jpg/245px-Pippi_Langkous_in_Nederland_1_%28crop%29.jpg"
              description="Pipi Calzaslargas, Pipilota para los niños soy!!! Pipi Calzaslargas, ¡¡sí señor esa soy yo!!"
              likes="25"
              heart="fas fa-heart"
            />
          </li>
          <li>
            <MediaCard
              name="Bojack Horseman"
              date="1 de junio de 2021"
              img="https://i.guim.co.uk/img/media/352d9ae443605b5f42a41ac0a994fbb8cfdb543f/149_0_3600_2160/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a630d775e0569289250776efe0c2ab56"
              description="BoJack es un caballo que alcanzó la fama en los años noventa con la telecomedia Horsin' Around, el único éxito de su carrera. 
            "
              likes="24"
              heart="fas fa-heart"
            />
          </li>
          <li>
            <MediaCard
              name="Tony Soprano"
              date="5 de mayo de 2021"
              img="https://m.media-amazon.com/images/I/9136Rv8nxiL._SS500_.jpg"
              description="Tony Soprano es un mafioso, jefe del crimen organizado de Nueva Jersey, que, como rasgo peculiar, concurre a una psiquiatra para tratar sus ataques de pánico."
              likes="26"
              heart="fas fa-heart"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
