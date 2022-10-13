const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Ludo Shark',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};

export default createGame;