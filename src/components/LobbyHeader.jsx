import { RightSideNav } from './RightSideNav';
import lightLogo from '/img/logo-light.png';
import darkLogo from '/img/logo-dark.png';
import buyBtn from '/img/buyCP.png';

import { useNavigate } from "react-router-dom";

export function LobbyHeader() {

  let navigate = useNavigate();

    return(
      <div className="gameHeader">
        <div className="mainLogoContainer">
          <img onClick={ () => navigate('/') } className="mainLogo" src={lightLogo} alt="Cryptopoker: Play Crypto" />
          <img onClick={ () => navigate('/') } className="mainLogo darkLogo" src={darkLogo} alt="Cryptopoker: Play Crypto" />
        </div>
  
        <RightSideNav />
  
        <div className="buyCPbtn">
          <img src={buyBtn} alt="Buy CP" />
        </div>
      </div>
    )
  }