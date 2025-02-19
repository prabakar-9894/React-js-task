import { useState } from 'react'
import '../css/App.css'
import Home from './Home.jsx'
// import { Back } from './Back'


function App() {
  const [count, setCount] = useState(0)  // Count is display the value or function 
                                         // SetCount is used to values and function & methods
                                        // "e" is a Envronmental value or variable
  return (
    <>
      <button onClick={(e) => {setCount(count+1)}}>Add</button>  
      <h1>count {count}</h1>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
    </>
  )
}

export default App
