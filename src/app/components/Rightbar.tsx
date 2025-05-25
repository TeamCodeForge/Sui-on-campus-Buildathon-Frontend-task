import React from 'react'

const Rightbar = () => {
  return (
    <div className="right-flex-container flex-item">
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search Twitter" className='text-black'/>
      </div>

      <div className="trends">
        <ul>
          <li className="nav-list header">
            <h2 className='text-black'>Trends for you</h2>
            <i className="fas fa-cog">
          </i>
          </li>
          <li className="nav-list">
            <div className="trend-list">
              <p className="sub-text">Trending in Naija</p>
              <p className="main-text">#BBNaija</p>
              <p className="sub-text">274K Tweets</p>
            </div>
            <div className="trend-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
          </li>
          <li className="nav-list">
            <div className="trend-list">
              <p className="sub-text">Trending in Naija</p>
              <p className="main-text">#TaylorSwift</p>
              <p className="sub-text">154K Tweets</p>
            </div>
            <div className="trend-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
          </li>
          <li className="nav-list">
            <div className="trend-list">
              <p className="sub-text">Trending in Naija</p>
              <p className="main-text">#Lover</p>
              <p className="sub-text">135K Tweets</p>
            </div>
            <div className="trend-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
          </li>
          <li className="nav-list">
            <div className="trend-list">
              <p className="sub-text">Trending in Naija</p>
              <p className="main-text">#Dora</p>
              <p className="sub-text">124K Tweets</p>
            </div>
            <div className="trend-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
          </li>
          <li className="nav-list">
            <div className="trend-list">
              <p className="sub-text">Trending in Naija</p>
              <p className="main-text">#TGIF</p>
              <p className="sub-text">43K Tweets</p>
            </div>
            <div className="trend-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
          </li>
          
          
          <li className="nav-list"><a href="#">Show more</a></li>
        </ul>
      
      </div>

      <div className="right-footer">
        <div className="footer-links">
          <a href="#" className="sub-text">Terms</a>
          <a href="#" className="sub-text">Privacy policy</a>
          <a href="#" className="sub-text">Ads info</a>
          <a href="#" className="sub-text">more</a>
          <i className="fas fa-chevron-down sub-text"></i>
        </div>
        <div className="footer-copyright">
          <p className="sub-text">&copy; 2020 Twitter, Inc.</p>
        </div>

      </div>
    
    </div>
  )
}

export default Rightbar