import articlePieBlog from './articles/PieBlogPost';
import turtlePub from './articles/turtle-pub.md';
import multifeature from './articles/multifeature.md';
import zebras from './articles/zebra-datasets.md';
import seadragon from './articles/seadragon.md';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiImage from '../../assets/multifeature.jpeg';
import seadragons from '../../assets/seadragons.jpeg';
import turtles from '../../assets/turtle-banner-small.jpg';
import pie from '../../assets/pie-article.jpeg';

const newsData = [
  {
    title:
      'New publication in the Journal of Experimental Marine Biology and Ecology',
    image: turtles,
    markdown: turtlePub,
    dateString: 'December 1, 2020',
    path: '/jembe-pub-2020',
  },
  {
    title: 'Wild Me Blog: The New PIE Algorithm',
    image: pie,
    markdown: articlePieBlog,
    dateString: 'November 16, 2020',
    path: '/pie-blog',
  },
  {
    title:
      'Staff publishes research in the Journal of Cetacean Research and Management',
    image: multiImage,
    markdown: multifeature,
    dateString: 'November 3, 2020',
    path: '/jcrm-pub-2020',
  },
  {
    title: 'Seadragon Wildbook official launch!',
    image: seadragons,
    markdown: seadragon,
    dateString: 'October 2, 2020',
    path: '/seadragon-launch',
  },
  {
    title:
      'Wild Me releases two zebra image datasets to spur research into Wildlife photo ID',
    image: zebraTexture,
    markdown: zebras,
    dateString: 'July 28, 2020',
    path: '/zebra-datasets',
  },
];

export default newsData;
