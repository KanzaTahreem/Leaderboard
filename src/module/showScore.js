const scoresList = document.querySelector('.scores-list');
const parser = new DOMParser();

const showScore = (gameData) => {
  scoresList.innerHTML = '';
  const sortedData = gameData.result.sort((a, b) => b.score - a.score);
  sortedData.forEach((data, index) => {
    const dataString = `<li><p>${index + 1}. ${data.user} :</p> <p>${data.score}</p></li>`;
    const dataElement = parser.parseFromString(dataString, 'text/html').body.firstChild;
    scoresList.append(dataElement);
  });
};

export default showScore;