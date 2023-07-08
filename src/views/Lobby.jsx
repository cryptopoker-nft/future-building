import { LobbyHeader } from '../components/LobbyHeader';
import { SideNav } from '../components/SideNav';
import { UserBadge } from '../components/UserBadge';
import { ScoreBoard } from '../components/ScoreBoard';
import { Leaderboard } from '../components/Leaderboard';
import { FriendsList } from '../components/FriendsList';

export function Lobby() {
    return (
      <div className="lobbyContent">
        <div className="leftSide">
          <a id="lobby" name="lobby"></a>
          <UserBadge name="Zara" />
          <SideNav />
        </div>
        <div className="rightSide">
          <LobbyHeader />
          
          <div className="scoreContent">
  
            <ScoreBoard />

            <Leaderboard />

          </div>

          <FriendsList />
        </div>
      </div>
        
    )
  }