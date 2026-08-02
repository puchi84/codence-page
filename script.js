const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('a[href^="#"], [data-scroll]').forEach((element) => {
  element.addEventListener('click', (event) => {
    const selector = element.dataset.scroll || element.getAttribute('href');
    const target = document.querySelector(selector);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const workflowStatuses = [
  'Connecting context',
  'Understanding the issue',
  'Finding related evidence',
  'Creating engineering-ready work'
];

document.querySelectorAll('.workflow-step').forEach((step) => {
  step.addEventListener('click', () => {
    document.querySelectorAll('.workflow-step').forEach((item) => item.classList.remove('active'));
    step.classList.add('active');
    const index = Number(step.dataset.step);
    document.getElementById('workflowStatus').textContent = workflowStatuses[index];
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const signupForm = document.getElementById('signupForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const submitButton = signupForm.querySelector('button[type="submit"]');
const submitButtonDefaultLabel = submitButton.innerHTML;

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const companyName = document.getElementById('companyName').value.trim();
  const companySize = document.getElementById('companySize').value;
  const supportTool = document.getElementById('supportTool').value;

  formSuccess.classList.remove('show');
  formError.classList.remove('show');

  if (!name || !email || !companyName || !companySize || !supportTool) return;

  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';

  try {
    const response = await fetch(signupForm.action, {
      method: 'POST',
      body: new FormData(signupForm),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      formSuccess.classList.add('show');
      signupForm.reset();
    } else {
      formError.classList.add('show');
    }
  } catch (error) {
    formError.classList.add('show');
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = submitButtonDefaultLabel;
  }
});
