// Backend loading for WitchSalt.js and  witch Salt Apps
console.log('loading scripts.js...');
const loadingWitchSaltScripts = document.querySelector('head');
const witchSaltScripts = document.createElement('div');
witchSaltScripts.id = 'witchsalt-scripts';
witchSaltScripts.innerHTML = `
  <script src="./resources/js/witchsalt.js" defer></script>
  <!--Temp Scripts for Individual Apps-->
  <script src="./resources/js/witchsaltapps/dnddice.js" defer></script>
  <script src="./resources/js/witchsaltapps/spellbook.js" defer></script>`;
loadingWitchSaltScripts.appendChild(witchSaltScripts);
console.log('WitchSalt scripts loaded successfully!');

// Function for Search Bar form
console.log('loading searchbar form functionality...');
document.getElementById('ee-search-btn').addEventListener('click', () => {
  handleSearch();
});

document.getElementById('ee-search-bar').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
  }
});

function handleSearch() {
  const searchInput = document.getElementById('ee-search-bar').value.trim().toLowerCase();
  let isRunning = false;

  if (searchInput === 'dnd dice') {
    if (isRunning === false) {
      console.log('initializing dnd dice roller app')
      isRunning = true;
      startGame(); 
    } else {
      console.log('App is already running!');
    }
  } else if (searchInput === 'witchsalt') {
    if (isRunning === false) {
      console.log('initializing witchsalt game')
      isRunning = true;
      startWitchSalt(); 
    } else {
      console.log('Witchsalt is already running!');
    }
  } else {
      alert('Invalid search input. Try typing "dnd dice" or "witchsalt".');
  }
  document.getElementById('ee-search-bar').value = '';
}
console.log('Search bar functionality loaded successfully!');


console.log('scripts.js loaded successfully!');