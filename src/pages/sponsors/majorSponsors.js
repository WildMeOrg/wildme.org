import microsoftLogo from '../../assets/microsoft_logo.png';
import h2oLogo from '../../assets/h2o_logo.svg';
import nvidiaLogo from '../../assets/nvidia_logo.png';
import mooreLogo from '../../assets/moore_logo.png';
import moorePhoto from '../../assets/moore_photo.jpeg';

const majorSponsors = [
  {
    name: 'The Gordon and Betty Moore Foundation',
    youtubeUrl: null,
    photoSrc: moorePhoto,
    logo: mooreLogo,
    description:
      'The Gordon and Betty Moore Foundation fosters path-breaking scientific discovery, environmental conservation, patient care improvements and preservation of the special character of the Bay Area. Visit Moore.org and follow @MooreFound.',
  },
  {
    name: 'H2O.ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=jQ_sM-ULJ8A',
    logo: h2oLogo,
    description:
      "On August 13, 2018, H2O.ai became a sponsor of Wildbook in celebration of World Elephant Day. H2O.ai's continued investment helps Wildbook support its staff, accelerating the conservation of endangered species with AI.",
  },
  {
    name: 'Microsoft',
    youtubeUrl: 'https://www.youtube.com/watch?v=rQqao37u1wU',
    logo: microsoftLogo,
    description:
      "On June 14, 2018, Wild Me (the organization that develops Wildbook) became a featured partner of Microsoft's AI for Earth program. This deep level of investment and engagement has enabled Wildbook to more effectively and efficiently use AI to combat extinction.",
  },
  {
    name: 'NVIDIA',
    youtubeUrl: 'https://www.youtube.com/watch?v=TLw_I1ghvLM',
    logo: nvidiaLogo,
    description:
      "Wild Me is a member of NVIDIA's Inception Incubator program and has received hardware donations from NVIDIA. The donated GPUs make it possible to run our machine learning algorithms faster and keep JP's basement from overheating and catching on fire.",
  },
];

export default majorSponsors;
