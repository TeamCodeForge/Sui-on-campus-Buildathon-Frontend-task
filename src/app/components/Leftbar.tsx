import React from 'react'
import { Navlinks } from '../constants/page'


const Leftbar = () => {
  return (
    <div className="left-flex-container flex-item">
        <div className="nav-links">
        <ul>
        {Navlinks.map((link, index) => (
          <li key={index} className={`nav-items ${link.linkclass}`}>
            <a href="#">
              <i className={link.icon}></i> {link.content}
            </a>
            </li>
        ))}
        </ul>
        
        </div>
      <div className="tweet"><a href="#">Tweet</a></div>
      <div className="profile-box">
        <img width= 'auto' height = 'auto' src="/profile.jpg" alt="profile"/>
        <div className="profile-link">
          <p className="full-name text-black">David Herbert</p>
          <p className="user-name">@king.david</p>
        </div>
        <div className="options-icon"><i className="fas fa-caret-down"></i></div>
      </div>
    </div>
  )
}

export default Leftbar