// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  const tiles = document.querySelectorAll(".bingo-tile");

  // Event-Listener für jedes Feld
  tiles.forEach(tile => {
      tile.addEventListener("click", function() {
          // Toggle die Klasse "highlight", um das Feld grün zu machen
          tile.classList.toggle("highlight");
      });
  });
});
