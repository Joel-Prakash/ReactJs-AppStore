import './index.css'

const TabItem = props => {
  const {eachTabDetails, updateCurrentTabsList, isActive} = props
  const {tabId, displayText} = eachTabDetails

  const onClickingTabText = () => {
    updateCurrentTabsList(tabId)
  }

  const highLight = isActive ? 'highlight' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${highLight}`}
        onClick={onClickingTabText}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
