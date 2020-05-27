import axios from "axios";

export default {
  signup: function (newCredentials) {
    return axios.post("/api/signup", newCredentials)
  },
  login: function (credentials) {
    return axios.post("/api/login", credentials)
  },
  getUser: function() {
   return axios.get("/api/user_data")
  },
  logout: function() {
    return axios.get('/logout')
  },
  addProject: function (newProject) {
    return axios.post("/api/projects", newProject)
  },
  getProjects: function () {
    return axios.get("/api/projects")
  },
  getTasks: function (projectId) {
    return axios.get("/api/projects/" + projectId);
  },
  addTask: function ( projectId, newTask) {
    return axios.post("/api/projects/" + projectId, newTask)
  }
}