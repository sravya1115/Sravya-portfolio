/* ========= Utility: Current Year in Footer ========= */
document.getElementById('year').textContent = new Date().getFullYear();

/* ========= Mobile Nav Toggle ========= */
const header = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  header.classList.toggle('nav--open');
});

/* Close mobile menu on link click */
document.querySelectorAll('.nav__links a').forEach(a => {
  a.addEventListener('click', () => header.classList.remove('nav--open'));
});

/* ========= Reveal on Scroll (IntersectionObserver) ========= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

/* ========= Contact Form -> mailto: =========
   - Builds a mailto link with subject/body containing Name/Email/Message
   - Keeps things simple and deployable on static hosts (GitHub Pages/Netlify)
*/
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const to = 'sravyaavvari5@gmail.com';
  const subject = encodeURIComponent(`Portfolio Contact • ${name}`);
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});

/* ========= Optional: Smooth scroll offset fix for sticky header =========
   If you have very tall header, you can adjust scroll margin on sections via JS/CSS.
*/
document.querySelectorAll('section[id]').forEach(sec => {
  sec.style.scrollMarginTop = '84px';
});
