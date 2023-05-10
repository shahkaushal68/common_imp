import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <h4>App component - 1 {process.env.NODE_ENV}</h4>
      <h5>App component - 23 {process.env.REACT_APP_NAME}</h5>
      <Counter/>
    </div>
  )
}

export default App
