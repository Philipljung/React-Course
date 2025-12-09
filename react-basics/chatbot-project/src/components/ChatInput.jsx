import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingSpinnerGif from '../assets/loading-spinner-gif.gif';
import './ChatInput.css';


export function ChatInput({ chatMessages, setChatMessages, onClear }) {
        const [inputText, setInputText] = useState('');
        // const [isLoading, setIsLoading] = useState(false);


        function saveInputText(event) {
          setInputText(event.target.value);
        }

        

       async function sendMessage() {
        
          const newChatMessages = [ 
            
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]

          setChatMessages(newChatMessages);
          setInputText('');

          setChatMessages([
            ...newChatMessages, {
              message: <img 
                className="loading-img"
                src={LoadingSpinnerGif}
              />,

              sender: 'robot',
              id: crypto.randomUUID()
            } 
          ])

            const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
              ...newChatMessages,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);
            
        }

        function resetInputField() {
          setInputText('');
        }

        function handleKeyDown (event) {
          {event.key === 'Enter' && sendMessage()}
          {event.key === 'Escape' && resetInputField()}
        }
        
        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to chatbot" 
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
              className="chat-input"
            />
            <button
            onClick={sendMessage}
            className="send-button"
            >Send</button>
            <button
            onClick={onClear}
            className="clear-button"
            >Clear</button>
          </div>
      );
      }

export default ChatInput