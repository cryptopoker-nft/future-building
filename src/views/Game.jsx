import lightLogo from '/img/logo-light.png';
import darkLogo from '/img/logo-dark.png';
import buyBtn from '/img/buyCP.png';

import leftSideBg from '/img/profile-left.png';
import rightSideBg from '/img/profile-right.png';

import { RightSideNav } from '../components/RightSideNav';
import { UserBadgeDetail } from '../components/UserBadge';
import { CommonHeader } from '../components/CommonHeader';

import { GameBoardHeader } from '../components/GameBoard/GameBoardHeader';
import { GameBoard } from '../components/GameBoard/GameBoard';
import { GameBoardFooter } from '../components/GameBoard/GameBoardFooter';

import { useNavigate } from 'react-router-dom';

let backBtn = "Back to Lobby";

export function Game() {

  let navigate = useNavigate();

    return (
      <div className="game">
        <CommonHeader />
        {/* <header>
          <div className="mainLogoContainer">
            <img onClick={ () => navigate('/') } className="mainLogo" src={lightLogo} alt="Cryptopoker: Play Crypto" />
            <img onClick={ () => navigate('/') } className="mainLogo darkLogo" src={darkLogo} alt="Cryptopoker: Play Crypto" />
          </div>
    
          <RightSideNav />
    
          <div className="buyCPbtn">
            <img src={buyBtn} alt="Dynamic Button - depends on view: use Route" />
          </div>
        </header> */}
        {/* <p>Game</p> */}

        <div className="gameBoardContainer">

            <GameBoardHeader />

            {/* <div className="gameBoardHeader">
                <ul>
                    <li
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("back")}
                    >back</li>
                    <li>[ico] Exit</li>
                    <li>[clock-ico] 00:30</li>
                </ul>
            </div> */}
            <GameBoard />
            <img 
              className="gameBoardMock"
              src='/img/game-mock.png' 
              alt="game board"
            />


        </div>

        <GameBoardFooter />

        {/* <div className="gameBoardFooter">
            <div className="gameBoardFooterLeft">
                <h3>Chat</h3>
            </div>
            <div className="gameBoardFooterCenter">
                <h3>Game Actions</h3>
            </div>
            <div className="gameBoardFooterRight">
                <h3>Game Notifications</h3>
            </div>

        </div> */}
      </div>
        
    )
  }