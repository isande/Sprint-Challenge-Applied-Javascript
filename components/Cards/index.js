// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardCreator = (article) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const authImgCont = document.createElement('div');
  const authImg = document.createElement('img');
  const authName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  authImgCont.classList.add('img-container');

  headline.textContent = article.headline;
  authImg.src = article.authorPhoto;
  authName.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);

  author.appendChild(authImgCont);
  author.appendChild(authName);

  authImgCont.appendChild(authImg);

  return card;

};

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( response => {
    console.log(response.data.articles);
    Object.values(response.data.articles).forEach(type => {
      type.forEach(article => {
        cardsContainer.appendChild(cardCreator(article));
      });
    });
  })
  .catch( err => {
    console.log('Oh no!', err);
  });
