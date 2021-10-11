import React from 'react'
import  ReactSearchAutocomplete  from '../search-autocomplete/components/ReactSearchAutocomplete';

function PokeSearch(props) {

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    props.parentCallback(item);
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {

    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }

  return (
    <div className="grid justify-items-center z-50">
      <header>
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={props.pokelist.results}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnSearch}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default PokeSearch;