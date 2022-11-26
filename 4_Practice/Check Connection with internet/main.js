let title = document.querySelector('p[id="title"] span')
function setOnline() {
  title.textContent = 'Online'
  title.style.color = 'green'
}
function setOffline() {
  title.textContent = 'offline'
  title.style.color = 'red'
}
if (window.navigator.onLine) setOnline()
else setOffline()
window.addEventListener('online', () => {
  setOnline()
})
window.addEventListener('offline', () => {
  setOffline()
})