import React from 'react'
import { FaMapMarkerAlt, FaTwitter, FaLink, FaRegBuilding } from "react-icons/fa";

const GithubUser = () => {
  return (
    <>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <div>
              <p>The Octocat</p>
              <p>Joined 25 Jan 2011</p>
          </div>
              <p>@Octocat</p>
              <p>This profile has no bio</p>

          <div>
              <div>
                <p>Repos</p>
                <p>8</p>
              </div>

              <div>
                <p>Followers</p>
                <p>3938</p>
              </div>

              <div>
                <p>Following</p>
                <p>9</p>
              </div>
          </div>

          <div>
            <a href=""><FaMapMarkerAlt/> San Francisco</a>
            <a href=""><FaTwitter/> Not Avaiable</a>
            <a href=""><FaLink/> https://github.blog</a>
            <a href=""><FaRegBuilding/> @github</a>
          </div>
        </div>
    </>
  )
}

export default GithubUser
