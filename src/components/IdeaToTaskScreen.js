import React, { useState, useEffect } from 'react';

function IdeaToTaskScreen() {
  // State for managing ideas
  const [ideas, setIdeas] = useState([]);

  // Placeholder effect for fetching ideas (replace with Firebase fetching logic)
  useEffect(() => {
    // Replace with Firebase fetching code
    setIdeas([
      { id: 1, title: 'Sample Idea 1', score: 8 },
      { id: 2, title: 'Sample Idea 2', score: 6 },
    ]);
  }, []);

  return (
    <div>
      <h2>Idea to Task Screen</h2>
      <ul>
        {ideas.map(idea => (
          <li key={idea.id}>
            {idea.title} - Score: {idea.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IdeaToTaskScreen;
