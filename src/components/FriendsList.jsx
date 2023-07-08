import { users } from '../data/users.jsx';
import tokenBadge from '/tokenBadge.png';

export function FriendsList() {
    return(
      <div className="friendsListContainer">
        <div className="friendsListHeader">
          <h3>Friends List</h3>
          <button>Invite Friends</button>
          <button>Friend's Chat</button>
        </div>
        <div className="friendsList">
          
          <ul>
            <li><span> prev </span></li>
            {
                users.map((user, index) => {

                    let imageSrc = '/img/'+ user.img;

                    if(user.isFriend) {

                    return(
                        <li key={index}>
                            <div className="userProfile">
                                <h4>{user.name}</h4>
                                <div className="daoBadge">DAO</div>
                                <div className="userProfileImage">
                                    <img src={imageSrc} alt="user profile" />
                                </div>
                                <div className="userProfileData">
                                    <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> {user.tokens}</p>
                                </div>
                            </div>
                        </li>
                    )

                    } else {
                        return null;
                    }


                })
            }




            {/* <li>
              <div className="userProfile">
                <h4>Oluwasijibomi</h4>
                <div className="daoBadge">DAO</div>
                <div className="userProfileImage">
                    <img src={userImg} alt="user profile" />
                </div>
                <div className="userProfileData">
                    
                    <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> 00005</p>
                </div>
              </div> 
            </li>
            <li>
              <div className="userProfile">
                <h4>Tom</h4>
                <div className="daoBadge">DAO</div>
                <div className="userProfileImage">
                    <img src={userImg} alt="user profile" />
                </div>
                <div className="userProfileData">
                    <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> 00005</p>
                </div>
              </div> 
            </li>
            <li>
              <div className="userProfile">
                <h4>Xiximes</h4>
                <div className="daoBadge">DAO</div>
                <div className="userProfileImage">
                    <img src={userImg} alt="user profile" />
                </div>
                <div className="userProfileData">
                    <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> 00005</p>
                </div>
              </div> 
            </li>
            <li>
              <div className="userProfile">
                <h4>Cooper</h4>
                <div className="daoBadge">DAO</div>
                <div className="userProfileImage">
                    <img src={userImg} alt="user profile" />
                </div>
                <div className="userProfileData">
                    <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> 00005</p>
                </div>
              </div> 
            </li>
            <li>
              <div className="userProfile">
                <h4>Jane</h4>
                <div className="daoBadge">DAO</div>
                <div className="userProfileImage">
                    <img src={userImg} alt="user profile" />
                </div>
                <div className="userProfileData">
                    <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> 00005</p>
                </div>
              </div> 
            </li> */}
            <li><span> next </span></li>
          </ul>
        </div>
      </div>
    )
  }