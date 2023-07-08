import { RightSideNav } from "./RightSideNav"
import { useNavigate } from 'react-router-dom';

import buyBtn from '/img/buyCP.png';
import lightLogo from '/img/logo-light.png';
import darkLogo from '/img/logo-dark.png';

export function CommonHeader() {

    const navigate = useNavigate();
    
    return (
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
    )
} 