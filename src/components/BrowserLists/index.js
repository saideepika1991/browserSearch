import './index.css'

const BrowserLists = props => {
  const {browserDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onDeleteButtonPress = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="description">{timeAccessed}</p>
      <img src={logoUrl} className="image" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <div>
        <button
          className="button"
          type="button"
          testid="delete"
          onClick={onDeleteButtonPress}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="image1"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserLists
