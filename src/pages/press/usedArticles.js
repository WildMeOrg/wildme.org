import seattleTimesLogo from '../../assets/seattle-times-logo.svg';
import guardianLogo from '../../assets/guardian-logo.svg';
import natureLogo from '../../assets/nature-logo.svg';
import newYorkTimesLogo from '../../assets/new-york-times-logo.svg';

const articles = [
  {
    name:
      'How a Portland nonprofit is using artificial intelligence to help save whales, giraffes, zebras',
    href:
      'https://www.seattletimes.com/seattle-news/environment/how-a-portland-nonprofit-is-using-artificial-intelligence-to-help-save-whales-giraffes-zebras/',
    organization: 'The Seattle Times',
    date: 'February 29, 2020',
    citation: 'Aimee Rawlins, The Seattle Times',
    logo: seattleTimesLogo,
    excerpt:
      'The Wildbook for whales, called Flukebook, encourages collaboration, which is particularly useful for whales that travel long distances because it can be difficult for one research group to effectively monitor one area.    ',
  },
  {
    name: 'AI could be a critical tool to saving the planet',
    href:
      'https://www.theguardian.com/ai-for-earth/2019/apr/30/ai-tech-sustainable-planet',
    organization: 'The Guardian',
    citation: 'The Guardian Labs',
    date: 'April 30, 2019',
    logo: guardianLogo,
    excerpt:
      'Using AI to collect and curate data will also free up valuable time needed by researchers to develop and revise conservation plans to combat extinction.',
  },
  {
    name: 'AI empowers conservation biology',
    href:
      'https://www.nature.com/articles/d41586-019-00746-1?fbclid=IwAR2FZZkMqX4iGmH5vgRcdcIWtD0tQjJ6y46O0C3dos2aMG8jAY317nMZeQo',
    organization: 'Nature',
    citation: 'Roberta Kwok, Nature',
    date: 'March 4, 2019',
    logo: natureLogo,
    excerpt:
      'Wildbook uses neural networks and computer-vision algorithms to detect and count animals in images, and to identify individual animals within a species. This information enables more precise estimates of wildlife population sizes.',
  },
  {
    name: 'Tracking the Elusive Whale Shark',
    href:
      'https://www.nytimes.com/2017/11/29/science/whale-sharks.html',
    organization: 'The New York Times',
    citation: 'Karen Weintraub, The New York Times',
    date: 'November 11, 2017',
    logo: newYorkTimesLogo,
    excerpt:
      'The ability to photo-identify species — and indeed the whale shark was the first shark we could do this for — has transformed our ability to understand how many individuals are out there, who is moving where, how far do they go, and how many are staying around.',
  },
];

export default articles;
