  import React, { useState ,useEffect} from 'react';
  import './YourChatBot.css'; 

  const YourChatBot = () => {
    const [userInput, setUserInput] = useState('');
    const [botResponses, setBotResponses] = useState([]);

    const predefinedResponses = {
      
      "tell me about your courses": "We provide various courses for stock market analysis.",
      "do you offer certifications?": "Yes, we offer certifications upon course completion.",
      "what is the duration of the course?": "The duration of our courses varies based on the module.",
      "what kind of training methods do you use?": "We use both theoretical and practical training methods.",
      "are the courses suitable for beginners?": "Yes, our courses are designed for all levels, including beginners.",
      "is there any financial aid available?": "We provide assistance for eligible students seeking financial aid.",
      "do you offer job placement assistance?": "Yes, we offer job placement assistance after course completion.",
      "what's the fee structure for the courses?": "Our fee structure varies based on the chosen course.",
      "can I attend courses remotely?": "Yes, we offer online courses for remote attendance.",
    };

    useEffect(() => {
      setBotResponses([
        { type: 'bot', text: 'Welcome! Feel free to ask your doubts.' }
      ]);
    }, []);

    const handleUserInput = (e) => {
      setUserInput(e.target.value);
    };

    const getBotResponse = (input) => { 
      const lowercaseInput = input.toLowerCase().trim();
      if (["hey", "hi", "hello"].includes(lowercaseInput)) {
        return 'Hello there, ask away!';
      }
      const response = predefinedResponses[lowercaseInput];
      return response ? response : "I'm not sure how to respond to that.";
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (userInput.trim() !== '') {
        const botResponse = getBotResponse(userInput);
        setBotResponses([
          ...botResponses,
          { type: 'user', text: userInput },
          { type: 'bot', text: botResponse }
        ]);
        setUserInput('');
      }
    };

    
  const clearChat = () => {
    setBotResponses([]);
  };

    return (
      <div className="chatbot-container">
        <h1>Your Chat Bot</h1>
        <div className="conversation">
          {botResponses.map((response, index) => (
            <div key={index} className={response.type}>
              <span>{response.type === 'user' ? 'You' : 'Bot'}</span>: {response.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleUserInput} />
          <button type="submit">Send</button>
          <button type="button" onClick={clearChat}>Clear</button>
        </form>
      </div>
    );
  };

  export default YourChatBot;
