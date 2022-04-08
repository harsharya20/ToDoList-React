import React, { useState } from 'react'

const App = () => {

const [inputList, setInputList] = useState("")
const [items,setItems] = useState([])

const itemEvent = (e) => {
setInputList(e.target.value)
}
const listOfItems = () => {
setItems((oldItems) => {
  return [...oldItems,inputList]
})
setInputList("")
}

  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}

          {items.map((itemval) => {
          return <li>{itemval}</li>
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App