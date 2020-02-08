import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import Photo from './assets/angel.png'
import GitHubComponent from './assets/github.component.jsx'
import LinkedInComponent from './assets/linkedin.component.jsx'
import TwitterComponent from './assets/twitter.component.jsx'
import FComponent from './assets/f.component.jsx'
import './about.styles.scss'

class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      links: [
        'https://github.com/ngelrojas',
        'https://www.linkedin.com/in/angel-rojas-software-architect/',
        'https://twitter.com/AngelORojasP',
        'https://www.facebook.com/angelorojasp',
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>...::Ngel Rojas::...</title>
          <meta
            name="description"
            content="I am Software Architect, passionate for the new programming
                  languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner."
          />
          <meta property="og:local" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ngel - Rojas" />
          <link rel="canonical" href="https://ngelrojasp.com" />
          <meta property="og:url" content="https://ngelrojasp.com/about-me" />
          <meta property="og:site_name" content="Ngel - Rojas" />
          <meta
            property="og:image"
            content="https://ngelrojasp.com/public/angel.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />

          <meta name="twitter:title" content="Ngel - Rojas" />
          <meta
            name="twitter:description"
            content="I am Software Architect, passionate for the new programming
                        languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner."
          />
          <meta
            name="twitter:image"
            content="https://ngelrojasp.com/public/angel.png"
          />
          <meta name="twitter:card" content="200_200" />
        </Helmet>
        <main>
          <div className="aboutme">
            <div className="aboutme__card">
              <div className="aboutme__me">
                <figure>
                  {Photo ? (
                    <img src={Photo} alt="Ngel Rojas" />
                  ) : (
                    <p>LOADING</p>
                  )}
                </figure>
              </div>
              <div className="aboutme__content">
                <div className="name">
                  <h1>Angel Rojas P.</h1>
                  <h1 className="title">Software Architect</h1>
                </div>
                <div className="emails">
                  <h1 className="one">me@ngelrojasp.com</h1>
                  <h1 className="two">aomarrojasp@gmail.com</h1>
                </div>
              </div>
              <div className="aboutme__share">
                <ul>
                  <li>
                    <a
                      href={this.state.links[0]}
                      target="_blank"
                      rel="noopener noreferrer">
                      <GitHubComponent className="social-icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={this.state.links[1]}
                      target="_blank"
                      rel="noopener noreferrer">
                      <LinkedInComponent className="social-icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={this.state.links[2]}
                      target="_blank"
                      rel="noopener noreferrer">
                      <TwitterComponent className="social-icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={this.state.links[3]}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FComponent className="social-icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aboutme__words">
              <h1 className="title">Hi, how it's going...! ;)</h1>
              <h1 className="content">
                I'm Software Architect, passionate for the new programming
                languages and new technologies, one of my big qualities is to be
                self-taught, and an eternal learner.
              </h1>
            </div>
            <div className="aboutme__btn">
              <Link
                to="/public/angel-rojas.pdf"
                target="_blank"
                className="btn-download"
                download>
                my resume
              </Link>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default AboutMe
