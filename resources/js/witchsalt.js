function startWitchSalt() {
    // Loads the main witchSalt interface
    console.log('Starting WitchSalt game...');

    // Loads Stylesheets for witchSalt
    console.log('Loading WitchSalt assets...');
    const assetLoader = document.querySelector('head');
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = './resources/css/appstylesheets/witchsalt.css';
    assetLoader.appendChild(stylesheet);
    console.log('WitchSalt assets loaded successfully!');

    console.log('Starting Interface...');
    const witchSaltGame = document.querySelector('main');
    witchSaltGame.innerHTML = '';
    const gameInterface = document.createElement('div');
    gameInterface.className = 'witchsalt-interface';
    gameInterface.innerHTML = `
        <div class="leftside-toolbar" id="leftside-toolbar">
            <div class="equipped" id="equipped">
                <div class="spell-book" id="spell-book"></div>
                <div class="inventory" id="inventory"></div>
            </div>
            <div class="unequipped" id="unequipped">
                <div class="spells" id="spells"></div>
                <div class="armory" id="armory"></div>
            </div>
        </div>
        <div class="game-area" id="game-area">
            <div class="logs" id="logs"></div>
            <div class="stats" id="stats"></div>
            <div class="dice-rolls" id="dice-rolls"></div>
        </div>`;
    witchSaltGame.appendChild(gameInterface);
    console.log('Game interface created successfully!');


    // loads elements for the stats section
    console.log('Creating stats content...');
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
        <div class="player-status">
            <div class="health-bar">Health:
                <div class="health-bar-fill" id="player-health"></div>
            </div>
            <div class="energy-bar">Energy:
                <div class="energy-bar-fill" id="player-energy"></div>
            </div>
        </div>
        <div class="player-stats">
            <div class="stat">Str:
                <div class="stat-fill" id="player-str-stat"></div>
            </div>
            <div class="stat">Dex:
                <div class="stat-fill" id="player-dex-stat"></div>
            </div>
            <div class="stat">Con:
                <div class="stat-fill" id="player-con-stat"></div>
            </div>
            <div class="stat">Cha:
                <div class="stat-fill" id="player-cha-stat"></div>
            </div>
            <div class="stat">Wis:
                <div class="stat-fill" id="player-wis-stat"></div>
            </div>
            <div class="stat">Int:
                <div class="stat-fill" id="player-int-stat"></div>
            </div>
            <div class="stat">Luck:
            </div>
        </div>`;
    console.log('Stats content created successfully!');


    // Loads elements for dice rolls section
    console.log('Creating dice rolls content...');
    const diceRollsDiv = document.getElementById('dice-rolls');
    diceRollsDiv.innerHTML = `
        <div class="dice-header">
            <h4>Dice:</h4>
        </div>
        <div class="dice-buttons">
            <button onclick="rolldice(4)">d4</button>
            <button onclick="rolldice(6)">d6</button>
            <button onclick="rolldice(8)">d8</button>
            <button onclick="rolldice(10)">d10</button>
            <button onclick="rolldice(12)">d12</button>
            <button onclick="rolldice(20)">d20</button>
            <button onclick="rolldice(100)">d100</button>
        </div>`;
    console.log('Dice rolls content created successfully!');


    console.log('WitchSalt game started successfully!');
}




