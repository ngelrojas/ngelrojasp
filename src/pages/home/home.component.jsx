import React from 'react'
import {Helmet} from 'react-helmet'
import API from '../../config/config.jsx'
import {ListArticles} from '../../components/list-articles/list-articles.component.jsx'
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

    return (
      <React.Fragment>
        <Helmet>
          <title>...::Ngel Rojas::...</title>
          <meta
            name="description"
            content="I'm Software Architect, passionate for the new programming 
                    languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner."
          />
          <meta property="og:local" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ngel - Rojas" />
          <meta
            property="og:description"
            content="I'm Software Architect, passionate for the new programming 
                    languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner."
          />
          <link rel="canonical" href="https://ngelrojasp.com" />
          <meta property="og:url" content="https://ngelrojasp.com" />
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
            content="I'm Software Architect, passionate for the new programming 
                    languages and new technologies, one of my big qualities is to be self-taught, and an eternal learner."
          />
          <meta
            name="twitter:image"
            content="https://ngelrojasp.com/public/angel.png"
          />
          <meta name="twitter:card" content="200_200" />
        </Helmet>
        <main>
          <div className="home-page">
            <h1>WELCOME TO MY PAGE ;) </h1>
            <ListArticles data_post={data_post} />
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default Home
