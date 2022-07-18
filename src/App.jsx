import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from "./components/search/search.jsx";

function App() {

    const handleSearchChange = (searchData) => {
        console.log(searchData);
    }

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChange} />
    </div>
  )
}

export default App
