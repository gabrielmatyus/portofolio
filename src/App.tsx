import { useState } from 'react'
import me from './assets/me.jpg'
import './App.css'
import { profileData, projectsData, resumeData } from './models/data'

function App() {
  const [profile, ] = useState(profileData)
  const [resume, ] = useState(resumeData)
  const [projects, ] = useState(projectsData)
  return (
      <div className="row">
        <section>
            <img src={me} alt="" />
            <div>
              <h3>{profile.name}</h3>
              <h2>{profile.title}</h2>
              <p>{profile.description}</p>
              <p>{profile.location}</p>
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
              <p><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
        </section>
        <section>
            <div>
              <h2>{resume.education[0].institution}</h2>
              <p>{resume.education[0].degree}</p>
            </div>
            {resume.experience.map((exp, index) => (
              <div key={index}>
                <h2>{exp.company}</h2>
                <p>{exp.role} - {exp.duration}</p>
              </div>
            ))}
            <div >
              <h2>Skills</h2>
              <ul className="row">
                {resume.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          <div className="spacer"></div>
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div className="content" key={index}>
              <div className="row"><h3>{project.name}</h3><p>{project.description}</p></div>
              <p>{project.architecture}</p>
              <div className="row"><h3>Features</h3></div>
              <ul className="row">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              <div className="spacer"></div>
            </div>
          ))}

        </section>
      </div>
  )
}

export default App
