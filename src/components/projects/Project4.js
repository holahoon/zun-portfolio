import React, { Component } from "react";
import { Link } from "react-router-dom";
import JunLogo from "../main_page_layouts/JunLogo";
import ParallaxImage1 from "./Paralla1";
import ParallaxImage2 from "./Paralla2";
import ParallaxImage3 from "./Paralla3";

class Project4 extends Component {
  // Scroll to the very top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <JunLogo />
        <section
          id="project4-intro-section"
          className="project-section section"
        >
          <h2 className="project-name">OpenBMC</h2>
          <h3 className="project-description">
            Designing a minimal Baseboard Management Controller interface with a
            streamlined experience for system administrators
          </h3>
          <div className="line" />

          <div className="small-words">Role : Product design</div>
          <Link to="" className="small-link">
            Link page
          </Link>
        </section>

        <section id="section2-description">
          <h3>About this project</h3>
          <p>
            OpenBMC is originally born out of a Facebook hackathon event, where
            four engineers worked to create a minimum BMC software stack that
            controls hardware pieces of Facebook’s top-of-rack switch. As the
            project became open-source, other tech organizations (Microsoft,
            Intel, IBM, and Google) are collaborating to bring OpenBMC to life.
            <br />
            <br />
            Our design team was tasked to create a simple and intuitive
            graphical user interface for OpenBMC with a size limitation*.
            <br />
            <br />
            <em>
              *The final build of the complete GUI must stay under 1MB in size.
            </em>
          </p>
        </section>

        <section id="market-research-section">
          <h3>Market research</h3>
          <p>
            There are already a handful of BMCs with user interfaces from IBM
            and other companies. IBM alone uses 4 different BMCs on different
            servers, not to mention, the existing GUIs provide different and
            substandard experiences. The main goal of this initiative was to
            streamline the experience by converging and enhancing GUIs into one
            through OpenBMC.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/360/360" alt="" />
            <img src="https://picsum.photos/360/360" alt="" />
            <img src="https://picsum.photos/360/360" alt="" />
            <img src="https://picsum.photos/360/360" alt="" />
            <img src="https://picsum.photos/360/360" alt="" />
            <img src="https://picsum.photos/360/360" alt="" />
          </div>
        </section>

        <section id="discovery-section">
          <h3>Discovery</h3>
          <p>
            The project started with Design Thinking workshop with various
            stakeholders across multiple disciplines(offering management,
            engineering, and design). And in order to focus on user outcomes,
            the design team prepared user researches which included a
            competitive analysis of other BMC interfaces, as well as a market
            segmentation mapping with results from generative user research that
            identified the biggest pain points and use cases for BMC via GUI.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/720/640" alt="" />
            <img src="https://picsum.photos/360/320" alt="" />
            <img src="https://picsum.photos/360/320" alt="" />
            <img src="https://picsum.photos/360/320" alt="" />
            <img src="https://picsum.photos/360/320" alt="" />
            <img src="https://picsum.photos/360/320" alt="" />
          </div>
        </section>

        <section id="feature-section">
          <h3>Feature prioritization and information architecture</h3>
          <p>
            From the competitive research of the BMC interfaces, we discovered
            that the typical controllers contain more than 80 features in
            average. So reducing the number of the features was an essential
            task for us since it not only benefits the user experience, but also
            it’d ultimately reduce the size of the build.
            <br />
            <br />
            As our researcher employed a prioritization survey to our sponsored
            users, we were able to sort out the most critical features to the
            sys-admin’s everyday use. The diagram below is produced by the
            researcher. Blue indicates responses that the feature was most
            important, while red indicates responses saying the feature was
            least important.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/900/640" alt="" />
          </div>
        </section>

        <section id="architecture-section">
          <p>
            One of the common underlying UX problems of legacy BMC interfaces
            was a jam-packed menu without a thoughtful hierarchy. The users
            should know where to execute tasks by logically thinking the way
            from the top menu to bottom sub-menus, and they also should know
            where they are inside of the product. Creating a new and fresh
            information architecture enabled the users to navigate the BMC
            interface without frustration.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/900/760" alt="" />
          </div>
        </section>

        <section id="early-exploration-section3">
          <h3>Early exploration</h3>
          <p>
            Throughout the whole design sprints, the team kept generating ideas
            and translated them into wireframes in order to confirm and verify
            the user flow. Many user testings were done in an iterative basis
            and changes were made according to the user feedback and group
            discussions. All the time of the process, we reminded ourselves
            about how the users can accomplish their daily BMC tasks with less
            efforts.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/270/270" alt="" />
            <img src="https://picsum.photos/270/270" alt="" />
            <img src="https://picsum.photos/270/270" alt="" />
            <img src="https://picsum.photos/270/270" alt="" />
            <img src="https://picsum.photos/270/270" alt="" />
            <img src="https://picsum.photos/270/270" alt="" />
            <img src="https://picsum.photos/540/270" alt="" />
            <img src="https://picsum.photos/540/270" alt="" />
            <img src="https://picsum.photos/540/270" alt="" />
            <img src="https://picsum.photos/540/270" alt="" />
            <img src="https://picsum.photos/540/270" alt="" />
          </div>
        </section>

        <section id="design-and-section">
          <h3>Design and design and design</h3>
          <p>
            Until we settled for the final design, a number of design variations
            was created as we continuously conversed with the users and received
            feedbacks. Despite the size limitation, we designed to fulfill
            essential needs of the users. We incorporated browser default fonts
            and default HTML symbols as we saw them fit.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/500/380" alt="" />
            <img src="https://picsum.photos/500/380" alt="" />
            <img src="https://picsum.photos/500/380" alt="" />
            <img src="https://picsum.photos/500/380" alt="" />
          </div>
        </section>

        <section id="img-scroll-section">
          <div className="img-row">
            <ParallaxImage1 />
          </div>
          <div className="img-row">
            <ParallaxImage2 />
          </div>
          <div className="img-row">
            <ParallaxImage3 />
          </div>
        </section>

        <section id="next-project-section" className="section">
          <h2 className="project-name">
            <Link to="/project3" className="project-name-link">
              Remnant Ministry
            </Link>
          </h2>
          <h3 className="project-description">
            <Link to="/project3" className="project-description-link">
              As trees get older they lose their chlorophyll. Work that paint. A
              fan brush is a fantastic piece of equipment.
            </Link>
          </h3>
          <div className="line" />

          <div className="small-words">Role : Product design</div>
          <Link to="/project3" className="small-link">
            To Remnant Ministry
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

export default Project4;
