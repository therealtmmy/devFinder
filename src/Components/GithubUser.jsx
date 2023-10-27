import React from 'react'
import { FaMapMarkerAlt, FaTwitter, FaLink, FaRegBuilding } from "react-icons/fa";
import "../Components/GithubUser.css"
import user from "./user.json"

const GithubUser = () => {
  const Styling = {
    fontSize: "20px", 
    fontWeight: "700"
  }

  return (
    <div className='User'>
        <div>
          <img 
          src={user.avatar_url}
          alt="avatar" />
        </div>

        <div>
          <div className='UserName'>
              <p 
               style={Styling}>{user.name}</p>
              <p>Joined 21 Jan 2001</p>
          </div>
              <a 
              href={user.html_url} 
              style={{color: 'blue'}}>@{user.login}</a>

      <p>
        {user.bio ? (<p>{user.bio}</p> ) 
        : (<p>This profile has no bio</p> )}
      </p>

          <div className='UserDetails'>
              <div>
                <p>Repos</p>
                <p style={Styling}>{user.public_repos}</p>
              </div>

              <div>
                <p>Followers</p>
                <p style={Styling}>{user.followers}</p>
              </div>

              <div>
                <p>Following</p>
                <p style={Styling}>{user.following}</p>
              </div>
          </div>

          <div className='UserSocials'>
            <div className='Social1'>
            <span><FaMapMarkerAlt/> {user.location}</span>
               <a href=""><FaTwitter/>{user.twitter_username ? (<p>{user.twitter_username}</p>) : (<span> Unavailable</span>)}</a>
          
            </div>

              <div className='Social2'>
              <a href="https://github.blog">
                <FaLink/> https://github.blog</a>
             <span>
              <FaRegBuilding/> {user.company ? (<span>{user.company}</span>) : (<span> Unavailable </span>)}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GithubUser
