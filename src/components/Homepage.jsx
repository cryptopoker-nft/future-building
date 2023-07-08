import { ButtonAsset } from "./ButtonAsset";
import lightLogo from "../assets/logo-light.png";
import darkLogo from "../assets/logo-dark.png";
import bottomTable from "../assets/bottom-light.png";

export function Homepage() {
    return (
      <div className="homeContent">
        <div className="Top">
          <img className="mainLogo" src={lightLogo} alt="Cryptopoker: Play Crypto" />
          <img className="mainLogo darkLogo" src={darkLogo} alt="Cryptopoker: Play Crypto" />
        </div>
        <div className="Bottom">
          {/* <a href="https://cryptopoker.justplay.cafe" target="_blank">
            <img className="hero" src="./src/assets/hero-light.png" alt="hero-graphic" />
          </a> */}
          <ul className='threeCol'>
            <ButtonAsset num='1' name='Play Demo' cls='one' />
            <ButtonAsset num='2' name='Crypto Poker' cls='two' />
            <ButtonAsset num='3' name='Upcoming Game' cls='three' />
            {/* <li>
              <img className="bgAnim" src="./src/assets/r1.png" alt="" />
              <img className="btnArt" src="./src/assets/a1.png" alt="" />
              <p>Learn with Demo</p>
            </li> */}
            {/* <li>
              <img className="bgAnim" src="./src/assets/r2.png" alt="" />
              <img className="btnArt" src="./src/assets/a2.png" alt="" />
              <p>Crypto Poker</p>
            </li>
            <li>
              <img className="bgAnim" src="./src/assets/r3.png" alt="" />
              <img className="btnArt" src="./src/assets/a3.png" alt="" />
              <p>Upcoming Game</p>
            </li> */}
          </ul>
          <img className="bottom" src={bottomTable} alt="Play Crypto Table Graphic" />
        </div>
      </div>
    );
  }