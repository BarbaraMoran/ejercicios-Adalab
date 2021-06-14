const ENDPOINT = "https://randomuser.me/api/?results=50";

const getApiData = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      //cada user es un objeto.
      const cleanData = data.results.map((user) => {
        //Retornamos un objeto
        return {
          name: `${user.name.first} ${user.name.last}`,
          id: user.login.uuid,
          age: user.dob.age,
          username: user.login.username,
          city: user.location.city,
          country: user.location.country,
          email: user.email,
          gender: user.gender,
          image: user.picture.large,
        };
      });

      return cleanData;
    });
};

export default getApiData;
