/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

const carouselCreator = (arr) => {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);

  let i = 0;

  const caroImg = document.createElement('img');
  caroImg.src = arr[i];
  caroImg.style.display = 'flex';

  carousel.appendChild(caroImg);

  leftButton.addEventListener('click', () => {
    if (i > 0) {
      i -= 1;
      caroImg.src = arr[i];
    } else {
      i = arr.length - 1;
      caroImg.src = arr[i];
    }
  });

  rightButton.addEventListener('click', () => {
    if (i < arr.length - 1) {
      i += 1;
      caroImg.src = arr[i];
    } else {
      i = 0;
      caroImg.src = arr[i];
    }
  });

  console.log(carousel);
  return carousel;
};


const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator(images));