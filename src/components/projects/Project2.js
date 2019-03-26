import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResponsiveCarousel from "./ResponsiveCarousel";
import JunLogo from "../main_page_layouts/JunLogo";

import sample2 from "../../img/sample2.jpg";

class Project2 extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1
    };
  }

  // Scroll to the very top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  mouseEnter = () => {
    this.setState({ opacity: 1 });
  };

  mouseLeave = () => {
    this.setState({ opacity: 0.5 });
  };

  render() {
    return (
      <React.Fragment>
        <JunLogo />
        <section
          id="project2-intro-section"
          className="project-section section"
        >
          <h2 className="project-name">Machine Learning Model Scope</h2>
          <h3 className="project-description">
            Making an open source platform to help users in AI experimentation
            and evaluation without installing hardware infrastructures
          </h3>
          <div className="line" />

          <div className="small-words">Role : Product design</div>
          <Link to="" className="small-link">
            Link page
          </Link>
        </section>

        <section id="synopsis-section">
          <h3>Synopsis</h3>
          <p>
            MLModelScope project started with a partnership of IBM PowerAI team
            and University of Illinois Urbana-Champaign Center for Cognitive
            Computing Systems Research(
            <a
              href="https://www.c3sr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              C3SR
            </a>
            ) team.
            <br />
            <br />
            The objective of this project was to design a platform to aid users
            in model experimentation, deployment, and evaluation across hardware
            infrastures with the benchmark data from C3SR team.
          </p>
        </section>

        <section id="discovering-problems-section">
          <h3>Discovering problems</h3>
          <p>
            Artificial Intelligent, Machine Learning, and Deep Learning
            certainly are not new domains. They have been around for many
            decades, and they are getting more popular and palpable to many
            developers and engineers everyday. But the problem is even if you’re
            a visionary AI researcher who leads and reaps the benefits of AI,
            yet there are so many unknowns in the field. And it is very
            difficult to keep up with all the methodologies in the volatile
            industry.
            <br />
            <br />
            We kicked off a design thinking workshop in order to discover
            opportunities to improve and enhance the workflow in the ML/DL area.
            The workshop participants were including data engineers, subject
            matter experts(SME), and data scientists from IBM Research. From the
            workshop, the team gained a deep understanding of the workflow going
            into ML/DL and all the responsible people around their tasks. With
            the outcome, the team was able to set an informed direction for the
            project.
          </p>

          <div className="img-container">
            <img
              src="https://picsum.photos/350/480"
              alt=""
              style={{ opacity: this.state.opacity }}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            />
            <img src="https://picsum.photos/350/480" alt="" />
            <img src="https://picsum.photos/350/480" alt="" />
          </div>
        </section>

        <section id="research-section">
          <h3>Research</h3>
          <p>
            ML/DL are highly iterative process. Data scientists build models,
            and they run them with datasets and frameworks on GPU powered
            systems until there is a better result. And as we talked to the
            domain experts and the internal/external data scientists, the pain
            points became more apparent that we wanted to help them in
            discovering better ML/DL formulation of models, framework, and
            systems. It also aligned with the business goal that we can provide
            an opportunity to prove that IBM Power9 runs AI algorithm more
            effectively and efficiently against competitors.
            <br />
            <br />
            With the lead from the design researcher, we used the research
            sessions to discover pain points, validate our assumptions and
            hills, and receive feedback on our initial wireframe.
          </p>
          <div className="research-list">
            <div>
              <h5>16 hours</h5>
              <p>Discovery research with internal sales team</p>
            </div>
            <div>
              <h5>00 hours</h5>
              <p>Additional discovery interviews with customers</p>
            </div>
            <div>
              <h5>00 hours</h5>
              <p>Generative research with SMEs</p>
            </div>
            <div>
              <h5>00 hours</h5>
              <p>Evaluative research with Data Scientists</p>
            </div>
          </div>
        </section>

        <section id="early-exploration-section2">
          <h3>Early exploration</h3>
          <p>
            The design process was quick and iterative. From hand sketches to
            full-fledged wireframes, the design team rapidly generated ideas and
            simulated them with the users until we have a robust and effective
            solution. Every step along the way, we checked-in with users and
            teams together and exchanged feedback.
          </p>

          <div className="img-container">
            <img src="https://picsum.photos/268/170" alt="" />
            <img src="https://picsum.photos/268/186" alt="" />
            <img src="https://picsum.photos/268/341" alt="" />
            <img src="https://picsum.photos/268/285" alt="" />
          </div>
        </section>

        <section id="big-img-section1">
          <img src="https://picsum.photos/1440/570" alt="" />
        </section>

        <section id="design-started-section">
          <h3>Design to get started</h3>
          <p className="starting-point">
            We brought numerous datasets, models and frameworks from open source
            community, but depending on the projects that the data scientists
            work on, only few combinations of datasets, models and framework can
            be used. Therefore, it was vital to remove superfluous and
            irrelevant options and categories for the users to narrow down their
            preferences ahead of time. That’s why we incorporated Getting
            Started pages to help users performing AI experiments easily.
          </p>

          <ResponsiveCarousel />
        </section>

        <section id="experiment-section">
          <h3>Experiment setup stage</h3>
          <p>
            We designed the Setup pages very simple and straightforward to the
            goal of the experiment, but also wanted to provide relevant
            information to guide users the right way. Through few clicks, the
            users can experiment and discover different model/framework/hardware
            options; moreover, they can even use their datasets to run on
            different machines.
          </p>
          <div className="img-container">
            <img src={sample2} alt="" />
          </div>
        </section>

        <section id="result-page-section">
          <h3>Result page</h3>
          <p>
            Our team designed the result page to display only the essential data
            that would matter the most to the users, so they can easily glance
            over detailed comparisons and analysis without digging documents,
            install frameworks, download models, set up software and hardware
            environment.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/360/480" alt="" />
            <img src="https://picsum.photos/360/480" alt="" />
            <img src="https://picsum.photos/360/480" alt="" />
          </div>
        </section>

        <section id="big-img-section2">
          <img src="https://picsum.photos/1440/720" alt="" />
        </section>

        <section id="next-project-section" className="section">
          <h2 className="project-name">
            <Link to="/project4" className="project-name-link">
              Open BMC
            </Link>
          </h2>
          <h3 className="project-description">
            <Link to="/project4" className="project-description-link">
              Designing a minimal Baseboard Management Controller interface with
              a streamlined experience for system administrators
            </Link>
          </h3>
          <div className="line" />

          <div className="small-words">Role : Product design</div>
          <Link to="/project4" className="small-link">
            To OpenBMC
          </Link>
        </section>

        <footer>
          <div className="jun-footer">JUN</div>
          <div className="copy-right">
            &copy; Copyright 2019 and other stuff
          </div>

          <Link to="" className="small-link link1">
            Maybe other links
          </Link>
          <Link to="" className="small-link link2">
            Maybe links
          </Link>
        </footer>
      </React.Fragment>
    );
  }
}

export default Project2;
