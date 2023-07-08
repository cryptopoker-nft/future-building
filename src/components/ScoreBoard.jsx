import { useNavigate } from "react-router-dom";

export function ScoreBoard() {

    const navigate = useNavigate();

    return(
        <div className="scoreBoardContainer">
            
            <div className="scoreBoardHeader">
                <ul>
                    <li
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("/game")}
                    >
                        Create Game
                    </li>
                    <li
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("/game")}
                    >
                        Seat & Go
                    </li>
                    <li 
                        className="active"
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("/game")}
                    >
                        Weekly Game
                    </li>
                    <li
                        style={{cursor: "pointer"}}
                        onClick={() => navigate("/game")}
                    >
                        Tournaments
                    </li>
                </ul>
            </div>
            <div className="scoreBoard">
                <table>
                    <thead>
                        <tr>
                            <th>Table</th>
                            <th>Rate</th>
                            <th>Game</th>
                            <th>Players</th>
                            <th>Average Stack</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table no 1</td>
                            <td><span>200/200</span></td>
                            <td>Limited Holding</td>
                            <td><span>7/10</span></td>
                            <td><span>5000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 2</td>
                            <td><span>150/200</span></td>
                            <td>Unlimited</td>
                            <td><span>8/10</span></td>
                            <td><span>5000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 3</td>
                            <td><span>200/200</span></td>
                            <td>Limited Holding</td>
                            <td><span>7/10</span></td>
                            <td><span>5000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 4</td>
                            <td><span>200/200</span></td>
                            <td>Limited Holding</td>
                            <td><span>8/10</span></td>
                            <td><span>5000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 5</td>
                            <td><span>200/200</span></td>
                            <td>Limited Holding</td>
                            <td><span>7/10</span></td>
                            <td><span>3000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 7</td>
                            <td><span>150/200</span></td>
                            <td>Unlimited</td>
                            <td><span>8/10</span></td>
                            <td><span>23000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 6</td>
                            <td><span>200/200</span></td>
                            <td>Limited Holding</td>
                            <td><span>7/10</span></td>
                            <td><span>2000</span></td>
                        </tr>
                        <tr>
                            <td>Table no 8</td>
                            <td><span>200/200</span></td>
                            <td>Limited Holding</td>
                            <td><span>8/10</span></td>
                            <td><span>5000</span></td>
                        </tr>
                    </tbody>
                </table>
                <button className="startGame">Start Game</button>
            </div>
            
            
        </div>
    )
}