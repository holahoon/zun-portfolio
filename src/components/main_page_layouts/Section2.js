import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class Section2 extends Component {
  // const { project, projectName, projectDescription } = props.state;
  // const { selectProject } = props;
  // const [inProp, setInProp] = useState(false);
  constructor() {
    super();
    this.state = {
      inProp: false
    };
  }

  setInProp = () => {
    this.setState({ inProp: true });
  };

  adjustPage = () => {
    window.scrollTo(0, document.getElementById("section-2").offsetTop);
  };

  delay = e => {
    e.preventDefault();
    setTimeout(() => {
      this.props.history.push(`/${this.props.state.project}`);
    }, 2000);
  };

  render() {
    return (
      <section id="section-2" className="section">
        <h2 className="project-name">
          <Link
            to={`${this.props.state.project}`}
            className="project-name-link"
            onClick={() => {
              this.adjustPage();
            }}
          >
            {this.props.state.projectName}
          </Link>
        </h2>
        <h3 className="project-description">
          <Link
            to={`/${this.props.state.project}`}
            className="project-description-link"
            onClick={this.adjustPage}
          >
            {this.props.state.projectDescription}
          </Link>
        </h3>

        <CSSTransition
          in={this.state.inProp}
          timeout={{ enter: 2000 }}
          classNames="list"
        >
          <ul className="project-list">
            <li
              onClick={this.props.selectProject}
              data-name="project1"
              className="project-item selected-item"
            >
              IBM Power Systems for Google Cloud
            </li>
            <li
              onClick={this.props.selectProject}
              data-name="project2"
              className="project-item"
            >
              Machine Learning Model Scope
            </li>
            <li
              onClick={this.props.selectProject}
              data-name="project3"
              className="project-item"
            >
              Remnant Ministry
            </li>
            <li
              onClick={this.props.selectProject}
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
          to={this.props.state.project}
          id="project-link"
          className="small-link"
          onClick={this.adjustPage}
        >
          link to detail page
        </Link>
      </section>
    );
  }
}

export default Section2;
