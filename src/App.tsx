
import 'react-chatbot-kit/build/main.css'
import './assets/styles/index.scss'  
import config from './chatbot/config.js';
import MessageParser from './chatbot/MessageParser.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';
import Chatbot from "react-chatbot-kit";
function App() { 

  return (
    <div className="chatContainer">
      <Chatbot
      config={config} 
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      />
    </div>
     
  )
}

export default App
