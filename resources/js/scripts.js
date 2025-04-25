// Backend loading for stylesheets and scripts
console.log('loading stylesheets...');
const stylesheets = [
  './resources/css/appstylesheets/witchsaltinterface.css',
  './resources/css/appstylesheets/witchsaltgameassets.css', 
  './resources/css/mediaqueries.css'
];
stylesheets.forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
});
console.log('WitchSalt stylesheets loaded successfully!');

console.log('loading scripts...');
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

// Function for Search Bar form functionality
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

// Variables to track if specific apps are running
let isWitchSaltRunning = false;
let isDndDiceRunning = false;

function handleSearch() {
  const searchInput = document.getElementById('ee-search-bar').value.trim().toLowerCase();

  if (searchInput === 'dnd dice') {
    if (!isDndDiceRunning) {
      console.log('Initializing DnD Dice Roller app...');
      isDndDiceRunning = true;
      isWitchSaltRunning = false; // Stop WitchSalt if switching
      startGame(); // Replace with your DnD Dice app initialization function
    } else {
      console.log('dnd dice Roller is already running!');
    }
  } else if (searchInput === 'witchsalt') {
    if (!isWitchSaltRunning) {
      console.log('Initializing witchsalt game...');
      isWitchSaltRunning = true;
      isDndDiceRunning = false; // Stop DnD Dice if switching
      startWitchSalt(); // Replace with your WitchSalt app initialization function
    } else {
      console.log('witchsalt is already running!');
    }
  } else {
    alert('Invalid search input. Try typing "dnd dice" or "witchsalt".');
  }

  // Clear the search bar after handling input
  document.getElementById('ee-search-bar').value = '';
}
console.log('Search bar functionality loaded successfully!');


console.log('scripts.js loaded successfully!');