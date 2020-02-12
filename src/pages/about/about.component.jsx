import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import Photo from './assets/angel.png'
import GitHubComponent from './assets/github.component.jsx'
import LinkedInComponent from './assets/linkedin.component.jsx'
import TwitterComponent from './assets/twitter.component.jsx'
import FComponent from './assets/f.component.jsx'
import Fade from 'react-reveal/Fade'
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
    const seo = {
      title: '...::Ngel Rojas::...',
      description:
        'I am Software Architect, passionate for the new programming languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner.',
      url: 'https://ngelrojasp.com/about-me',
      image: 'https://ngelrojasp.com/public/angel.png',
    }
    return (
      <React.Fragment>
        <Helmet
          title={`${seo.title}`}
          meta={[
            {
              name: 'description',
              property: 'og:description',
              content: seo.description,
            },
            {property: 'og:title', content: `${seo.title}`},
            {property: 'og:url', content: seo.url},
            {property: 'og:image', content: seo.image},
            {property: 'og:image:type', content: 'image/png'},
            {property: 'twitter:image:src', content: seo.image},
            {property: 'twitter:title', content: `${seo.title}`},
            {property: 'twitter:description', content: seo.description},
          ]}
        />
        <main>
          <div className="aboutme">
            <Fade>
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
            </Fade>
            <Fade>
              <div className="aboutme__words">
                <h1 className="title">Hi, how it's going...! ;)</h1>
                <h1 className="content">
                  I'm Software Architect, passionate for the new programming
                  languages and new technologies, one of my big qualities is to
                  be self-taught, and an eternal learner.
                </h1>
              </div>
            </Fade>

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
