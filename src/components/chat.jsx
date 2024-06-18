import React, { useState, useEffect } from 'react';
import './chat.css';

const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [generateBtnDisabled, setGenerateBtnDisabled] = useState(false);
  const [stopBtnDisabled, setStopBtnDisabled] = useState(true);
  const [controller, setController] = useState(null);
  const [messages, setMessages] = useState([]);
  const [systemMessage] = useState("You are a college admission counselor of Thadomal Shahani Engineering College located in Mumbai");


  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      generate();
    }
  };

  const addMessage = (role, content) => {
    setMessages((prevMessages) => [...prevMessages, { role, content }]);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const generate = async () => {
    if (!inputText) {
      alert("Please enter a prompt.");
      return;
    }

    setGenerateBtnDisabled(true);
    setStopBtnDisabled(false);
    setResultText("Generating...");

    const newController = new AbortController();
    setController(newController);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemMessage },
          ...messages,
          { role: "user", content: inputText }
        ],
      }),
      signal: newController.signal,
    };

    const fetchWithRetry = async (retryCount = 5, initialDelay = 1000) => { // Increase retries and initial delay
      let delay = initialDelay;
      for (let i = 0; i < retryCount; i++) {
        try {
          const response = await fetch(API_URL, requestOptions);

          if (!response.ok) {
            if (response.status === 429 && i < retryCount - 1) {
              // Exponential backoff
              await sleep(delay);
              delay *= 2; // Increase delay
              continue;
            } else {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
          }

          const data = await response.json();
          console.log('API response data:', data);
          const assistantReply = data.choices[0].message.content;
          addMessage('assistant', assistantReply);
          setResultText(assistantReply);
          break; // Break the loop if successful
        } catch (error) {
          if (i === retryCount - 1) {
            if (error.name === 'AbortError') {
              setResultText('Request aborted.');
            } else {
              setResultText('Error occurred while processing your request.');
              console.error('Error:', error);
            }
          }
        }
      }
    };

    fetchWithRetry().finally(() => {
      setGenerateBtnDisabled(false);
      setStopBtnDisabled(true);
      setController(null);
      setInputText('');
    });
  };

  const stop = () => {
    if (controller) {
      controller.abort();
      setController(null);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h1 className="chat-title">
          StockSense Chat Advisor
        </h1>
        <div className="chat-output">
          <p id="resultText" className="whitespace-pre-line">
            {resultText}
          </p>
        </div>
        <input
          type="text"
          id="promptInput"
          className="chat-input"
          placeholder="Enter prompt..."
          value={inputText}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
        <div className="flex justify-center mt-4">
          <button
            id="generateBtn"
            className={`chat-btn ${generateBtnDisabled ? 'disabled:opacity-75 disabled:cursor-not-allowed' : ''}`}
            onClick={generate}
            disabled={generateBtnDisabled}
          >
            Generate
          </button>
          <button
            id="stopBtn"
            className={`chat-btn chat-btn-light ${stopBtnDisabled ? 'disabled:opacity-75 disabled:cursor-not-allowed' : ''}`}
            onClick={stop}
            disabled={stopBtnDisabled}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
