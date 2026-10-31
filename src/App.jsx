import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = () => {

    if (counter > 0) {
      setCounter(counter - 1)
    }

  }

  return (
    <div className="container">
      <div className="counter-card">

        <h1>Counter</h1>
        <div className="counter-value">
          {counter}
        </div>

        <div className="button-group">

          <button
            className="add-btn"
            onClick={addValue}
          >
            + Add Value
          </button>

          <button
            className="remove-btn"
            onClick={removeValue}
          >
            - Remove Value
          </button>

        </div>
      </div>
    </div>
  )
}

export default App