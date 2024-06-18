import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Training from './routes/Training';
import Courses from './routes/Courses';
import Contact from './routes/Contact';
import Chat from './components/chat';
import ChatBot from './components/chatBot';
import YourChatBot from './components/YourChatBot'; // Import the YourChatBot component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Training />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chatBot" element={<ChatBot />} />
      <Route path="/your_chatBot" element={<YourChatBot />} /> {/* Add a new route for YourChatBot */}
    </Routes>
  );
};

export default App;
