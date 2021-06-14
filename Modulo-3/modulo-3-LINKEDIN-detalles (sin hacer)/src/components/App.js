import React, {useState, useEffect} from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserDetail from "./UserDetail";
import UserList from "./UsersList";
import getApiData from "../services/api";
import ls from "../services/local-storage"


const App = () => {
    const [users, setUsers] = useState(ls.get("users", []));
    const [filterText, setFilter] = useState(ls.get("filterText", []));
    useEffect(() => {
        if (users.length === 0) {
        //Ejecutar cosas en el montaje
            getApiData(). then(usersData => {
            console.log(usersData);
            setUsers(usersData);
            })
        }
    }, [] //parámetro que nos indica cuando se debe ejectir el useEffect 
    );

useEffect(() => {
console.log("Guardando en el LS", users);
ls.set("users", users);
}, [users]); //Necesito que el LS se actualice cada vez que se actualiza USERS



    return (
<> <h1></h1>
    );

};

export default App;
