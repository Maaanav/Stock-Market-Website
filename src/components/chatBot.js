import React, { useState } from 'react';
import chatBotLogic from './chatBotLogic'; // Import your chatbot logic function
import './chatBot.css'; // Import the CSS file

// const ChatBot = () => {
//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleUserInput = () => {
//     // Process user input using chatbot logic
//     const response = chatBotLogic(userInput);

//     // Update chat history with user input and chatbot response
//     setChatHistory([...chatHistory, { role: 'user', content: userInput }]);
//     setChatHistory([...chatHistory, { role: 'chatbot', content: response }]);
    
//     // Clear the user input field
//     setUserInput('');
//   };

//   return (
//     <div className="chat-container">
//       {/* Display chat history */}
//       <div className="chat-history">
//         {chatHistory.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             {message.content}
//           </div>
//         ))}
//       </div>
      
//       {/* User input field and submit button */}
//       <div className="user-input">
//         <input
//           type="text"
//           placeholder="Ask a question..."
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           onKeyUp={(e) => e.key === 'Enter' && handleUserInput()}
//         />
//         <button onClick={handleUserInput}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = () => {
    // Process user input using chatbot logic
    const response = chatBotLogic(userInput);

    // Update chat history with user input and chatbot response
    setChatHistory(prevChat => [
      ...prevChat,
      { role: 'user', content: userInput },
      { role: 'chatbot', content: response }
    ]);

    // Clear the user input field
    setUserInput('');
  };

  return (
    <div className="chat-container">
      {/* Display chat history */}
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      
      {/* User input field and submit button */}
      <div className="user-input">
        <input
          type="text"
          placeholder="Ask a question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleUserInput()}
        />
        <button onClick={handleUserInput}>Submit</button>
      </div>
    </div>
  );
};

export default ChatBot;
