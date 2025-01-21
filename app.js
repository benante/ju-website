import { images } from './images.js';

// JavaScript code to dynamically create images with Mixcloud links
const imageContainer = document.getElementById('imageContainer');
// Loop through the images array and create image elements with links
images.forEach((image) => {
  const anchor = document.createElement('a');
  anchor.href = image.mixcloudLink;
  anchor.target = '_blank';

  const img = document.createElement('img');
  img.src = image.path;
  img.alt = 'Image';
  img.className = 'grid-image';

  anchor.appendChild(img);
  imageContainer.appendChild(anchor);
});

document.addEventListener('scroll', () => {
  let h1 = document.querySelector('.stickyHeading');
  let h1Coord = h1.getBoundingClientRect();

  let firstImage = document.querySelector('#firstImage');
  let firstImageCoord = firstImage.getBoundingClientRect();
  if (h1Coord.bottom > firstImageCoord.top + 1) {
    h1.style.display = 'block';
    h1.style.fontSize = '50vw';
  }
  if (h1Coord.top < firstImageCoord.top) {
    h1.style.display = 'none';
  }
});
