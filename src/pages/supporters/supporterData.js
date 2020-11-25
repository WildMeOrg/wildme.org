import microsoftLogo from '../../assets/microsoft_logo.png';
import h2oLogo from '../../assets/h2o_logo.svg';
import nvidiaLogo from '../../assets/nvidia_logo.png';
import mooreLogo from '../../assets/moore_logo.png';
import moorePhoto from '../../assets/moore_photo.jpeg';
import pineappleLogo from '../../assets/pineapple_fund_logo.png';
import pgnfLogo from '../../assets/pbnf_logo.png';
import sirenFleetLogo from '../../assets/siren_fleet.svg';
import georiaAquariumLogo from '../../assets/georgia-aquarium-logo.svg';
import britishEcologicalSocietyLogo from '../../assets/british_ecological_society_logo.png';
import adobeLogo from '../../assets/adobe_foundation_logo.png';
import nsfLogo from '../../assets/nsf_logo.png';
import waittLogo from '../../assets/waitt_logo.png';
import mmfLogo from '../../assets/mmf-logo-black.png';
import mmfBanner from '../../assets/mmf-banner.jpg';

export const majorSupporters = [
  {
    name: 'The Gordon and Betty Moore Foundation',
    role: 'Featured sponsor',
    youtubeUrl: null,
    photoSrc: moorePhoto,
    logo: mooreLogo,
    description:
      'The Gordon and Betty Moore Foundation fosters path-breaking scientific discovery, environmental conservation, patient care improvements and preservation of the special character of the Bay Area. Visit Moore.org and follow @MooreFound.',
  },
  {
    name: 'H2O.ai',
    role: 'Featured sponsor',
    youtubeUrl: 'https://www.youtube.com/watch?v=jQ_sM-ULJ8A',
    logo: h2oLogo,
    description:
      "On August 13, 2018, H2O.ai became a sponsor of Wildbook in celebration of World Elephant Day. H2O.ai's continued investment helps Wildbook support its staff, accelerating the conservation of endangered species with AI.",
  },
  {
    name: 'Microsoft',
    role: 'Featured sponsor',
    youtubeUrl: 'https://www.youtube.com/watch?v=rQqao37u1wU',
    logo: microsoftLogo,
    description:
      "On June 14, 2018, Wild Me (the organization that develops Wildbook) became a featured partner of Microsoft's AI for Earth program. This deep level of investment and engagement has enabled Wildbook to more effectively and efficiently use AI to combat extinction.",
  },
  {
    name: 'NVIDIA',
    role: 'Featured sponsor',
    youtubeUrl: 'https://www.youtube.com/watch?v=TLw_I1ghvLM',
    logo: nvidiaLogo,
    description:
      "Wild Me is a member of NVIDIA's Inception Incubator program and has received hardware donations from NVIDIA. The donated GPUs make it possible to run our machine learning algorithms faster and keep JP's basement from overheating and catching on fire.",
  },
  {
    name: 'Marine Megafauna Foundation',
    role: 'Featured partner',
    photoSrc: mmfBanner,
    logo: mmfLogo,
    description:
      'Marine Megafauna Foundation partnered with Wild Me to create mantamatcher.org, a tool used by multiple people.',
  },
];

export const supporterLogos = [
  {
    src: pineappleLogo,
    url: 'https://en.wikipedia.org/wiki/Pineapple_Fund',
    alt: 'The Pineapple Fund',
  },
  {
    src: nsfLogo,
    url: 'https://www.nsf.gov/',
    alt: 'National Science Foundation',
  },
  {
    src: pgnfLogo,
    url: 'https://www.pbnf.nl/',
    alt: 'The Prince Bernhard Nature Fund',
  },
  {
    src: adobeLogo,
    url: 'https://www.adobe.com/',
    alt: 'The Adobe Foundation',
  },
  {
    src: sirenFleetLogo,
    url: 'https://sirenfleet.com/',
    alt: 'Siren Fleet',
  },
  {
    src: georiaAquariumLogo,
    url: 'https://www.georgiaaquarium.org/',
    alt: 'Georgia Aquarium',
  },
  {
    src: britishEcologicalSocietyLogo,
    url: 'https://www.britishecologicalsociety.org/',
    alt: 'British Ecological Society',
  },
  {
    src: waittLogo,
    url: 'https://www.waittfoundation.org/',
    alt: 'The Waitt Foundation',
  },
];
