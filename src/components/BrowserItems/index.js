import {Component} from 'react'
import './index.css'
import BrowserLists from '../BrowserLists'

class BrowserItems extends Component {
  state = {search: ''}

  onBrowserHistory = event => {
    this.setState({search: event.target.value})
  }

  deleteTodo = id => {
    const {initialHistoryList} = this.state
    const updatedSearch = initialHistoryList.filter(
      eachList => eachList.id !== id,
    )

    this.setState({search: updatedSearch})
  }

  renderAuthBrowser = () => {
    const {search} = this.state
    const {initialHistoryList} = this.props
    const updatedSearchResults = initialHistoryList.filter(eachBrowser =>
      eachBrowser.title.toLowerCase().includes(search.toLowerCase()),
    )

    if (updatedSearchResults.length < 1) {
      return <p className="descripttion">There is no history to show</p>
    }
    return (
      <ul>
        {updatedSearchResults.map(eachBrowser => (
          <BrowserLists
            key={eachBrowser.id}
            browserDetails={eachBrowser}
            deleteTodo={this.deleteTodo}
            onBrowserHistory={this.onBrowserHistory}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {search} = this.state

    return (
      <div className="bg-container">
        <div className="blue-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="domain-image"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
          </div>
          <input
            type="search"
            placeholder="Search history"
            className="search-input"
            onChange={this.onBrowserHistory}
            value={search}
          />

          {this.renderAuthBrowser()}
        </div>
      </div>
    )
  }
}

export default BrowserItems
