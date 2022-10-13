import gameId from './gameID.js';

const getScores = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};

export default getScores;