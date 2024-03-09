import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingFilterList = () => {
    const {ratingList} = props

    return ratingList.map(each => {
      const {changeRanting} = props
      const onClickRatingItem = () => changeRanting(each.ratingId)

      return (
        <li onClick={onClickRatingItem} key={each.ratingId}>
          <img src={each.imageUrl} alt={`rating ${each.ratingId}`} />
          <p>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderRatingFilterList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {changecatogray} = props
      const onClickCatogaryItem = () => changecatogray(each.categoryId)
      return (
        <li key={each.categoryId} onClick={onClickCatogaryItem}>
          <p>{each.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => {
    ;<>
      <h1>Category</h1>
      <ul>{renderCategoriesList()}</ul>
    </>
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div>
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div>
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilterList()}
      <button onClick={clearFilters} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
