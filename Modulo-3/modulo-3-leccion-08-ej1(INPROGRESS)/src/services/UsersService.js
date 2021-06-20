 const ENDPOINT ="https://randomuser.me/api/?results=50";

const fetchUsers = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        return {
          id: user.login.uuid,
          age: user.dob.age,
          username: user.login.username,
          city: user.location.city,
          country: user.location.country,
          name: user.name.first + " " + user.name.last,
          email: user.email,
          gender: user.gender,
          image: user.picture.large,
        };
      });
    });
};

export default fetchUsers;
