// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Copy UPI ID
const copyBtn = document.getElementById('copyUpiBtn');
const upiId = document.getElementById('upiId');

if (copyBtn && upiId) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(upiId.textContent.trim());
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = original; }, 1800);
    } catch (err) {
      // Fallback: select the text so the user can copy manually
      const range = document.createRange();
      range.selectNode(upiId);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  });
}