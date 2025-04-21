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
                <div class="spell-book" id="spell-book">
                    <div class="equipped-spell spell-slot-1" id="spell-slot-1"></div>
                    <div class="equipped-spell spell-slot-2" id="spell-slot-2"></div>  
                    <div class="equipped-spell spell-slot-3" id="spell-slot-3"></div>
                    <div class="equipped-spell spell-slot-4" id="spell-slot-4"></div>
                    <div class="equipped-spell spell-slot-5" id="spell-slot-5"></div>
                    <div class="equipped-spell spell-slot-6" id="spell-slot-6"></div>
                    <div class="equipped-spell quick-spell" id="quick-spell"></div>
                </div>
                <div class="inventory" id="inventory">
                    <div class="equipped-item item-slot-head" id="item-slot-head"></div>
                    <div class="equipped-item item-slot-chest" id="item-slot-chest"></div> 
                    <div class="equipped-item item-slot-arms" id="item-slot-arms"></div>
                    <div class="equipped-item item-slot-legs" id="item-slot-legs"></div>
                    <div class="equipped-item item-slot-feet" id="item-slot-feet"></div>
                    <div class="equipped-item item-slot-jewelry" id="item-slot-jewelry"></div>
                    <div class="equipped-item item-slot-weapon" id="item-slot-weapon"></div>
                </div>
            </div>
            <div class="unequipped" id="unequipped">
                <div class="spells" id="spells">
                    <div class="spells-button" id="spells-button"></div>
                </div>
                <div class="armory" id="armory">
                    <div class="armory-button" id="armory-button"></div>
                </div>
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
            <div class="health-bar">
                <span class="health-header">Health:</span>
                <div class="health-bar-fill" id="player-health"></div>
            </div>
            <div class="energy-bar">
                <span class="energy-header">Energy:</span>
                <div class="energy-bar-fill" id="player-energy"></div>
            </div>
        </div>
        <div class="player-stats">
            <div class="stat stat-str"> 
                <span class="stat-header">Str:</span>
                <div class="stat-fill" id="player-str-stat"></div>
            </div>
            <div class="stat stat-dex"> 
                <span class="stat-header">Dex:</span>
                <div class="stat-fill" id="player-dex-stat"></div>
            </div>
            <div class="stat stat-con"> 
                <span class="stat-header">Con:</span>
                <div class="stat-fill" id="player-con-stat"></div>
            </div>
            <div class="stat stat-cha"> 
                <span class="stat-header">Cha:</span>
                <div class="stat-fill" id="player-cha-stat"></div>
            </div>
            <div class="stat stat-wis"> 
                <span class="stat-header">Wis:</span>
                <div class="stat-fill" id="player-wis-stat"></div>
            </div>
            <div class="stat stat-int"> 
                <span class="stat-header">Int:</span>
                <div class="stat-fill" id="player-int-stat"></div>
            </div>
            <div class="stat stat-luck"> 
                <span class="stat-header">Luck:</span>
                <div class="stat-fill" id="player-luck-stat"></div>
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
            <div class="d4-button" onclick="rolldice(4)">
                <span>4</span>
            </div>
            <div class="d6-button" onclick="rolldice(6)">
                <span>6</span>
            </div>
            <div class="d8-button" onclick="rolldice(8)">  
                <span>8</span>
            </div>
            <div class="d10-button" onclick="rolldice(10)">
                <span>10</span>
            </div>
            <div class="d12-button" onclick="rolldice(12)">
                <span>12</span>
            </div>
            <div class="d20-button" onclick="rolldice(20)">
                <span>20</span>
            </div>
            <div class="d100-button" onclick="rolldice(100)">
                <span>100</span>
            </div>
        </div>`;
    console.log('Dice rolls content created successfully!');


    console.log('WitchSalt game started successfully!');
}




