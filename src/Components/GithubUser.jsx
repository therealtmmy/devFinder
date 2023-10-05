import React from 'react'
import { FaMapMarkerAlt, FaTwitter, FaLink, FaRegBuilding } from "react-icons/fa";
import "../Components/GithubUser.css"

const GithubUser = () => {
  return (
    <div className='User'>
        <div>
          <img src="https://avatars.githubusercontent.com/u/107879861?v=4" alt="avatar" />
        </div>

        <div>
          <div className='UserName'>
              <p style={{fontSize: "20px", fontWeight: "700"}}>The Octocat</p>
              <p>Joined 25 Jan 2011</p>
          </div>
              <a href="">@Octocat</a>
              <p>This profile has no bio</p>

          <div className='UserDetails'>
              <div>
                <p>Repos</p>
                <p style={{fontSize: "20px", fontWeight: "700"}}>8</p>
              </div>

              <div>
                <p>Followers</p>
                <p style={{fontSize: "20px", fontWeight: "700"}}>3938</p>
              </div>

              <div>
                <p>Following</p>
                <p style={{fontSize: "20px", fontWeight: "700"}}>9</p>
              </div>
          </div>

          <div className='UserSocials'>
            <div className='Social1'>
            <a href=""><FaMapMarkerAlt/> San Francisco</a>
               <a href=""><FaTwitter/> Not Available</a>
          
            </div>

              <div className='Social2'>
              <a href=""><FaLink/> https://github.blog</a>
             <a href=""><FaRegBuilding/> @github</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GithubUser
