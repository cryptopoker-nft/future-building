import lightLogo from '/img/logo-light.png';
import darkLogo from '/img/logo-dark.png';
import buyBtn from '/img/buyCP.png';

import leftSideBg from '/img/profile-left.png';
import rightSideBg from '/img/profile-right.png';

import { RightSideNav } from '../components/RightSideNav';
import { UserBadgeDetail } from '../components/UserBadge';

import { useNavigate } from 'react-router-dom';

let backBtn = "Back to Lobby";

export function Profile() {

  let navigate = useNavigate();

    return (
      <div className="profile">
        <header>
          <div className="mainLogoContainer">
            <img onClick={ () => navigate('/') } className="mainLogo" src={lightLogo} alt="Cryptopoker: Play Crypto" />
            <img onClick={ () => navigate('/') } className="mainLogo darkLogo" src={darkLogo} alt="Cryptopoker: Play Crypto" />
          </div>
    
          <RightSideNav />
    
          <div className="buyCPbtn">
            <img src={buyBtn} alt="Dynamic Button - depends on view: use Route" />
          </div>
        </header>
        {/* <h1>Profile</h1> */}
        <div className="profileContainer">
          <img src={rightSideBg} alt="right-side bg" />
          <UserBadgeDetail name="Zara" />
          <img src={leftSideBg} alt="left-side bg" />
        </div>

        <div className='lowerProfile'>
          <div className='profileHighlights'>
            <ul>
              <li>
                Round Particpation <br />
                <img src="/img/game-badge.png" alt="game badge" />
                <span>10</span>
              </li>
              <li>
                Games Won <br />
                <img src="/img/won-badge.png" alt="won badge" />
                <span>10</span>
              </li>
              <li>
                Hands Played <br />
                <img src="/img/hand-badge.png" alt="hand badge" />
                <span>10</span>
              </li>
            </ul>
          </div>

          <div className='winPct'>
            <header>
              <h2>Wins</h2>
              <h2>8</h2>
            </header>
            <div className='profDetailRow'>
              <h3>
                <img src="/img/game-icon.png" alt="game icon" /> 
                &nbsp; Weekly Games
              </h3>
              
              <div className='progressBar gameBar'>
                <div></div>
              </div>
            </div>
            <div className='profDetailRow'>
              <h3>
              <img src="/img/tourney-icon.png" alt="tournament icon" className="tIcon" /> 
                &nbsp; Tournament Games
              </h3>

              <div className='progressBar tourneyBar'>
                <div></div>
              </div>
            </div>
          </div>

          <div className='winPct playTime'>
            <header>
              <h2>Played Time</h2>
              <h2>357 Hr</h2>
            </header>
            <div className='profDetailRow'>
              <h3>
                <img src="/img/game-icon.png" alt="game icon" /> 
                &nbsp; Weekly Games
              </h3>
              
              <div className='progressBar g2Bar'>
                <div></div>
              </div>
            </div>
            <div className='profDetailRow'>
              <h3>
              <img src="/img/tourney-icon.png" alt="tournament icon" className="tIcon" /> 
                &nbsp; Tournament Games
              </h3>

              <div className='progressBar t2Bar'>
                <div></div>
              </div>
            </div>
          </div>

          <div className='topHands'>
            <header>
              <h2>Top Hands</h2>
              <h2>&nbsp;</h2>
            </header>
          </div>
        </div>

        {/* <div className="leftSide">
          <a id="lobby" name="lobby"></a>
          <UserBadge name="Zara" />
          <SideNav />
        </div>
        <div className="rightSide">
          <LobbyHeader />
          
          <div className="gameContent">
  
            <GameBoard />

            <Leaderboard />

          </div>

          <FriendsList />
        </div> */}
      </div>
        
    )
  }