const secondhand = document.querySelector('.second-hand');
const mindhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setdate() {
  const now = new Date();

  // --- Seconds ---
  const seconds = now.getSeconds();
  const seconddegrees = ((seconds / 60) * 360) + 90;
  secondhand.style.transform = `rotate(${seconddegrees}deg)`;

  // --- Minutes (Corrected for smooth movement) ---
  const min = now.getMinutes();
  // We add the seconds' fraction to the minute for a smoother tick
  const mindegrees = (((min + (seconds / 60)) / 60) * 360) + 90;
  mindhand.style.transform = `rotate(${mindegrees}deg)`;

  // --- Hours (Corrected for 12-hr format and smooth movement) ---
  const hour = now.getHours();
  // We use (hour % 12) for the 12-hour format
  // We add the minutes' fraction to the hour for smooth movement
  const hourdegrees = ((((hour % 12) + (min / 60)) / 12) * 360) + 90;
  hourhand.style.transform = `rotate(${hourdegrees}deg)`;
}

setInterval(setdate, 1000);
setdate(); 
