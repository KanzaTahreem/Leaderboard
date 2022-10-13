import gameId from './gameID.js';

const createScore = async (user, score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};

export default createScore;