function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const day = now.toLocaleString('en-us', { weekday: 'short' });
    const date = now.getDate();
    const remainingDays = document.getElementById('remaining-days')
    let daysLeft = 31-date
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('day').textContent = day.toUpperCase();
    document.getElementById('date').textContent = String(date).padStart(2, '0');
if (daysLeft === 1) {
    remainingDays.textContent = `${31 - date} day left`

}else{
    remainingDays.textContent = `${31 - date} days left`
 
}
    
}

setInterval(updateClock, 1000);
updateClock();
// Control background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.2; // Set volume (0.0 to 1.0)