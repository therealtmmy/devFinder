import React from 'react'
import {FaMoon, FaRegLightbulb} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import "../Components/SearchUser.css"
import { useState } from 'react';

const SearchUser = () => {
  const [show, setShow] = useState(true)
  const [search, setSearch] = useState("")
  const toggleShow = () => {
    setShow(!show)
  }

  const onSearch = () => {
    alert(`${search}`)
  }

  return (
    <div className='SearchUser'>
      <div className='Header'>
          <p>devfinder</p>
          {show ? (<button className='Switch' onClick={toggleShow}>LIGHT <FaRegLightbulb /></button>) :  (<button className='Switch' onClick={toggleShow}>DARK <FaMoon /></button>)}
      </div>

   <form onSubmit={onSearch}>
      <div className='Search'>
        <div className='inputField'>
        <FaSearch style={{color: "#0077FF", fontSize: "20px"}}/>

      <input 
        type="text"
        placeholder ='Search GitHub Username...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        </div>
        <button className='SearchBtn'>Search</button>
      </div>
      </form> 
    </div>
  )
}

export default SearchUser
