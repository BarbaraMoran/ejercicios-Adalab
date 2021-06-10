//llamada al api
//const objeto = {}

const getDataFromAPI = () => {
  return fetch("https://api.tvmaze.com/search/shows?q=friends")
    .then((response) => response.json())
    .then((data) => {
      //Limpiar data
      /*objeto.id = data.id;
        objeto.idioma = data.language*/
      return data;
    });
};

export default getDataFromAPI;
