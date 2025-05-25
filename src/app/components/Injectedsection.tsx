import { Follow } from "../constants/page"

const Injectedsection = () => {
  return (
     <section className="follow-users-box">

          <div className="follow-header">
            <h1 className="main-text">Who to follow</h1>
            <i className="fas fa-chevron-down"></i>
          </div>

          {Follow.map((user, index) => (
            <div className="follow-user" key={index}>
                <div className="related-followers">
                    <p className="sub-text"><i className="fas fa-user"></i> {user.relatedFollowers}</p>
                </div>
    
                <div className="user-profile">
                    <div className="user-pics"><img width= 'auto' height = 'auto' src={user.userPic} alt={`user${index + 1}`}/>
                    </div>
    
                    <div className="user-profile-content pl-4">
                    <div className="title-container">
                        <div className="user-names">
                        <div className="full-name"><h1 className="main-text">{user.fullName}</h1></div>
                        <div className="user-name"><p className="sub-text">{user.userName}</p></div>
                        </div>
    
                        <div className="follow-btn"><a href="#">follow</a></div>
    
                    </div>
                    <div className="bio-container">
                        <p className="text-black">
                            {user.link1 && <a href="#">{`${user.link1} `}</a>} 
                            {user.bio1 && <span>{`${user.bio1} `}</span>}
                            {user.link2 && <a href="#">{`${user.link2} `}</a>} 
                             {user.bio2 && <span>{`${user.bio2} `}</span>}
                            {user.link3 && <a href="#">{`${user.link3} `}</a>}  
                            {user.link4 && <a href="#">{`${user.link4} `}</a>} 
                             {user.bio3 && <span>{`${user.bio3} `}</span>}
                            {user.link5 && <a href="#">{`${user.link5} `}</a>}
                            
                            
                        </p>
                    </div>
                    
                    </div>
    
                </div>
            </div>
          ))}


          <div className="follow-footer">
            <a href="#">Show more</a>
          </div>

        </section>
  )
}

export default Injectedsection