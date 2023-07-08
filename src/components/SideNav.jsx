export function SideNav() {
    return(
      <ul className="sideNav">
        <li>
          <a href="https://cryptopoker.justplay.cafe" target="_blank">
            <img src="/nfts.png" alt="NFTs Icon" />
            <p>NFTs</p>
          </a>
        </li>
        <li>
          <img src="/wallet.png" alt="Wallet Icon" />
          <p>Wallet</p>
        </li>
        <li>
          <img src="/rules.png" alt="Rules Icon" />
          <p>Rules</p>
        </li>
        <li>
          <img src="/games.png" alt="Games Icon" />
          <p>Games</p>
        </li>
      </ul>
    );
  }