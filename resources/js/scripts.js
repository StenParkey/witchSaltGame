// Backend loading for WitchSalt.js and  witch Salt Apps
console.log('loading scripts.js...');
const scripts = [
  './resources/js/witchsalt.js',
  './resources/js/witchsaltapps/dnddice.js',
  './resources/js/witchsaltapps/spellbook.js'
];

scripts.forEach((src) => {
  if (src.startsWith('./resources/js/')) { // Validate the URL
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  } else {
    console.error(`Invalid script URL: ${src}`);
  }
});
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

// Variable to track if an app is already running
let isRunning = false;

function handleSearch() {
  const searchInput = document.getElementById('ee-search-bar').value.trim().toLowerCase();
  

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