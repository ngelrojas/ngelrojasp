import React from 'react'
import {Helmet} from 'react-helmet'
import {RelatedCategory} from '../../components/related-category/related-category.component.jsx'
import './description.styles.scss'
import PATH from '../../config/config.jsx'

class DescripComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      fields: {},
      msg: {},
      data_post: {},
      data_related: [],
      isLoading: false,
    }
  }

  getArticles = () => {
    let slug = this.props.match.params.slug
    window
      .fetch(PATH + 'api/articles/' + slug)
      .then(response => {
        return response.json()
      })
      .then(res => {
        let res_data = res.data
        this.getRelatedPost(res_data[0].idart)
        this.setState({
          data_post: res_data[0],
          isLoading: false,
        })
      })
  }

  getRelatedPost = id_art => {
    window
      .fetch(PATH + 'api/categories/related/ ' + id_art)
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          data_related: response.data,
        })
      })
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getArticles()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main>
          <div className="content">
            <h1 className="loading">LOADING....</h1>
          </div>
        </main>
      )
    }
    const {data_related} = this.state
    return (
      <React.Fragment>
        <Helmet>
          <title>Ngel Rojas | {`${this.state.data_post.art_title}`}</title>
          <meta
            name="description"
            content={`${this.state.data_post.art_excerpt}`}
          />
          <meta property="og:local" content="pt_BR" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={`${this.state.data_post.art_title}`}
          />
          <meta
            property="og:url"
            content={`${'https://ngelrojasp.com/post/' +
              this.state.data_post.art_title_slug}`}
          />
          <meta
            property="og:description"
            content={`${this.state.data_post.art_excerpt}`}
          />
          <meta
            property="og:author"
            content={`${this.state.data_post.full_name}`}
          />
          <meta
            property="article:tag"
            content="python, django, postgresql, docker, rds-aws"
          />
          <meta
            property="article:published_time"
            content={`${this.state.data_post.created_at}`}
          />
          <meta
            property="og:image"
            content={`${PATH +
              'api/storage/blog-images/articles/' +
              this.state.data_post.art_img_excerpt}`}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="400" />
          <meta
            property="og:site_name"
            content={`${this.state.data_post.full_name} - Blog`}
          />

          <meta
            name="twitter:title"
            content={`${this.state.data_post.art_title}`}
          />
          <meta
            name="twitter:description"
            content={`${this.state.data_post.art_excerpt}`}
          />
          <meta
            name="twitter:image"
            content={`${PATH +
              'api/storage/blog-images/articles/' +
              this.state.data_post.art_img_excerpt}`}
          />
          <meta name="twitter:card" content="800_400" />
        </Helmet>
        <main>
          <div className="content-desc">
            <div className="content-desc-left">
              <div className="content-desc__head">
                <figure className="head__img">
                  <img
                    src={`${PATH +
                      'api/storage/blog-images/articles/' +
                      this.state.data_post.art_img_excerpt}`}
                    alt={`${this.state.data_post.art_title_slug} - ${this.state.data_post.full_name}`}
                  />
                </figure>

                <h1>{this.state.data_post.art_title}</h1>
                <div className="head__author">
                  <div className="author">
                    <span>author: </span>
                    {this.state.data_post.full_name}
                  </div>
                  <div className="data">
                    <span>Data: </span>
                    {this.state.data_post.created_at}
                  </div>
                </div>
              </div>
              <div className="content-desc__body">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.data_post.art_description,
                  }}></div>
              </div>
            </div>
            <div className="content-desc-right">
              <RelatedCategory data_related={data_related} />
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default DescripComponent
