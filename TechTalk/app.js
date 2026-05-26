const menuButton = document.querySelector('.line-container');
const sidebarMenu = document.querySelector('.menu');

// ==============================
// TOGGLE MENU
// ==============================
const toggleMenu = () => {
  menuButton.classList.toggle('active');
  sidebarMenu.classList.toggle('active');

  const isExpanded = menuButton.classList.contains('active');

  menuButton.setAttribute('aria-expanded', isExpanded);
};

// ==============================
// CLOSE MENU
// ==============================
const closeMenu = () => {
  menuButton.classList.remove('active');
  sidebarMenu.classList.remove('active');
  menuButton.setAttribute('aria-expanded', false);
};

// ==============================
// OPEN MENU
// ==============================
const openMenu = () => {
  menuButton.classList.add('active');
  sidebarMenu.classList.add('active');
  menuButton.setAttribute('aria-expanded', true);
};

// ==============================
// MENU BUTTON CLICK
// ==============================
if (menuButton && sidebarMenu) {
  menuButton.setAttribute('role', 'button');
  menuButton.setAttribute('tabindex', '0');
  menuButton.setAttribute('aria-label', 'Toggle menu');
  menuButton.setAttribute('aria-expanded', false);

  menuButton.addEventListener('click', toggleMenu);

  // Keyboard accessibility
  menuButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
}

// ==============================
// CLOSE ON ESCAPE
// ==============================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// ==============================
// CLOSE WHEN CLICKING OUTSIDE
// ==============================
document.addEventListener('click', (e) => {
  const clickedOutsideMenu =
    !sidebarMenu.contains(e.target) &&
    !menuButton.contains(e.target);

  if (clickedOutsideMenu) {
    closeMenu();
  }
});

// ==============================
// OPTIONAL: AUTO CLOSE ON RESIZE
// ==============================
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

const sidebar = document.querySelector('#sidebar');
const toggleBtn = document.querySelector('#menuToggle');

const STORAGE_KEY = 'sidebar_state';

/* ================= STATE ================= */

const getState = () => {
  return localStorage.getItem(STORAGE_KEY) || 'expanded';
};

const setState = (state) => {
  localStorage.setItem(STORAGE_KEY, state);

  const isCollapsed = state === 'collapsed';

  sidebar.classList.toggle('collapsed', isCollapsed);
  toggleBtn.setAttribute('aria-pressed', isCollapsed);
};

/* ================= INIT ================= */

setState(getState());

/* ================= TOGGLE ================= */

toggleBtn.addEventListener('click', () => {
  const current = getState();
  const next = current === 'collapsed' ? 'expanded' : 'collapsed';

  setState(next);
});

/* ================= KEYBOARD SUPPORT ================= */

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === 'b') {
    const current = getState();
    const next = current === 'collapsed' ? 'expanded' : 'collapsed';
    setState(next);
  }
});

const sidebar = document.querySelector('#sidebar');
const toggleBtn = document.querySelector('#menuToggle');

const STORAGE_KEY = 'sidebar_state';

/* ================= STATE ================= */

const getState = () => {
  return localStorage.getItem(STORAGE_KEY) || 'expanded';
};

const setState = (state) => {
  localStorage.setItem(STORAGE_KEY, state);

  const isCollapsed = state === 'collapsed';

  sidebar.classList.toggle('collapsed', isCollapsed);
  toggleBtn.setAttribute('aria-pressed', isCollapsed);
};

/* ================= INIT ================= */

setState(getState());

/* ================= TOGGLE ================= */

toggleBtn.addEventListener('click', () => {
  const current = getState();
  const next = current === 'collapsed' ? 'expanded' : 'collapsed';

  setState(next);
});

/* ================= KEYBOARD SUPPORT ================= */

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === 'b') {
    const current = getState();
    const next = current === 'collapsed' ? 'expanded' : 'collapsed';
    setState(next);
  }
});
