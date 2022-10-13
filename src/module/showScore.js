const scoresList = document.querySelector('.scores-list');
const parser = new DOMParser();

const showScore = (gameData) => {
  scoresList.innerHTML = '';
  const sortedData = gameData.result.sort((a, b) => b.score - a.score);
  sortedData.forEach((data) => {
    const dataString = `<li>${data.user}: ${data.score}</li>`;
    const dataElement = parser.parseFromString(dataString, 'text/html').body.firstChild;
    scoresList.append(dataElement);
  });
};

export default showScore;