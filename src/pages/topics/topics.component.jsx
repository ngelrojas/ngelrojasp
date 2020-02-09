import React from 'react'
import {Helmet} from 'react-helmet'
import {ListCards} from '../../components/list-cards/list-cards.component.jsx'
import API from '../../config/config.jsx'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import './topics.styles.scss'

class TopicsComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      fields: {},
      data_cat: [],
      isLoading: false,
    }
  }

  getCategories = e => {
    axios.get(API + `api/categories`).then(response => {
      this.setState({
        data_cat: response.data,
        isLoading: false,
      })
    })
  }
  componentDidMount() {
    this.setState({isLoading: true})
    this.getCategories()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main>
          <div className="topics">
            <h1>LOADING...</h1>
          </div>
        </main>
      )
    }
    const {data_cat} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <title>...::Ngel Rojas::...</title>
          <meta property="og:local" content="pt_BR" />
          <meta
            name="description"
            content="All about technology of programming languages, data bases and machine learning."
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="topics - categories" />
          <meta property="og:url" content="https://ngelrojasp.com/topics" />
          <meta
            property="article:section"
            content="All about technology of programming languages, data bases and machine learning."
          />
          <meta property="article:author" content="Ngel Rojas" />
          <meta
            property="article:tag"
            content="python, django, postgresql, docker, rds-aws, javascript, cpp, c, rust, webassembly, mysql, react-js, machine-learning, git, gitlab"
          />
          <meta
            property="og:image"
            content="https://ngelrojasp.com/public/topics.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="400" />

          <meta name="twitter:title" content="topics - categories" />
          <meta
            name="twitter:description"
            content="All about technology of programming languages, data bases and machine learning."
          />
          <meta
            name="twitter:image"
            content="https://ngelrojasp.com/public/topics.png"
          />
          <meta name="twitter:card" content="800_400" />
        </Helmet>
        <main>
          <div className="topics">
            <Fade bottom>
              <ListCards data_cat={data_cat} />
            </Fade>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default TopicsComponent
