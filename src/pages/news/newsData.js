import turtlePub from './articles/turtle-pub.md';
import multifeature from './articles/multifeature.md';
import zebras from './articles/zebra-datasets.md';
import seadragon from './articles/seadragon.md';
import letter2021 from './articles/2021';
import jasonHolmberg from '../../assets/staff/jh.jpg';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiImage from '../../assets/multifeature.jpeg';
import seadragons from '../../assets/seadragons.jpeg';
import turtles from '../../assets/turtle-banner-small.jpg';
import pie from '../../assets/pie-article.jpeg';
import articlePieBlog from './articles/PieBlogPost';
import assignerImage from './assets/assigner-blog-post/bpc-confusing.jpg';
import assignerPost from './articles/assigner-blog-post';

const newsData = [
  {
    title: 'Thank You For Supporting Wild Me in 2021',
    image: jasonHolmberg,
    markdown: letter2021,
    dateString: 'January 1st, 2022',
    path: '/thank-you-2021',
    author: 'Jason Holmberg',
  },
  {
    title: 'The Assigner: Building an ML Component Start to Finish',
    image: assignerImage,
    markdown: assignerPost,
    dateString: 'February 24, 2021',
    path: '/assigner-blog',
    author: 'Drew Blount',
  },
  {
    title:
      'New publication in the Journal of Experimental Marine Biology and Ecology',
    image: turtles,
    markdown: turtlePub,
    dateString: 'December 1, 2020',
    path: '/jembe-pub-2020',
    author: 'Jason Holmberg',
  },
  {
    title: 'Wild Me Blog: The New PIE Algorithm',
    image: pie,
    markdown: articlePieBlog,
    dateString: 'November 16, 2020',
    path: '/pie-blog',
    author: 'Drew Blount',
  },
  {
    title:
      'Staff publishes research in the Journal of Cetacean Research and Management',
    image: multiImage,
    markdown: multifeature,
    dateString: 'November 3, 2020',
    path: '/jcrm-pub-2020',
    author: 'Jason Holmberg',
  },
  {
    title: 'Seadragon Wildbook official launch!',
    image: seadragons,
    markdown: seadragon,
    dateString: 'October 2, 2020',
    path: '/seadragon-launch',
    author: 'Jason Holmberg',
  },
  {
    title:
      'Wild Me releases two zebra image datasets to spur research into Wildlife photo ID',
    image: zebraTexture,
    markdown: zebras,
    dateString: 'July 28, 2020',
    path: '/zebra-datasets',
    author: 'Jason Holmberg',
  },
];

export default newsData;
