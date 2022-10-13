import createScore from './module/createScore.js';
import getScores from './module/getScores.js';
import showScore from './module/showScore.js';
import './style.css';

const refreshBtn = document.querySelector('.refresh-btn');

window.onload = () => {
  let gameData = [];
  const loadInitialData = async () => {
    gameData = await getScores();
    showScore(gameData);
  };
  loadInitialData();

  refreshBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    gameData = await getScores();
    showScore(gameData);
  });

  const submitBtn = document.querySelector('.submit-btn');
  const userEl = document.querySelector('.user');
  const scoreEl = document.querySelector('.score');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = userEl.value;
    const scoreInput = scoreEl.value;
    gameData.result.push({
      user: userInput,
      score: scoreInput,
    });
    createScore(userInput, scoreInput);
    showScore(gameData);
    userEl.value = '';
    scoreEl.value = '';
  });
};