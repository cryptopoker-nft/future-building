import { useNavigate } from "react-router-dom";


export function ButtonAsset(props) {

  let navigate = useNavigate();

    let rSrc = "./src/assets/r1.png";
    let aSrc = "./src/assets/a1.png";
    let cls = "one";
    let triggerUrl = "https://cryptopoker.justplay.cafe";

    // let scrollAsset = () => elmntToView.scrollIntoView();

    let scrollAsset = () => window.open(triggerUrl)
  
    // if(props.num === '1'){
    //   rSrc = "./src/assets/r1.png";
    //   aSrc = "./src/assets/a1.png";
    // } else 
    
    if(props.num === '2'){
      rSrc = "./src/assets/r2.png";
      aSrc = "./src/assets/a2.png";
      cls="two";
      triggerUrl = "#lobby";
      // override
     //  scrollAsset = () => document.getElementById('lobby').scrollIntoView();
      scrollAsset = () => navigate('/lobby');

    } else if(props.num === '3'){
      rSrc = "./src/assets/r3.png";
      aSrc = "./src/assets/a3.png";
      cls="three";
      triggerUrl = "mailto:help@justplay.cafe";
    }
  
      return(
        <li onClick={ scrollAsset }>
          <img className="bgAnim" src={rSrc} alt="Rectangle Bg." />
          <img className="btnArt" src={aSrc} alt="Button Art" />
          <p className={cls}>{props.name}</p>
        </li>
      );
  
  }