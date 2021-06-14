import React, { useState, useEffect } from "react";
// components
import UserList from "./UserList";
import Filters from "./Filters";
// services
import getApiData from "../services/api";
import ls from "../services/local-storage";
import { render } from "@testing-library/react";

const App = () => {
  // state

  const [users, setUsers] = useState(ls.get("users", []));
  const [filterText, setFilterText] = useState(ls.get("filterText", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  // const [filterCity, setFilterCity] = useState(ls.get('filterCity', ''));

  // effects

  useEffect(() => {
    if (users.length === 0) {
      getApiData().then((usersData) => {
        setUsers(usersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("users", users);
  }, [users]);

  // event handlers
  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "name") {
      setFilterText(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    }
  };

  // render
  const renderUsersList = () => {
    return (
      users
        .filter((user) => {
          return user.name.toLowerCase().includes(filterText.toLowerCase());
        })

        //ASÍ FUNCIONA EL FILTRO DE GÉNERO PERO NO PINTA A TODOS AL CARGAR 
        /*.filter((user) => {
        return user.gender.toLowerCase() === filterGender.toLowerCase();
      }*/
//ASI SOLO FUNCIONA UNO DE LOS FILTROS DE GÉNERO (FEMALE INCLUYE MALE)
        .filter((user) => {
          return user.gender.toLowerCase().includes(filterGender.toLowerCase());
        })
    );
  };

  console.log("State filterText:", filterText);
  console.log("State filterGender:", filterGender);

  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filters handleFilter={handleFilter} />
        <UserList users={renderUsersList()} />
      </div>
    </>
  );
};

export default App;
