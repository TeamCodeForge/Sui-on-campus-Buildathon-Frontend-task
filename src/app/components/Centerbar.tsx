import React from 'react';
import Image from "next/image"
import { Tweets } from "../constants/page"
import Injectedsection from "./Injectedsection"

const Centerbar = () => {
  return (
    <div className="center-flex-container flex-item">
      <div className="home">
        <h1>Home</h1>
        <i className="fas fa-magic"></i>
      </div>

      <div className="post-tweet">
        <form action="">
          <div className="form-group-1">
            <img
            className="w-auto h-auto" 
            src="/profile.jpg" 
            alt="profile-pics"
            />
            <input type="text" placeholder="What's happening?" className="text-black"/>
          </div>
          <div className="form-group-2">
            <div className="post-icons">
              <i className="far fa-image"></i>
              <i className="far fa-file-image"></i>
              <i className="fas fa-stream"></i>
              <i className="far fa-smile"></i>
              <i className="far fa-calendar-check"></i>
            </div>
            <button className="btn" type="submit">Tweet</button>
          </div>
        </form>

      </div>
      {/* <!-- User Content --> */}

      {Tweets.map((tweet, index) => (
        
        <React.Fragment key={index}>
            {index === 4 && <Injectedsection />}
            
        <div className="tweets" key={index}>
          <div className="user-pics"><img src={tweet.userPic} alt={`user${index + 1}`}/></div>
          <div className="user-content-box pl-4">
            <div className="user-names">
              <h1 className="full-name">{tweet.fullName}</h1>
              <p className="user-name">{tweet.userName}</p>
              <p className="time"> . {tweet.time}</p>
            </div>
            
            <div className="user-content">
              <p>{tweet.content}</p>
              {tweet.contentImage && <img width='auto' height='auto' src={tweet.contentImage} alt={`content${index + 1}`}/>}
            </div>

            <div className="content-icons">
              <i className="far fa-comment blue"> {tweet.comments}</i>
              <i className="fas fa-retweet green"> {tweet.retweets}</i>
              <i className="far fa-heart red"> {tweet.likes}</i>
              <i className="fas fa-chevron-up blue"></i>
            </div>
            </div>
        </div>
        </React.Fragment>
      ))}

        <div className="pagnation">
          <a href="#">Load more</a>
        </div>

    </div>

  )
}

export default Centerbar