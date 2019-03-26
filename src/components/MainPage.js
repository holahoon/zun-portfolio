import React, { Component } from "react";
import JunLogo from "../components/main_page_layouts/JunLogo";
import Section1 from "./main_page_layouts/Section1";
import Section2 from "./main_page_layouts/Section2";
import Section3 from "./main_page_layouts/Section3";
import Footer from "./main_page_layouts/Footer";

// <div className="jun-global" style={{ color: this.state.color }}>
//           JUN
//         </div>
class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      project: "project1",
      projectName: <span>IBM Power Systems for Google Cloud</span>,
      projectDescription: (
        <span>
          Building an intuitive and frictionless cloud server interface for
          infrastructure as a service platform
        </span>
      )
      // color: ""
    };
    // this.section3 = React.createRef();
  }

  // componentDidMount = () => {
  //   window.addEventListener("scroll", () => {
  //     const section3_height = this.refs.section3Height;
  //     console.log(section3_height);
  //   });
  // };

  // Project list selection
  selectProject = event => {
    const dataName = event.target.dataset.name;
    this.setState({ project: dataName });

    // Display the corresponding project on the project description
    if (dataName === "project1") {
      this.setState({
        projectName: <span>IBM Power Systems for Google Cloud</span>,
        projectDescription: (
          <span>
            Building an intuitive and frictionless cloud server interface for
            infrastructure as a service platform
          </span>
        )
      });
    } else if (dataName === "project2") {
      this.setState({
        projectName: <span>Machine Learning Model Scope</span>,
        projectDescription: (
          <span>
            Making an open source platform to help users in AI experimentation
            and evaluation without installing hardware infrastructures
          </span>
        )
      });
    } else if (dataName === "project3") {
      this.setState({
        projectName: <span>Remnant Ministry</span>,
        projectDescription: (
          <span>
            As trees get older they lose their chlorophyll. Work that paint. A
            fan brush is a fantastic piece of equipment.{" "}
          </span>
        )
      });
    } else {
      this.setState({
        projectName: <span>OpenBMC</span>,
        projectDescription: (
          <span>
            Designing a minimal Baseboard Management Controller interface with a
            streamlined experience for system administrators
          </span>
        )
      });
    }

    // Highlight the project that is selected
    document.querySelectorAll(".project-item").forEach(project => {
      project.classList.remove("selected-item");
      project.style.opacity = "0.15";
    });

    const { target } = event;

    if (target.nextElementSibling) {
      target.style.opacity = "1";
      target.style.paddingTop = "4vh";
      target.style.paddingBottom = "4vh";

      target.nextElementSibling.style.opacity = "0.6";
      target.nextElementSibling.style.paddingTop = "3vh";
      target.nextElementSibling.style.paddingBottom = "3vh";

      if (target.nextElementSibling.nextElementSibling) {
        target.nextElementSibling.nextElementSibling.style.opacity = "0.3";
        target.nextElementSibling.nextElementSibling.style.paddingTop = "2vh";
        target.nextElementSibling.nextElementSibling.style.paddingBottom =
          "2vh";
      }
    }
    if (target.previousElementSibling) {
      target.style.opacity = "1";
      target.style.paddingTop = "4vh";
      target.style.paddingBottom = "4vh";

      target.previousElementSibling.style.opacity = "0.6";
      target.previousElementSibling.style.paddingTop = "3vh";
      target.previousElementSibling.style.paddingBottom = "3vh";

      if (target.previousElementSibling.previousElementSibling) {
        target.previousElementSibling.previousElementSibling.style.opacity =
          "0.3";
        target.previousElementSibling.previousElementSibling.style.paddingTop =
          "2vh";
        target.previousElementSibling.previousElementSibling.style.paddingBottom =
          "2vh";
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <JunLogo logoColor={this.state.color} />
        <Section1 section1={this.section1} />
        <Section2 selectProject={this.selectProject} state={this.state} />
        <Section3 section3={this.section3} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;
