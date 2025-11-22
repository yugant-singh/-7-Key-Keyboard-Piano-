document.querySelectorAll('.key').forEach(key => {
key.addEventListener('click', () => playSound(key));
});



document.addEventListener('keydown', (e) => {
const key = document.querySelector(`[data-key="${e.key}"]`);
if (key) playSound(key);
});


function playSound(keyEl) {
const soundFile = keyEl.getAttribute('data-sound');
const audio = new Audio("31.mp3");
audio.currentTime = 0;
audio.play();


keyEl.classList.add('active');
setTimeout(() => keyEl.classList.remove('active'), 150);
}