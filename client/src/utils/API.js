import axios from "axios";

export default {
    signup: function (newCredentials) {
        return axios.post("/api/signup", newCredentials)
      },
    login: function(credentials) {
      return axios.post("/api/login", credentials)
    }
}