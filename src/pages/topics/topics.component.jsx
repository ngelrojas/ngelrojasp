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
    const seo = {
      title: '...::Ngel Rojas::...',
      description:
        'All about technology of programming languages, data bases and machine learning.',
      url: 'https://ngelrojasp.com/topics',
      image: 'https://ngelrojasp.com/public/topics.png',
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
