import React, {useState, useEffect} from 'react';

// import { server } from '../../socker/sockerController';

export function GameBoard(){


    let [gameData, setGameData] = useState({activeSeat:3});

    // states valid for the seat to be in
    let validStates = ["empty", "seated", "staked", "revealed"];
    // dummy player data for 9 participants
    let playerData = [
        {
            name: "Tom",
            rank: 42,
            stack: 200,
            img: '/img/Tom.png'
        },
        {
            name: "Jane",
            rank: 47,
            stack: 300,
            img: '/img/jane.png'
        },
        {
            name: "Zara",
            rank: 32,
            stack: 150,
            img: '/img/user.png'
        },
        {},
        {
            name: "Bob",
            rank: 32,
            stack: 1500,
        },
        {},
        {
            name: "Jon",
            rank: 32,
            stack: 1500,
            img: '/img/jane.png'
        },
        {
            name: "Ryan",
            rank: 36,
            stack: 150,
            img: '/img/xixi.png'
        },
        {
            name: "Carlo",
            rank: 32,
            stack: 1500,
        },
        {
            name: "Oluwasbojimi",
            rank: 29,
            stack: 150,
            img: "/img/olu.png"
        }

    ]

    // dummy community cards for game use
    const comCards = [
        {
            id: 0,
            status: "revealed",
            value: 14,
        },
        {
            id: 1,
            status: "revealed",
            value: 42,
        },
        {
            id: 2,
            status: "revealed",
            value: 16,
        },
        {
            id: 3,
            status: "flip",
            value: 36,
        },
        {
            id: 4,
            status: "",
            value: null,
        },
    ];
    // seating assignment defaults
    const defSeats = [
        {
            id: 0,
            state: "empty",
            p: playerData[0],
            c: {one: 14, two: 42},
        },
        {
            id: 1,
            state: "empty",
            p: playerData[1],
            c: {one: 16, two: 36},
        },
        {
            id: 2,
            state: "empty",
            p: playerData[2],
            c: {one: 2, two: 30},

        },
        {
            id: 3,
            state: "empty",
            p: playerData[3],
            c: {one: 14, two: 42},
        },
        {
            id: 4,
            state: "empty",
            p: playerData[4],
            c: {one: 44, two: 11}
        },
        {
            id: 5,
            state: "empty",
            p: playerData[5],
            c: {one: 14, two: 42},
        },
        {
            id: 6,
            state: "empty",
            p: playerData[6],
            c: {one: 14, two: 42},
        },
        {
            id: 7,
            state: "empty",
            p: playerData[7],
            c: {one: 14, two: 42},
        },
        {
            id: 8,
            state: "empty",
            p: playerData[8],
            c: {one: 4, two: 1}
        },
        {
            id: 9,
            state: "empty",
            p: playerData[9],
            c: {one: 14, two: 42},
        },
       
        
        
    ];

    let [seats, setSeats] = useState(defSeats);


    // set community cards for display
    const communityCards = comCards.map((card) => 
        <li key={card.id}>
            {card.value === null ? <span className='card'>not dealt</span> 
            : <>
                {card.status === "revealed" ?
                    
                <span className='card'>{card.value}</span>
                :
                <span className='card'>?</span>
                }
            </>
            }
        </li>
    );

    // const defSeats = [
    //     {
    //         id: "0",
    //         state: validStates[2],

    //         p: playerData[0],
    //         c: {one: 14, two: 42},
    //     },
    //     {
    //         id: "1",
    //         state: validStates[2],
    //         p: playerData[1],
    //         c: {one: 16, two: 36},
    //     },
    //     {
    //         id: "2",
    //         state: validStates[3],
    //         p: playerData[2],
    //         c: {one: 2, two: 30},

    //     },
    //     {
    //         id: "3",
    //         state: validStates[0],
    //         p: playerData[3],
    //         c: {},
    //     },
    //     {
    //         id: "4",
    //         state: validStates[2],
    //         p: playerData[4],
    //         c: {one: 44, two: 11}
    //     },
    //     {
    //         id: "5",
    //         state: validStates[0],
    //         p: playerData[5],
    //         c: {},
    //     },
    //     {
    //         id: "6",
    //         state: validStates[1],
    //         p: playerData[6],
    //         c: {},
    //     },
    //     {
    //         id: "7",
    //         state: validStates[1],
    //         p: playerData[7],
    //         c: {},
    //     },
    //     {
    //         id: "8",
    //         state: validStates[1],
    //         p: playerData[8],
    //         c: {one: 4, two: 1}
    //     },
    //     {
    //         id: "9",
    //         state: validStates[1],
    //         p: playerData[9],
    //     },
       
        
        
    // ];

    function changeState(seat){

        console.log(seat.p.name, seats[seat.id]);

        let thisSeat = seats[seat.id];

        if(seat.state === validStates[0]){
            console.log("empty");

            //changing states
            thisSeat.state = validStates[1];

            // should load the player data into the seat
            thisSeat.p = playerData[seat.id];
            
        } else if(seat.state === validStates[1]){
            console.log("seated");

            //changing states
            thisSeat.state = validStates[2];

            // should allow the player to stake their hand

        } else if(seat.state === validStates[2]){
            console.log("staked");

            //changing states
            thisSeat.state = validStates[3];

            // should reveal the cards

        } else if(seat.state === validStates[3]){
            console.log("revealed");

            //changing states
            thisSeat.state = validStates[0];

            // should reset the seat
            thisSeat.p = {};

            console.log(gameData)

            // increment the active seat in the live game data
            setGameData[ gameData.activeSeat++ ];
        }
        
        if(seat.id){
            console.log(seat.id + " clicked");
        } else {
            console.log("empty seat clicked - sit down");
        }

        setSeats([...seats]);
    }

    // setup view for each player
    const listSeats = seats.map((seat) => 
        <li 
            key={seat.id} 
            data-key={seat.id}
            className={seat.id === gameData.activeSeat ? "active" : ""}
            onClick={() => {changeState(seat)}}
        >
            {
                seat.state !== "empty" ?
            <div className="playerContainer">
                {seat.p.img ? 
                    <img src={seat.p.img} alt='seat' /> 
                    : 
                    <img src='/img/user.png' alt='seat' />
                }
                {seat.p.name} ({seat.p.stack})
                <span className='rankBadge'>{seat.p.rank}</span>

                {seat.state === validStates[1] ?
                    <div className="hand"><span className='stakeHandBtn'>Stake Hand</span></div>
                : null }

                {seat.state === validStates[2] ? <div className="hand">
                    <span className='card'>XX</span>
                    <span className='card'>YY</span>
                </div> : ""}

                {seat.state === validStates[3] ? <div className="hand">
                    <span className='card'>{seat.c.one}</span>
                    <span className='card'>{seat.c.two}</span>
                </div> : ""}

                
            </div> :
            <div className="playerContainer">
                <span>(+Sit {seat.id}) <br/>Empty Seat</span>
            </div>
            }
        </li>
    );

    // Simple rule: hand is staked, when more than 1 player has staked, timer button becomes active
    // When timer button is clicked, the game is completed and the winner is determined
    // players get hands based on their NFT staked using a smart contract algorithm 
    // the winner gets the pot (in CP) and the dealer gets a small fee (in CP)

    return(
        <div className="gameBoard">    

            {/* <h3>Players</h3> */}
            <div className="playerField">
                <ul className="seats">
                    {listSeats}
                </ul>
            </div>

            <div className="clear"></div>

            <ul className="gameInfo">
                <li className="hidden">Game ID: 123456789</li>
                <li>Game Name: Texas One-Shot</li>
                <li className="hidden">Game Type: Stake Your hand and click timer to auto-complete</li>
                <li>Game Status: In Progress</li>
                <li>Game Pot: $100</li>
                <li>Game Dealer (1st): Tom</li>
            </ul>

            <div className="clear"></div>

            
            <ul title="Community Cards" className="communityCards">
                {communityCards}
            </ul>
            
        </div>
    )

}