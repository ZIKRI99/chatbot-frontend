import React from "react";
import 'react-chatbot-kit/build/main.css';
import './App.css'

import ChatBot from 'react-chatbot-kit';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";



const App = () => {
  return (
    <div className="App">
      <div>
        <ChatBot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
};

export default App;
