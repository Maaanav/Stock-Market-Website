import jsonData from './model.json'; // Import your JSON data

function chatbotLogic(userInput) {
  // Find a matching question in the JSON data
  const questionData = jsonData.find((item) =>
    item.Question.toLowerCase() === userInput.toLowerCase()
  );

  if (questionData) {
    // If a matching question is found, return the corresponding answer
    return questionData.Answer;
  } else {
    // If the user's question doesn't match any in the JSON, return an error message
    return "I'm sorry, I don't have an answer to that question.";
  }
}

export default chatbotLogic;
