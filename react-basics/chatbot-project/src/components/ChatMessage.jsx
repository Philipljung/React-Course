import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';
import dayjs from "dayjs";
import { useState, useEffect } from 'react';

 function ChatMessage({ message, sender}) {
          // const message = props.message;
          // const sender = props.sender;               ## Alternative way to get props
          // const { message, sender } = props;
        /*
          if (sender === 'robot') {
            return (
              <div>
                <img width="50" src="robot.png"/>.   
                {message}
              </div>
            );
          }
        */

        const [time, setTime] = useState();

        useEffect(() => {
            setTime(dayjs().format('HH:mm:ss'));    //sets the time
        }, [time])

          
          
          return (
            <div className={
              sender === 'user' 
                ? 'chat-message-user' 
                : 'chat-message-robot'
            }>
              {sender === 'robot' && (
                <img src={RobotProfileImage}
                className="chat-message-profile"
                />
              )}
              <div className="chat-message-text">
                {message}
                <p className={sender === 'user' ? 'timeElementUser' : 'timeElementRobot'}>
                    Sent at {time}
                </p>
              </div>
              {sender === 'user' && (
                <img src={UserProfileImage}
                className="chat-message-profile"
                />
              )}
            </div>
          );
        }

export default ChatMessage