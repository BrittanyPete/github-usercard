import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function getInfo(userName) {
  axios.get(`https://api.github.com/users/${userName}`)
    .then(resp => {
      // console.log(resp.data);
      createCard(resp.data);
    }).catch(error => {
      console.log(error);
    }).finally(() => console.log('it finished'))
};
getInfo('BrittanyPete');




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> - done
      <img src={image url of user} /> - done
      <div class="card-info"> - done
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



function createCard(card) {
const container = document.querySelector('.container');

const newCard = document.createElement('div');
const profilePic = document.createElement('img');
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const userName = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const gitHubPage = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

newCard.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
userName.classList.add('username');

profilePic.src = card.avatar_url;
name.textContent = card.name;
userName.textContent = card.login;
location.textContent = `Location: ${card.location}`;
profile.textContent = `Profile: `
gitHubPage.textContent = `${card.html_url}`;
gitHubPage.href = 'card.html_url';
followers.textContent = `Followers: ${card.followers}`;
following.textContent = `Following: ${card.following}`;
bio.textContent = `Bio: ${card.bio}`;


container.appendChild(newCard);
newCard.appendChild(profilePic);
newCard.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(userName);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);
profile.appendChild(gitHubPage);



return newCard;
};


for (let i = 0; i < followersArray.length; i++) {
  getInfo(followersArray[i]);
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
