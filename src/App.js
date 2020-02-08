import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home/home.component'
import Header from './components/header/header.component.jsx'
import NavMenu from './components/nav/nav.component.jsx'
import TopicsComponent from './pages/topics/topics.component.jsx'
import SubTopics from './pages/subtopics/sub-topics.component.jsx'
import DescripComponent from './pages/description/description.component.jsx'
import AboutMe from './pages/about/about.component.jsx'

import NewsComponent from './pages/news/news.component.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="main__container">
        <BrowserRouter>
          <Header />
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={TopicsComponent} />
            <Route path="/topic/:subtopic" component={SubTopics} />
            <Route exact path="/post/:slug" component={DescripComponent} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/news" component={NewsComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
