const bingoItems = [
    "🍕 Pizza im Fenster", "🇮🇹 Gestikulierender Italiener", "🧣 Schal bei Sonne", "🛵 Vespa", "🧑‍🎓 Studenten",
    "🧱 Roter Ziegelbau", "📚 Leseratte draußen", "🐶 Kleiner Hund", "☕ Espresso draußen", "🤳 Selfie-Tourist",
    "🎈 Luftballon", "🏛️ Sehenswürdigkeit", "🎂 Torte im Fenster", "🛍️ Einkaufstüten", "💏 Kuss im Regen",
    "📞 Lauttelefonierer", "🏛️ Bogengänge", "⛲ Brunnen", "🎨 Graffiti", "🖼️ Statue/Denkmal",
    "🚲 Rad mit Korb", "🍦 Gelato-Esser", "🏪 Pizza-Imbiss", "🎶 Straßenmusikant", "😴 Schlafende Person"
  ];
  
  const bingoBoard = document.getElementById('bingo-board');
  const bingoMessage = document.getElementById('bingo-message');
  
  let selectedItems = new Set();
  
  function createBoard() {
    bingoItems.forEach((item, index) => {
      const tile = document.createElement('div');
      tile.classList.add('bingo-tile');
      tile.dataset.index = index;
      tile.innerHTML = item;
      tile.addEventListener('click', () => toggleSelection(index));
      bingoBoard.appendChild(tile);
    });
  }
  
  function toggleSelection(index) {
    const tile = document.querySelector(`[data-index='${index}']`);
    if (selectedItems.has(index)) {
      selectedItems.delete(index);
      tile.classList.remove('selected');
    } else {
      selectedItems.add(index);
      tile.classList.add('selected');
    }
  
    if (checkBingo()) {
      showBingoMessage();
    }
  }
  
  function checkBingo() {
    const winningCombinations = getWinningCombinations();
    return winningCombinations.some(combination =>
      combination.every(index => selectedItems.has(index))
    );
  }
  
  function getWinningCombinations() {
    const rows = [
      [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]
    ];
    const cols = [
      [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24]
    ];
    const diagonals = [
      [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
    ];
  
    return [...rows, ...cols, ...diagonals];
  }
  
  function showBingoMessage() {
    bingoMessage.style.display = 'block';
    bingoMessage.textContent = '🎊 BINGO! 🎊';
    playBingoSound();
  }
  
  function playBingoSound() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  }
  
  createBoard();
  