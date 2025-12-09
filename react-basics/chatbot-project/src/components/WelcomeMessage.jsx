import './WelcomeMessage.css';

export function WelcomeMessage ( {chatMessages }) {
        return (
          <div>
            {chatMessages.length === 0 
              && <p
              className="welcome-message-class"
              >Welcome to the chatbot project! Send a message using the textbox below.</p>}
          </div>
        )
      }

export default WelcomeMessage