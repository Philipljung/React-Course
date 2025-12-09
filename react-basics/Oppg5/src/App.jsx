import './App.css'
import LoginForm from './Components/LoginForm.jsx';

      function App() {
        // const [abuMuhammed, setAbuMuhammed] = useState('Abu Abu!');

        function buttonFunction () {
          console.log('Jeg er ikke lenger Abu!')
        }
        

        return (
          <>
            <p className="title">Hello, welcome to my website</p>
            <LoginForm 
            buttonFunction={buttonFunction}
            />
            <button
            onClick={buttonFunction}
            >Abu</button>
          </>
        );
      }

export default App