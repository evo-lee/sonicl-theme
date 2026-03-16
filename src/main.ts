import './css/main.css'

// Dark mode toggle
function initDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle')
  if (!darkModeToggle) return

  const isDark = localStorage.getItem('darkMode') === 'true' ||
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)

  if (isDark) {
    document.documentElement.classList.add('dark')
  }

  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark').toString())
  })
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode)
} else {
  initDarkMode()
}
