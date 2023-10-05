import React from 'react'
import {FaRegLightbulb} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import "../Components/SearchUser.css"

const SearchUser = () => {
  return (
    <div className='SearchUser'>
      <div className='Header'>
          <p>devfinder</p>
          <button>LIGHT <FaRegLightbulb /></button>
      </div>

      <div>
        <FaSearch/>
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchUser
