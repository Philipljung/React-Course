import { useState, useEffect } from 'react';
import ChatInput from './components/ChatInput';
import WelcomeMessage from './components/WelcomeMessage';
import ChatMessages from './components/ChatMessages';
import ChatMessage from './components/ChatMessage';
import './App.css'
import { Chatbot } from 'supersimpledev';

        function App() {
          const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages') || [{
            message: 'hello, chatbot',
            sender: 'user',
            id: 'id1',
          }]))

          function handleClear () {
            // console.log('Abu Muhammed')
            setChatMessages([]);
          }

                                               //    ^
        // const [chatMessages, setChatMessages] = array; ## shortcut again
        //  const chatMessages = array[0];         ^
        //  const setChatMessages = array[1];     ##Shortcut for this
        useEffect(() => {
          localStorage.setItem('messages', JSON.stringify(chatMessages))
        }, [chatMessages]);
          

          useEffect (() => {
            Chatbot.addResponses({
              'Goodbye!': 'Goodbye, have a great time!',
              'Give me a random ID': function () {
                return (
                `Sure! Here it is: ${crypto.randomUUID()}`
                )
              },
              'Who is Abu Muhammed?': 'Abu Muhammed is a syrian bomber, who has worked in Al Qaida for several years'
              
          });
          }, []);

          return (
              <div className="app-container">
                <WelcomeMessage 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                />
                <ChatMessages 
                  chatMessages={chatMessages}
                  setChatMessages={setChatMessages}
                />
                <ChatInput 
                  chatMessages={chatMessages}
                  setChatMessages={setChatMessages}
                  onClear={handleClear}
                />
                
              </div>
          );
        }


export default App
