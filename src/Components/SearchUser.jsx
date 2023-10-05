import React from 'react'
import {FaRegLightbulb} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import "../Components/SearchUser.css"

const SearchUser = () => {
  return (
    <div className='SearchUser'>
      <div className='Header'>
          <p>devfinder</p>
          <button className='Switch'>LIGHT <FaRegLightbulb /></button>
      </div>

      <div className='Search'>
        <div className='inputField'>
        <FaSearch style={{color: "#0077FF", fontSize: "20px"}}/>
        <input type="text"placeholder='Search GitHub Username...'/>
        </div>
        <button className='SearchBtn'>Search</button>
      </div>
    </div>
  )
}

export default SearchUser
