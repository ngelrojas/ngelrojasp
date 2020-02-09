import React from 'react'
import {Helmet} from 'react-helmet'
import API from '../../config/config.jsx'
import {ListArticles} from '../../components/list-articles/list-articles.component.jsx'
import Fade from 'react-reveal/Fade'
import './sub-topics.styles.scss'

class SubTopics extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      data_post: [],
      sub_topic: '',
    }
  }

  getSubCategories = () => {
    let subtopic = this.props.match.params.subtopic
    window
      .fetch(API + 'api/categories/' + subtopic)
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          data_post: response.data,
          sub_topic: subtopic,
          isLoading: false,
        })
      })
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getSubCategories()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main>
          <div className="home-page">
            <h1>LOADING...</h1>
          </div>
        </main>
      )
    }
    const {data_post} = this.state

    return (
      <React.Fragment>
        <Helmet>
          <title>Ngel Rojas | {`${this.state.sub_topic}`}</title>
          <meta property="og:local" content="pt_BR" />
          <meta
            name="description"
            content={`all about ${this.state.sub_topic}`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={`sub-topic - sub-category - ${this.state.sub_topic}`}
          />
          <meta
            property="og:url"
            content={`https://ngelrojasp.com/topic/${this.state.sub_topic}`}
          />
          <meta
            property="article:section"
            content={`All about ${this.state.sub_topic}`}
          />
          <meta property="article:author" content="Ngel Rojas" />
          <meta
            property="article:tag"
            content="python, django, postgresql, docker, rds-aws, javascript, cpp, c, rust, webassembly, mysql, react-js, machine-learning, git, gitlab"
          />
          <meta
            property="og:image"
            content={`https://ngelrojasp.com/public/${this.state.sub_topic}.png`}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="400" />

          <meta
            name="twitter:title"
            content={`sub-topic - sub-category - ${this.state.sub_topic}`}
          />
          <meta
            name="twitter:description"
            content={`All about ${this.state.sub_topic}`}
          />
          <meta
            name="twitter:image"
            content={`https://ngelrojasp.com/public/${this.state.sub_topic}.png`}
          />
          <meta name="twitter:card" content="800_400" />
        </Helmet>
        <main>
          <div className="sub-topics">
            <Fade bottom>
              <ListArticles data_post={data_post} />
            </Fade>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default SubTopics
