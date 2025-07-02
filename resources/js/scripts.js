// Backend loading for stylesheets and scripts

/* BIG NOTE! Yes i understand this is not a good way to load in scripts for security reasons. I havent worked much more on this project, as
ive been trying to focus on my codecademy courses so i can learn the best practices for what im trying to do in this project.*/
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
  './resources/js/witchsaltapps/playablecharacters.js',
  './resources/js/witchsaltapps/characterselect.js',
  './resources/js/witchsalt.js',
  './resources/js/witchsaltapps/dnddice.js',
  './resources/js/witchsaltapps/spellbook.js',
  './resources/js/witchsaltapps/logs.js' 
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

function handleSearch() {
  const searchInput = document.getElementById('ee-search-bar').value.trim().toLowerCase();

  if (searchInput === 'dnd dice') {
    if (!isDndDiceRunning) {
      console.log('Initializing DnD Dice Roller app...');
      startGame();
    }
  } else if (searchInput === 'witchsalt') {
    console.log('Initializing WitchSalt game...');
    isWitchSaltRunning = true;
    isDndDiceRunning = false;
    startCharacterSelect(); // Start the character selection screen
  } else {
    alert('Invalid search input. Try typing "dnd dice" or "witchsalt".');
  }

  // Clear the search bar after handling input
  document.getElementById('ee-search-bar').value = '';
}

console.log('Search bar functionality loaded successfully!');


console.log('scripts.js loaded successfully!');