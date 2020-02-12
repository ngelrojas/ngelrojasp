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
    const seo = {
      title: `Ngel Rojas | ${this.state.sub_topic}`,
      description: `all about ${this.state.sub_topic}`,
      url: `https://ngelrojasp.com/topic/${this.state.sub_topic}`,
      image: `https://ngelrojasp.com/public/${this.state.sub_topic}.png`,
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
