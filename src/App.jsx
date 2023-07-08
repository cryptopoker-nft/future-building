import { useState } from 'react'
import darkToggle from './assets/lightbg-btn.png'
import './App.css'

import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

// for web3 connext button
import { Web3Button } from "@web3modal/react";

// import components
import { SetupHome } from './components/SetupHome';
import { Lobby } from './views/Lobby';
import { Profile } from './views/Profile';
import { Game } from './views/Game';

// import functions 
import { darkToggleEnable } from './functions/darkToggleEnable';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <header>
          <img
            src={darkToggle}
            className="darkToggle"
            onClick={darkToggleEnable}
            alt="D/L btn left"
           />

          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/lobby">Lobby</Link> |{" "}
            <Link to="/profile">Profile</Link> |{" "}
            <Link to="/game">Game</Link>
          </nav>

          <Web3Button />
        </header>

        <Routes>

          <Route path="/" element={<SetupHome />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<h1>404</h1>} />

        </Routes>

        <div className="clear"></div>
        
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

        </div> */}

        </BrowserRouter>
      </div>
    </>
    
  )
}

export default App
