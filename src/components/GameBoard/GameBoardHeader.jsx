import { useNavigate } from 'react-router-dom'; 

export function GameBoardHeader() {

    const navigate = useNavigate();
    return (
            <div className="gameBoardHeader">
                <ul>
                    <li>Game</li>
                    <li><img src='/img/clock.png' alt='clock' /> 00:30</li>
                    <li
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("/")}
                    ><img src='/img/exit.png' alt='exit' /> Exit</li>
                    <li
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("/lobby")}
                    ><img src='/img/back.png' alt='back' /></li>
                </ul>
            </div>
        )
}           
            
            
            