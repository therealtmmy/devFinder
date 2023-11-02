import React from 'react'
import {FaSearch, FaMoon, FaRegLightbulb} from "react-icons/fa";
import "../Components/SearchUser.css"
import GithubUser from './GithubUser';
import { useState } from 'react';
import data from "./user.json"

const SearchUser = () => {
  const [show, setShow] = useState(true)
  const [accessUser, setAccessUser] = useState(data)
  const [search, setSearch] = useState("")
  const toggleShow = () => {
    setShow(!show)
  }

  const onSearch = (e) => {
    e.preventDefault()
     if(search === ""){
      alert("Please Provide a Valid Username")
      return accessUser
    }  

    fetch(`https://api.github.com/users/${search}`)
    .then(res => res.json())
    .then(output => {setAccessUser(prevState => {
      return [output]
    })})
    setSearch("")
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

      {accessUser.map((user, index) => <GithubUser key={index} user={user}/>)}
    </div>
  )
}

export default SearchUser
