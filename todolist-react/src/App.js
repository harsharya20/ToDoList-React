import React, { useState } from 'react'
import Lists from './Components/Lists'

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
const deleteItems = () =>{

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

          {items.map((itemval,index) => {
           return <Lists  key = {index} id = {index} text={itemval}
           onSelect={deleteItems} />
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App