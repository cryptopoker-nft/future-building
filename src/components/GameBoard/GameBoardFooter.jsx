import React from 'react';
import { Button, Slider } from '@mui/material';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export function GameBoardFooter() {

    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="gameBoardFooter">
            <div className="gameBoardFooterLeft">
                {/* <h3>Chat</h3> */}
                <div className="chatContainer">
                    <div className="messageHistory">
                        <div className="message">
                            <div className="messageAvatar">
                                <img src="/img/jane.png" alt="Avatar" />
                            </div>
                            <div className="messageContent">
                                <div className="messageName">
                                    Zara
                                </div>
                                <div className="messageText">
                                    Hi, I'm Zara!
                                </div>
                                <div className="messageTime">
                                    10:00
                                </div>
                            </div>
                        </div>
                        <div className="response">
                            <div className="messageAvatar">
                                <img src="/img/Tom.png" alt="Avatar" />
                            </div>
                            <div className="messageContent">
                                <div className="messageName">
                                    Tom
                                </div>
                                <div className="messageText">
                                    It's great to meet you!
                                </div>
                                <div className="messageTime">
                                    10:03
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="messageInput">
                        <input type="text" placeholder="Type your message here..." />
                        <Button variant="outline" color="primary" className="messageSendBtn">
                            <img src="/img/ico/send.png" alt="Send" /> SEND
                        </Button>
                    </div>
                </div>
            </div>
            <div className="gameBoardFooterCenter">
                {/* <h3>Game Actions</h3> */}
                <div className="betSlider">
                    <Slider
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={200}
                    />
                    <div className="betSliderButtons">
                        <Button variant="outlined" color="primary" className="betSliderButton" disabled>
                            <img src="/img/ico/fold.png" alt="Fold" />&nbsp;  
                            Fold
                        </Button>
                        <Button variant="contained" color="error" className="betSliderButton">
                            <img src="/img/ico/check.png" alt="Check" />&nbsp;
                            Check
                        </Button>
                        <Button variant="contained" color="success" className="betSliderButton">
                            <img src="/img/ico/raise.png" alt="Raise" />&nbsp;
                            Raise
                        </Button>
                    </div>
                </div>
            </div>
            <div className="gameBoardFooterRight">
                {/* <h3>Game Notifications</h3> */}
                <p>
                    <img src="/img/ico/bell.png" alt="Notifications" />
                    Hi, you have full house!
                </p>
                <div className="notificationContainer">

                    <div className="notification">
                        <div className="notificationName">
                            Zara
                        </div>
                        :
                        <div className="notificationMessage">
                            1 Win
                        </div>
                    </div>

                    <Button variant="contained" color="secondary" className="notificationButton">
                        OK
                    </Button>

                </div>
            </div>

        </div>
    )
}