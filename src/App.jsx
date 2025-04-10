import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Tags from "./components/tags/TagsList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>welcome to e-learning platform</h1>
        <Tags />
      </div>
    </>
  )
}

export default App
