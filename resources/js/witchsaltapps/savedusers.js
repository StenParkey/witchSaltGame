let wLUsers = {
    dogsalt_: [],
    SailorPunk: [],
    WildLerch: [],
    CryptSeeker: [],
    Domnablob: []
}


let savedusername; // Corrected variable name to match usage in other functions
function getusername(username) {
  const acceptedUsernames = [
    'dogsalt_', 
    'SailorPunk', 
    'WildLerch', 
    'CryptSeeker', 
    'Domnablob', 
    'Empress'];
  let userNameInput;

  if (username === acceptedUsernames[0]) {
      userNameInput = acceptedUsernames[0];
      console.log('Welcome to the Apartment my friend');
  } else if (username === acceptedUsernames[1]) {
      userNameInput = acceptedUsernames[1];
      console.log('Welcome to the Apartment young nephew');
  } else if (username === acceptedUsernames[2]) {
      userNameInput = acceptedUsernames[2];
      console.log('Welcome to the Apartment Tyrael of Skornhall');
  } else if (username === acceptedUsernames[3]) {
      userNameInput = acceptedUsernames[3];
      console.log('Welcome to the Apartment søstern min!');
  } else if (username === acceptedUsernames[4]) {
      userNameInput = acceptedUsernames[4];
      console.log('Welcome to the Apartment bestie!!!!');
  } else if (username === acceptedUsernames[5]) {
      userNameInput = acceptedUsernames[5];
      console.log('Welcome to our Apartment Witchy Empress Bestie!!!!');
  } else {
      console.log('You must input a valid User Name!');
      return;
  }

  savedusername = userNameInput; // Update the global variable
  return userNameInput;
}