import tokenBadge from '/tokenBadge.png'
import scoreBadge from '/scoreBadge.png'

import { users } from '../data/users';

import { useNavigate } from "react-router-dom";

export function UserBadge(props) {
    // display user profile, name, tokens and score
    let navigate = useNavigate();

    let goProfile = () => navigate('/profile');

    // let username = "Zara";
    let myUser = {
      name: "Zara",
      img: "user.png",
      tokens: 0,
      score: 0
    };
    let imgSrc = "/img/user.png";

    users.map((user) => {
      if(user.name === props.name) {
        // it's me
        // console.log(user)
        myUser = user;
        imgSrc = "/img/" + myUser.img;
      }
    });

    


    return (
      <div className="userBadge">
        <a onClick={ goProfile } style={{ cursor:"pointer" }}>
          <img className="userImg" src={imgSrc} alt="User Profile" />
          <p className="userName">{myUser.name}</p>
        </a>
        <div className="userDetails">
          <img src={tokenBadge} alt="Tokens" />
          <p className="userTokens">{myUser.tokens}</p>
          <img src={scoreBadge} alt="Score" />
          <p className="userScore">{myUser.score}</p>
        </div>
      </div>
    )
  
  }

export function UserBadgeDetail(props) {
  // display user profile, name, tokens and score

  // let username = "Zara";
  let myUser = {
    name: "Zara",
    img: "user.png",
    tokens: 0,
    score: 0
  };
  let imgSrc = "/img/user.png";

  users.map((user) => {
    if(user.name === props.name) {
      // it's me
      // console.log(user)
      myUser = user;
      imgSrc = "/img/" + myUser.img;
    }
  });

  


  return (
    <div className="userBadge">
     
      <img className="userImg" src={imgSrc} alt="User Profile" />
      
      <div className="userDetails">
        <p className="userName">{myUser.name}</p>
        <p className="userTokens"><img src={tokenBadge} alt="Tokens" /> {myUser.tokens}</p>
        <p className="userScore"><img src={scoreBadge} alt="Score" /> {myUser.score}</p>
      </div>
    </div>
  )

}