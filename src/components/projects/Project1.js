import React, { Component } from "react";
import { Link } from "react-router-dom";
import JunLogo from "../main_page_layouts/JunLogo";
import sample2 from "../../img/sample2.jpg";
import sample_sm_3 from "../../img/sample_sm_3.jpg";

class Project1 extends Component {
  // Scroll to the very top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <JunLogo />
        <section
          id="project1-intro-section"
          className="project-section section"
        >
          <h2 className="project-name">IBM Power Systems for Google Cloud</h2>
          <h3 className="project-description">
            Building an intuitive and frictionless cloud server interface for
            infrastructure as a service platform
          </h3>
          <div className="line" />

          <div className="small-words">Role : Product design</div>
          <Link to="" className="small-link">
            Link page
          </Link>
        </section>

        <section id="about-section">
          <h3>About</h3>
          <div>
            <p>
              The average enterprise business has 5+ clouds to straddle, 1,000+
              cloud and SaaS applications to assimilate, and 20+ data sources
              for analysis. Not to mention the fact that before even considering
              cloud adoption, they—once upon a time—made massive investments
              into their traditional IT ecosystem that need to be leveraged and
              incorporated into their new cloud journey.
            </p>
            <br />
            <br />
            <p>
              What we’re seeing now more than ever is a new and modern journey
              to cloud that takes a hybrid approach, where enterprises blend the
              value of their original investments and on-premise environments
              with new public and virtual-private cloud estates.
            </p>
            <br />
            <br />
            <p>
              To help clients succeed in today’s hybrid, multicloud reality, the
              IBM Cloud and IBM Power Systems teams are bringing the IBM POWER9
              platform to the cloud with the new IBM Power Systems Virtual
              Server on IBM Cloud—available in select IBM Cloud data centers
              spring 2019.
            </p>
          </div>
        </section>

        <section id="early-exploration-section">
          <h3>Early Exploration</h3>
          <p>
            About initial steps for business partner and customer. We'll take a
            little bit of Van Dyke Brown. Clouds are free. They just float
            around the sky all day and have fun. You are only limited by your
            imagination. Let's have a nice tree right here. Anyone can paint.
            Don't be afraid to make these big decisions. Once you start, they
            sort of just make themselves.
          </p>

          <h5 className="h5-1">First time setup for BP and customer</h5>
          <div className="box-group1">
            <div className="box">
              <span>0</span>
              <div>IBM Gives BP URL</div>
            </div>
            <div className="box">
              <span>1</span>
              <div>BP Goes into Google BP Portal</div>
            </div>
            <div className="box">
              <span>2</span>
              <div>If BP, then select hidden Power Systems GCP Tile</div>
            </div>
            <div className="box">
              <span>3</span>
              <div>Landing Sign-in page, if BP enter IBM ID & BP ID</div>
            </div>
            <div className="box">
              <span>4</span>
              <div>Setup service / select t-shirt size</div>
            </div>
            <div className="box">
              <span>5</span>
              <div>Select project</div>
            </div>
            <div className="box">
              <span>6</span>
              <div>Define subnet</div>
            </div>
            <div className="box">
              <span>1</span>
              <div>Customer goes to GCP marketplace</div>
            </div>
            <div className="box">
              <span>2</span>
              <div>
                If Customer, then select IBM Power Systems Tile in GCP
                marketplace
              </div>
            </div>
            <div className="box">
              <span>3</span>
              <div>Landing Sign-in page, if Customer enter IBM ID</div>
            </div>
          </div>

          <h5 className="h5-2">Second time setup for BP and customer</h5>
          <span className="gcp">In GCP</span>
          <div className="box-group2">
            <div className="box">
              <span>1</span>
              <div>Customer signs into their GCP account</div>
            </div>
            <div className="box">
              <span>2</span>
              <div>
                Customer goes to list of GCP services they are subscribed to
              </div>
            </div>
            <div className="box">
              <span>3</span>
              <div>Customer clicks on Power Cloud Service</div>
            </div>
            <div className="box">
              <span>4</span>
              <div>
                Power Subscription page opens with details of their subscription
              </div>
            </div>
            <div className="box">
              <span>5</span>
              <div>Customer selects button to manage Power Cloud</div>
            </div>
            <div className="ibm-domain">In IBM domain</div>
            <div className="box">
              <span>6</span>
              <div>
                If system setup is not finished, a new tab opens on IBM domain
                and asks customer to finish setup
              </div>
            </div>
            <div className="box">
              <span>7</span>
              <div>Setup page asks user to run 5 Gcloud commands</div>
            </div>
            <div className="box">
              <span>?</span>
              <div>
                Do we have to wait for G-Cloud commands to be run or can we just
                provision?
              </div>
            </div>
            <div className="box">
              <span>8</span>
              <div>Customer is launched into VM manager</div>
            </div>
            <div className="box">
              <span>6</span>
              <div>
                If system setup is finished, new tab opens on IBM domain to VM
                Manager
              </div>
            </div>
            <div className="box">
              <span>7</span>
              <div>Customer is launched into VM Manager</div>
            </div>
          </div>
        </section>

        <section id="wireframe-section">
          <h3>Wireframe</h3>
          <p>
            The design team quickly created wireframes. The focus was to have
            similar wording and tones like Google Cloud Platform, but also
            differentiate to let the users know they are in IBM side to control
            their enviornment. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div className="img-container">
            <img src={sample2} alt="" />
          </div>
        </section>

        <section id="setup-section">
          <h3>Setup process</h3>
          <p>
            Running two completely different platforms requires user to spend
            more cognitive loads. We focused to accomplish this setup process to
            be very short but clear enough to follow. Just a little indication.
            There we go. That's what makes life fun. That you can make these
            decisions. That you can create the world that you want.
          </p>
          <div className="img-container">
            <img src={sample_sm_3} alt="" />
            <img src={sample_sm_3} alt="" />
            <img src={sample_sm_3} alt="" />
          </div>
        </section>

        <section id="creating-and-editing-section">
          <h3>Creating and Editing</h3>
          <p>
            The design team quickly created wireframes. The focus was to have
            similar wording and tones like Google Cloud Platform, but also
            differentiate to let the users know they are in IBM side to control
            their enviornment. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse ultricies auctor tortor at vulputate.
            Quisque interdum justo vitae molestie luctus. Fusce dignissim sed
            tellus nec tempus.
          </p>
          <div className="img-container">
            <img src="https://picsum.photos/300/1000/?random" alt="" />
            <img src="https://picsum.photos/300/845/?random" alt="" />
          </div>
        </section>

        <section id="responsive-ready-layout-section">
          <div className="img-container">
            <img src="https://picsum.photos/890/643/?random" alt="" />
          </div>
          <h3>Responsive-ready layout</h3>
          <p>
            The design team quickly created wireframes. The focus was to have
            similar wording and tones like Google Cloud Platform, but also
            differentiate to let the users know they are in IBM side to control
            their enviornment. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse ultricies auctor tortor at vulputate.
            Quisque interdum justo vitae molestie luctus. Fusce dignissim sed
            tellus nec tempus.
          </p>
        </section>

        <section id="next-project-section" className="section">
          <h2 className="project-name">
            <Link to="/project2" className="project-name-link">
              Machine Learning Model Scope
            </Link>
          </h2>
          <h3 className="project-description">
            <Link to="/project2" className="project-description-link">
              Making an open source platform to help users in AI experimentation
              and evaluation without installing hardware infrastructures
            </Link>
          </h3>

          <div className="line" />

          <div className="small-words">Role : Product design</div>
          <Link to="/project2" className="small-link">
            Link page
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

export default Project1;
