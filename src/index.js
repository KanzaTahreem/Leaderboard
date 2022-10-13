import getScores from './module/getScores.js';
import showScore from './module/showScore.js';
import './style.css';

window.onload = () => {
  let gameData = [];
  const loadInitialData = async () => {
    gameData = await getScores();
    showScore(gameData);
  };
  loadInitialData();
};