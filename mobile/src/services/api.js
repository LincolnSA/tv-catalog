import axios from "axios";

// backend server running: http://localhost:3333
// expo url: 192.168.100.23
//

const api = axios.create({
  baseURL: "http://192.168.37.16:3333",
});

export default api;
