import tokenBadge from '/tokenBadge.png';

import { users } from '../data/users.jsx';

export function Leaderboard() {
    return(
        <div className="leaderboard">
            <h3>Leaderboard</h3>
            <div className="userProfiles">

            {
                users.map((user, index) => {
                    // console.log(index, user);
                    let imageSrc = '/img/'+ user.img;

                    return(
                    <div key={index} className="userProfile">
                        <div className="rankBadge">{index}</div>
                        <div className="userProfileImage">
                            <img src={imageSrc} alt="user profile" />
                        </div>
                        <div className="userProfileData">
                            <h4>{user.name}</h4>
                            <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> {user.tokens}</p>
                        </div>
                    </div> 
                    )
                })
            }
            
            </div>
        </div>
    )
}