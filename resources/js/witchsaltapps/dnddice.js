
function startGame() {
    console.log('Loading DnD Dice assets...');
    const assetLoader = document.querySelector('head');
    const dndDiceAssets = document.createElement('div');
    dndDiceAssets.id = 'dnd-dice-assets';
    dndDiceAssets.innerHTML = ``;
    dndDiceAssets.innerHTML = `
        <link rel="stylesheet" href="./resources/css/appstylesheets/dnddice.css">`;
    assetLoader.appendChild(dndDiceAssets);
    console.log('WitchSalt assets loaded successfully!');

    const diceRollGameApp = document.querySelector('main');
    diceRollGameApp.innerHTML = '';
    const interface = document.createElement('div');
    interface.className = 'game-interface';
    interface.innerHTML = `
        <h2>Welcome to the Dice Roller!</h2>
        <p>Choose a dice size:</p>
        <button onclick="rolldice(4)">d4</button>
        <button onclick="rolldice(6)">d6</button>
        <button onclick="rolldice(8)">d8</button>
        <button onclick="rolldice(10)">d10</button>
        <button onclick="rolldice(12)">d12</button>
        <button onclick="rolldice(20)">d20</button>
        <button onclick="rolldice(100)">d100</button>`;
    diceRollGameApp.appendChild(interface);
}

function rolldice(diceroll) {

    let roll;
    if (diceroll === 100) {
      roll = Math.floor(Math.random() * 100) + 1;
    } else if (diceroll === 20) {
      roll = Math.floor(Math.random() * 20) + 1; 
    } else if (diceroll === 12) {
      roll = Math.floor(Math.random() * 12) + 1;
    } else if (diceroll === 10) {
      roll = Math.floor(Math.random() * 10) + 1;
    } else if (diceroll === 8) {
      roll = Math.floor(Math.random() * 8) + 1;
    } else if (diceroll === 6) {
      roll = Math.floor(Math.random() * 6) + 1;
    } else if (diceroll === 4) {
      roll = Math.floor(Math.random() * 4) + 1;
    } else {
      console.log("Invalid dice size! Chose from 4, 6, 8, 10, 12, 20, or 100.");
      return;
    }
  
  
    if (diceroll) {
      alert(`You rolled a ${roll} on a d${diceroll}!`)
    }
  
    // Critical success/fail checks
    if (diceroll === 100) {
      if (roll === 100) {
        alert(`Insane Critical Success! Great job!`);
      } else if (roll === 1) {
        alert('Insane Critical Fail!');
      } 
    } else if (diceroll === 20) {
      if (roll === 20) {
        alert(`Critical Success! Great job!`);
      } else if (roll === 1) {
        alert('Critical Fail!');
      }
    } else {
      if (roll === 1) {
        alert('Weak hit!');
      }
    }
  
    return roll;
  };