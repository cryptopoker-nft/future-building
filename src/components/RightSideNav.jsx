import darkToggle from '/img/lightbg-btn.png'
import { darkToggleEnable } from '../functions/darkToggleEnable';

export function RightSideNav() {
    return (
      <div className="rightSideNav">
        <ul>
          <li>
            <img src="/img/mail.png" alt="Mail Icon" />
          </li>
          <li>
            <img src="/img/sound.png" alt="Sound Icon" />
          </li>
          <li>
            <img
              src={darkToggle}
              className="darkToggle"
              onClick={darkToggleEnable}
              alt="D/L btn left"
             />
          </li>
          <li>
            <img src="/img/settings.png" alt="Settings Icon" />
          </li>
          <li>
            <img src="/img/info.png" alt="Information Icon" />
          </li>
        </ul>
      </div>
    )
  }