// JavaScript code to dynamically create images with Mixcloud links
const imageContainer = document.getElementById('imageContainer');

// Array containing image paths and corresponding Mixcloud links
const images = [
  {
    path: 'imgGlazier/img01.130121.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier130121/',
  },
  {
    path: 'imgGlazier/img02.100221.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-100221/',
  },
  {
    path: 'imgGlazier/img03.100321.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-100321/',
  },
  {
    path: 'imgGlazier/img04.290421.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-290421/',
  },
  {
    path: 'imgGlazier/img05SimonB270521.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-with-simon-benjamin-270521/',
  },
  {
    path: 'imgGlazier/img06.240621.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-240621/',
  },
  {
    path: 'imgGlazier/img08.220721.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-220721/',
  },
  {
    path: 'imgGlazier/img07.190821.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-190821-rerun-cafe-otos-birthday-mix-apr2020/',
  },
  {
    path: 'imgGlazier/img09.160921.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-voidstepping-and-ju-canon-160921/',
  },
  {
    path: 'imgGlazier/img10.Ross141021.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-141021/',
  },
  {
    path: 'imgGlazier/img11.Ecka111121.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-with-ecka-mordecai-111121/',
  },
  {
    path: 'imgGlazier/img12.Jackson060122.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-jackson-060122/',
  },
  {
    path: 'imgGlazier/img13.Li030222.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-li-song-030222/',
  },
  {
    path: 'imgGlazier/img14.Luciano030322.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-with-luciano-maggiore-030322/',
  },
  {
    path: 'imgGlazier/img15.310322.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-310322/',
  },
  {
    path: 'imgGlazier/img16.ALFREDO280422.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-alfredo92-280422/',
  },
  {
    path: 'imgGlazier/img17.RORY260522.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-malvern-brume-and-ju-canon-260522/',
  },
  {
    path: 'imgGlazier/img18.ASH210722.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ash-reid-and-ju-canon-210722/',
  },
  {
    path: 'imgGlazier/img19.180822.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-180822/',
  },
  {
    path: 'imgGlazier/img21.150922.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-150922/',
  },
  {
    path: 'imgGlazier/img20.SCR131022.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-rebroadcast-ju-canon-in-seydisfjordur-iceland-131022/',
  },
  {
    path: 'imgGlazier/img22.101122.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-101122/',
  },
  {
    path: 'imgGlazier/img23.rA050123.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-ra-tack-050123/',
  },
  {
    path: 'imgGlazier/img24.020223.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-020223/',
  },
  {
    path: 'imgGlazier/img25.YOSHINO020323.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-yoshino-shigihara-from-yama-warashi-020323/',
  },
  {
    path: 'imgGlazier/img26.XCRSWX300323.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-crystabel-riley-and-seymour-wright-from-xcrswx-300323/',
  },
  {
    path: 'imgGlazier/img27.270423.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-270423/',
  },
  {
    path: 'imgGlazier/img28.250523.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-250523/',
  },
  {
    path: 'imgGlazier/img29.220623.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-220623/',
  },
  {
    path: 'imgGlazier/img30.140923.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-140923/',
  },
  {
    path: 'imgGlazier/img31.SCR121023.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-270423/',
  },
  {
    path: 'imgGlazier/img32.KAYLA091123.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-kayla-ephros-and-ju-canon-at-seydisfjordur-community-radio-091123/',
  },
  {
    path: 'imgGlazier/img33.ISA071223.jpg',
    mixcloudLink:
      'https://www.mixcloud.com/RTM_FM/glazier-ísa-and-ju-canon-071223/',
  },
  {
    path: 'imgGlazier/img34.040124.jpg',
    mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-040124/',
  },
  // Add more images with corresponding Mixcloud links as needed
];

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
