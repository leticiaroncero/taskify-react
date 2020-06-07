import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import API from "../utils/API";
import ProjectCard from "../components/ProjectCard"
class Projects extends Component {

  state = {
    projects: []
  }

  componentDidMount = () => {
    this.handleProjects(this.state.projects);
  }

  handleProjects = id => {
    console.log("handleProjects")
    API.getProjects()
      .then(res => {
        this.setState({ projects: res.data })
      })
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    console.log("projectid", id);
    
     API.deleteProjects(id)
        .then(result => {
      this.handleProjects();
    })
    .catch(err => console.log(err));

}

  render() {
    return (
      <div>
        <Button href="/projects/add">Create New Project</Button>

        <div className="row">
          {this.state.projects.map(project => {
            return (
              <ProjectCard
                key={project.id}
                project_id={project.id}
                id={project.UserId}
                title={project.title}
                description={project.description}
                handleDelete={this.handleDelete}
              />)
          })}
        </div>
      </div>
    )
  }

}

export default Projects;