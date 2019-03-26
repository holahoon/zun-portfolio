import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Section2 = props => {
  const { project, projectName, projectDescription } = props.state;
  const { selectProject } = props;
  const [inProp, setInProp] = useState(false);

  return (
    <section id="section-2" className="section">
      <h2 className="project-name">
        <Link
          to={`/${project}`}
          className="project-name-link"
          onClick={() => {
            window.scrollTo(0, document.getElementById("section-2").offsetTop);
          }}
        >
          {projectName}
        </Link>
      </h2>
      <h3 className="project-description">
        <Link
          to={`/${project}`}
          className="project-description-link"
          onClick={() => {
            window.scrollTo(0, document.getElementById("section-2").offsetTop);
            setInProp(true);
          }}
        >
          {projectDescription}
        </Link>
      </h3>

      <CSSTransition in={inProp} appear={true} timeout={2000} classNames="fade">
        <ul className="project-list">
          <li
            onClick={selectProject}
            data-name="project1"
            className="project-item selected-item"
          >
            IBM Power Systems for Google Cloud
          </li>
          <li
            onClick={selectProject}
            data-name="project2"
            className="project-item"
          >
            Machine Learning Model Scope
          </li>
          <li
            onClick={selectProject}
            data-name="project3"
            className="project-item"
          >
            Remnant Ministry
          </li>
          <li
            onClick={selectProject}
            data-name="project4"
            className="project-item"
          >
            OpenBMC
          </li>
        </ul>
      </CSSTransition>

      <span className="line" />
      <div className="small-words">Role : Product design</div>
      <Link
        to={project}
        id="project-link"
        className="small-link"
        onClick={() => {
          window.scrollTo(0, document.getElementById("section-2").offsetTop);
        }}
      >
        link to detail page
      </Link>
    </section>
  );
};

export default Section2;
