import React from 'react'
import {Helmet} from 'react-helmet'
import API from '../../config/config.jsx'
import {ListArticles} from '../../components/list-articles/list-articles.component.jsx'
import Fade from 'react-reveal/Fade'
import './home.styles.scss'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      data_post: [],
    }
  }

  getArticles = () => {
    this.setState({isLoading: true})

    window
      .fetch(API + `api/articles`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          data_post: response.data,
          isLoading: false,
        })
      })
  }

  componentDidMount() {
    this.getArticles()
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
      title: '...::Ngel Rojas::...',
      description:
        'I am Software Architect, passionate for the new programming languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner.',
      url: 'https://ngelrojasp.com',
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
          <div className="home-page">
            <Fade top>
              <h1>WELCOME TO MY PAGE ;) </h1>
            </Fade>
            <Fade bottom>
              <ListArticles data_post={data_post} />
            </Fade>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default Home
