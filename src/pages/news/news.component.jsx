import React from 'react'
import {ListCards} from '../../components/list-cards/list-cards.component.jsx'
import API from '../../config/config.jsx'
import axios from 'axios'
import './news.styles.scss'

class NewsComponent extends React.Component {
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
      <main>
        <div className="topics">
          <ListCards data_cat={data_cat} />
        </div>
      </main>
    )
  }
}

export default NewsComponent
