// Contact form handler
function handleSubmit(e) {
  e.preventDefault();

  const btn = document.querySelector('.send-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate send (replace with your actual form submission logic)
  setTimeout(() => {
    btn.textContent = 'Sent!';
    btn.style.background = '#4a7c4a';
    setTimeout(() => {
      btn.textContent = 'Send';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 2000);
  }, 1000);
}