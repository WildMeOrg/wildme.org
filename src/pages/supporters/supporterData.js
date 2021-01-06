import microsoftLogo from '../../assets/microsoft_logo.png';
import h2oLogo from '../../assets/h2o_logo.svg';
import nvidiaLogo from '../../assets/nvidia_logo.png';
import mooreLogo from '../../assets/moore_logo.png';
import moorePhoto from '../../assets/moore_photo.jpeg';
import pineappleLogo from '../../assets/pineapple_fund_logo.png';
import pgnfLogo from '../../assets/pbnf_logo.png';
import sirenFleetLogo from '../../assets/siren_fleet.svg';
import seadragonSearchLogo from '../../assets/seadragon-logo.png';
import seadragonSearchBanner from '../../assets/seadragon-banner-small.jpg';
import georiaAquariumLogo from '../../assets/georgia-aquarium-logo.svg';
import britishEcologicalSocietyLogo from '../../assets/british_ecological_society_logo.png';
import adobeLogo from '../../assets/adobe_foundation_logo.png';
import nsfLogo from '../../assets/nsf_logo.png';
import waittLogo from '../../assets/waitt_logo.png';
import mmfLogo from '../../assets/mmf-logo-black.png';
import mmfBanner from '../../assets/mmf-banner.jpg';
import noaaLogo from '../../assets/noaa-logo.png';
import noaaBanner from '../../assets/noaaBanner.jpg';
import transloaditLogo from './assets/transloadit-logo.svg';
import lokaliseLogo from './assets/lokalise-logo.svg';
import flatfileLogo from './assets/flatfile-logo.svg';
import algoliaLogo from './assets/algolia-logo.svg';

export const majorSupporters = [
  {
    name: 'The Gordon and Betty Moore Foundation',
    role: 'Featured sponsor',
    youtubeUrl: null,
    photoSrc: moorePhoto,
    logo: mooreLogo,
    url: 'https://www.moore.org/',
    description:
      'The Gordon and Betty Moore Foundation fosters path-breaking scientific discovery, environmental conservation, patient care improvements and preservation of the special character of the Bay Area. Visit Moore.org and follow @MooreFound.',
  },
  {
    name: 'H2O.ai',
    role: 'Featured sponsor',
    youtubeUrl: 'https://www.youtube.com/watch?v=jQ_sM-ULJ8A',
    logo: h2oLogo,
    url: 'https://www.h2o.ai/',
    description:
      "On August 13, 2018, H2O.ai became a sponsor of Wildbook in celebration of World Elephant Day. H2O.ai's continued investment helps Wildbook support its staff, accelerating the conservation of endangered species with AI.",
  },
  {
    name: 'Microsoft',
    role: 'Featured sponsor',
    youtubeUrl: 'https://www.youtube.com/watch?v=rQqao37u1wU',
    logo: microsoftLogo,
    url: 'https://www.microsoft.com/',
    description:
      "On June 14, 2018, Wild Me became a featured partner of Microsoft's AI for Earth program. This deep level of investment and engagement has enabled Wildbook to more effectively and efficiently use AI to combat extinction. Wild Me joined the Microsoft for Startups program in 2020.",
  },
  {
    name: 'NVIDIA',
    role: 'Featured sponsor',
    youtubeUrl: 'https://www.youtube.com/watch?v=TLw_I1ghvLM',
    logo: nvidiaLogo,
    url: 'https://www.nvidia.com/',
    description:
      "Wild Me is a member of NVIDIA's Inception Incubator program and has received hardware donations from NVIDIA.",
  },
  {
    name: 'Marine Megafauna Foundation',
    role: 'Featured partner',
    photoSrc: mmfBanner,
    logo: mmfLogo,
    url: 'https://marinemegafaunafoundation.org/',
    description:
      'Marine Megafauna Foundation partnered with Wild Me to create MantaMatcher, the Wildbook for mantas and other rays.',
  },
  {
    name: 'National Oceanic and Atmospheric Administration (NOAA)',
    role: 'Featured partner',
    photoSrc: noaaBanner,
    logo: noaaLogo,
    url: 'https://www.noaa.gov/',
    description: 'NOAA partners with Wild Me to improve Flukebook.',
  },
  {
    name: 'SeadragonSearch',
    role: 'Featured partner',
    url: 'https://seadragonsearch.org/',
    photoSrc: seadragonSearchBanner,
    logo: seadragonSearchLogo,
    description:
      'SeadragonSearch partnered with Wild Me to create SeadragonSearch.org, the Wildbook for Seadragons.',
  },
];

export const softwareLogos = [
  {
    imageSrc: lokaliseLogo,
    url: 'https://lokalise.com/',
    name: 'Lokalise',
    tooltip: 'Translation management services for Codex',
  },
  {
    imageSrc: transloaditLogo,
    url: 'https://transloadit.com/',
    name: 'Transloadit',
    tooltip: 'File upload services for Codex',
  },
  {
    imageSrc: flatfileLogo,
    url: 'https://flatfile.io/',
    name: 'Flatfile',
    tooltip: 'Data import services for Codex',
  },
  {
    imageSrc: algoliaLogo,
    url: 'https://www.algolia.com/',
    name: 'Algolia',
    tooltip: 'Documentation search',
  },
];

export const supporterLogos = [
  {
    imageSrc: pineappleLogo,
    url: 'https://en.wikipedia.org/wiki/Pineapple_Fund',
    name: 'The Pineapple Fund',
  },
  {
    imageSrc: nsfLogo,
    url: 'https://www.nsf.gov/',
    name: 'National Science Foundation',
  },
  {
    imageSrc: pgnfLogo,
    url: 'https://www.pbnf.nl/',
    name: 'The Prince Bernhard Nature Fund',
  },
  {
    imageSrc: adobeLogo,
    url: 'https://www.adobe.com/',
    name: 'The Adobe Foundation',
  },
  {
    imageSrc: sirenFleetLogo,
    url: 'https://sirenfleet.com/',
    name: 'Siren Fleet',
  },
  {
    imageSrc: georiaAquariumLogo,
    url: 'https://www.georgiaaquarium.org/',
    name: 'Georgia Aquarium',
  },
  {
    imageSrc: britishEcologicalSocietyLogo,
    url: 'https://www.britishecologicalsociety.org/',
    name: 'British Ecological Society',
  },
  {
    imageSrc: waittLogo,
    url: 'https://www.waittfoundation.org/',
    name: 'The Waitt Foundation',
  },
];
