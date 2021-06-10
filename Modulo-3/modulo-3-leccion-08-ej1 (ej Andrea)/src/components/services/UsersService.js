const ENDPOINT = "https://randomuser.me/api/?results=50";

const fetchUsers = () => {
  return fetch(ENDPOINT).then((response) => response.json()); // Devuelve la Promise que genera el fetch
};

export { fetchUsers };
