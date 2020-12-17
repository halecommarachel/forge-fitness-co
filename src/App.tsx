import React from 'react'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            style={{ width: '500px' }}
            src={
              'https://storage.googleapis.com/forgefitnessco/ronin_freyja.jpg'
            }
            alt="logo"
          />
        </div>

        <p>Welcome to ForgeFitnessCo! WOOOO</p>
      </header>
    </div>
  )
}

export default App
