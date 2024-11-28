const confessionText = document.getElementById('confession');
const revealButton = document.getElementById('reveal');

revealButton.addEventListener('click', () => {
  confessionText.style.display = 'block';
  revealButton.style.display = 'none'; // Hide the button after reveal.

  //You'll need to replace this with your actual confession.
  confessionText.textContent = "Thank you for the flat 1 grade it reflects not just our efforts but also your commitment to helping us succeed. Your support means a lot to us, and I we are genuinely grateful for having the opportunity to learn under your guidance. BEST TEACHER!";
});