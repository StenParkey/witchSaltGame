function startCharacterSelect() {
    console.log('Starting character selection...');
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear the main content

    // Create the character select form
    const characterSelectForm = document.createElement('div');
    characterSelectForm.className = 'character-select';
    characterSelectForm.innerHTML = `
        <h2>Select Your Character</h2>
        <form id="character-select-form" autocomplete="off"> 
            <input type="text" id="character-name" placeholder="Enter character name..." autocomplete="off" />
            <button type="button" id="select-character-btn">Select</button>
        </form>
        <p id="character-select-error" class="character-select-error">Invalid character name. Please try again.</p>
    `;

    main.appendChild(characterSelectForm);

    // Add event listener for the select button
    document.getElementById('select-character-btn').addEventListener('click', () => {
        const characterName = document.getElementById('character-name').value.trim();
        handleCharacterSelection(characterName);
        clearSearchBar(); // Clear the search bar history
    });

    // Add event listener for the Enter key
    document.getElementById('character-name').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            const characterName = document.getElementById('character-name').value.trim();
            handleCharacterSelection(characterName);
            clearSearchBar(); // Clear the search bar history
        }
    });
}

// Function to clear the search bar history
function clearSearchBar() {
    const searchBar = document.getElementById('ee-search-bar');
    if (searchBar) {
        searchBar.value = ''; // Clear the input value
    }
}

let selectedCharacter = null;

function handleCharacterSelection(characterName) {
  const character = playableCharacters[characterName];
  if (character) {
    console.log(`Character selected: ${character.name}`);
    selectedCharacter = character;

    // Clear the character select screen
    const main = document.querySelector('main');
    main.innerHTML = '';

    // Start the WitchSalt game
    startWitchSalt();
  } else {
    // Show error message if the character name is invalid
    const errorElement = document.getElementById('character-select-error');
    errorElement.style.display = 'block';
  }
}