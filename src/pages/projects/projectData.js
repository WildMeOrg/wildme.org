import flukebookBannerLarge from '../../assets/flukebook-banner-large.jpg';
import flukebookBannerSmall from '../../assets/flukebook-banner-small.jpg';
import whalesharkBannerLarge from '../../assets/whaleshark-banner-large.jpg';
import whalesharkBannerSmall from '../../assets/whaleshark-banner-small.jpg';
import mantaBannerLarge from '../../assets/mantamatcher-banner-large.jpg';
import mantaBannerSmall from '../../assets/mantamatcher-banner-small.jpg';
import giraffeBannerLarge from '../../assets/giraffespotter-banner-large.jpg';
import giraffeBannerSmall from '../../assets/giraffespotter-banner-small.jpg';
import iotBannerLarge from '../../assets/turtle-banner-large.jpg';
import iotBannerSmall from '../../assets/turtle-banner-small.jpg';
import zebraBannerLarge from '../../assets/zebra-banner-large.jpg';
import zebraBannerSmall from '../../assets/zebra-banner-small.jpg';
import lynxBannerLarge from '../../assets/lynx-banner-large.jpg';
import lynxBannerSmall from '../../assets/lynx-banner-small.jpg';
import jaguarBannerLarge from '../../assets/jaguar-banner-large.jpg';
import jaguarBannerSmall from '../../assets/jaguar-banner-small.jpg';
import noaaLogo from '../../assets/noaa-logo.png';
import dwspLogo from '../../assets/dswp-logo.png';
import neaqLogo from '../../assets/neaq-logo.jpg';
import dmcrLogo from '../../assets/dmcr-logo.png';
import mmfLogo from '../../assets/mmf-logo.png';
import wsorcLogo from '../../assets/wsorc-logo.png';

const projectData = [
  {
    name: 'Flukebook',
    path: '/flukebook',
    href: 'https://flukebook.org/',
    inviteOnly: true,
    adminName: 'Drew Blount',
    adminContact: 'drew@wildme.org',
    bannerLarge: flukebookBannerLarge,
    bannerSmall: flukebookBannerSmall,
    descriptionId: 'FLUKEBOOK_DESCRIPTION',
    sightings: 203772,
    individuals: 42505,
    photos: 1200000,
    partners: [
      {
        name: 'NOAA',
        logo: noaaLogo,
      },
      {
        name: 'Dominican Sperm Whale Project',
        logo: dwspLogo,
      },
      {
        name: 'New England Aquarium',
        logo: neaqLogo,
      },
    ],
    species: [
      {
        name: 'Balaenoptera acutorostrata',
        alias: 'Minke whale',
      },
      {
        name: 'Balaenoptera borealis',
        alias: 'Sei whale',
      },
      {
        name: 'Balaenoptera brydei',
        alias: "Bryde's whale",
      },
      {
        name: 'Balaenoptera edeni',
        alias: "Bryde's/Eden's whale",
      },
      {
        name: 'Balaenoptera musculus',
        alias: 'Blue whale',
      },
      {
        name: 'Balaenoptera physalus',
        alias: 'Fin whale',
      },
      {
        name: 'Delphinus capensis',
        alias: 'Long-beaked common dolphin',
      },
      {
        name: 'Delphinus delphis',
        alias: 'Short-beaked common dolphin',
      },
      {
        name: 'Dugong dugon',
        alias: 'Dugong',
      },
      {
        name: 'Delphinus capens',
        alias: 'Long-beaked common dolphin',
      },
      {
        name: 'Eubalaena australis',
        alias: 'Southern right whale',
      },
      {
        name: 'Eubalaena glacialis',
        alias: 'North Atlantic right whale',
      },
      {
        name: 'Feresa attenuata',
        alias: 'Pygmy killer whale',
      },
      {
        name: 'Globicephala macrorhynchus',
        alias: 'Short-finned pilot whale',
      },
      {
        name: 'Grampus griseus',
        alias: "Risso's dolphin",
      },
      {
        name: 'Kogia breviceps',
        alias: 'Pygmy sperm whale',
      },
      {
        name: 'Kogia sima',
        alias: 'Dwarf sperm whale',
      },
      {
        name: 'Lagenorhynchus albirostris',
        alias: 'White-beaked dolphin',
      },
      {
        name: 'Megaptera novaeangliae',
        alias: 'Humpback whale',
      },
      {
        name: 'Neophocaena phocaenoides',
        alias: 'Finless porpoise',
      },
      {
        name: 'Orcaella brevirostris',
        alias: 'Irrawaddy dolphin',
      },
      {
        name: 'Orcinus orca',
        alias: 'Killer whale',
      },
      {
        name: 'Physeter macrocephalus',
        alias: 'Sperm whale',
      },
      {
        name: 'Pseudorca crassidens',
        alias: 'False killer whale',
      },
      {
        name: 'Sousa chinensis',
        alias: 'Indo-Pacific humpback dolphin',
      },
      {
        name: 'Sousa plumbea',
        alias: 'Indian Ocean humpback dolphin',
      },
      {
        name: 'Stenella attenuata',
        alias: 'Pantropical spotted dolphin',
      },
      {
        name: 'Stenella coeruleoalba',
        alias: 'Striped dolphin',
      },
      {
        name: 'Stenella frontalis',
        alias: 'Atlantic spotted dolphin',
      },
      {
        name: 'Stenella longirostris',
        alias: 'Spinner dolphin',
      },
      {
        name: 'Steno bredanensis',
        alias: 'Rough-toothed dolphin',
      },
      {
        name: 'Tursiops aduncus',
        alias: 'Indo-Pacific bottlenose dolphin',
      },
      {
        name: 'Tursiops truncatus',
        alias: 'Bottlenose dolphin',
      },
      {
        name: 'Ziphiidae',
        alias: 'Beaked whale',
      },
      {
        name: 'Ziphius cavirostris',
        alias: "Cuvier's beaked whale",
      },
    ],
  },
  {
    name: 'whaleshark.org',
    path: '/whaleshark',
    href: 'https://whaleshark.org/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: whalesharkBannerLarge,
    bannerSmall: whalesharkBannerSmall,
    descriptionId: 'WHALESHARK_DESCRIPTION',
    sightings: 75191,
    individuals: 12060,
    partners: [
      {
        name: 'Whale Shark and Oceanic Research Centre',
        logo: wsorcLogo,
      },
      {
        name: 'Department of Marine and Coastal Resources, Thailand',
        logo: dmcrLogo,
      },
    ],
    species: [
      {
        name: 'Rhincodon typus',
        alias: 'Whale shark',
      },
    ],
  },
  {
    name: 'MantaMatcher',
    path: '/mantamatcher',
    href: 'https://mantamatcher.org/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: mantaBannerLarge,
    bannerSmall: mantaBannerSmall,
    descriptionId: 'MANTAMATCHER_DESCRIPTION',
    sightings: 36287,
    individuals: 11105,
    partners: [
      {
        name: 'Marine Megafauna Foundation',
        logo: mmfLogo,
      },
    ],
    species: [
      {
        name: 'Manta alfredi',
        alias: 'Reef manta ray',
      },
      {
        name: 'Manta birostris',
        alias: 'Giant oceanic manta ray',
      },
      {
        name: 'Aetomylaeus bovinus',
        alias: 'Bull ray',
      },
      {
        name: 'Aetomylaeus bovinus',
        alias: 'Bull ray',
      },
      {
        name: 'Himantura uarnak',
        alias: 'Honeycomb whipray',
      },
    ],
  },
  {
    name: 'GiraffeSpotter',
    path: '/giraffespotter',
    href: 'https://giraffespotter.org/',
    inviteOnly: true,
    adminName: 'Jon Van Oast',
    adminContact: 'jon@wildme.org',
    bannerLarge: giraffeBannerLarge,
    bannerSmall: giraffeBannerSmall,
    descriptionId: 'GIRAFFESPOTTER_DESCRIPTION',
    sightings: 20379,
    individuals: 6801,
    partners: [
    ],
    species: [
      {
        name: 'Giraffa reticulata',
        alias: 'Reticulated giraffe',
      },
      {
        name: 'Giraffa camelopardalis peralta',
        alias: 'West African giraffe',
      },
      {
        name: 'Giraffa giraffa angolensis',
        alias: 'Angolan giraffe',
      },
      {
        name: 'Giraffa tippelskirchi',
        alias: 'Masai giraffe',
      },
      {
        name: 'Giraffa camelopardalis',
        alias: 'Northern giraffe',
      },
    ],
  },
  {
    name: 'Internet of Turtles',
    path: '/iot',
    href: 'https://iot.wildbook.org/',
    inviteOnly: true,
    adminName: 'Colin Kingen',
    adminContact: 'colin@wildme.org',
    bannerLarge: iotBannerLarge,
    bannerSmall: iotBannerSmall,
    descriptionId: 'IOT_DESCRIPTION',
    sightings: 37149,
    individuals: 6775,
    partners: [
    ],
    species: [
      {
        name: 'Chelonia mydas',
        alias: 'Green turtle',
      },
      {
        name: 'Eretmochelys imbricata',
        alias: 'Hawksbill turtle',
      },
      {
        name: 'Caretta caretta',
        alias: 'Loggerhead turtle',
      },
      {
        name: 'Lepidochelys olivacea',
        alias: 'Olive Ridley turtle',
      },
      {
        name: 'Giraffa camelopardalis',
        alias: 'Leatherback turtle',
      },
    ],
  },
  {
    name: 'Wildbook for Zebras',
    path: '/zebra',
    href: 'https://zebra.wildbook.org/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: zebraBannerLarge,
    bannerSmall: zebraBannerSmall,
    descriptionId: 'ZEBRA_DESCRIPTION',
    sightings: 28520,
    individuals: 8280,
    partners: [
    ],
    species: [
      {
        name: 'Equus quagga',
        alias: 'Plains zebra',
      },
      {
        name: 'Equus grevyi',
        alias: "Grevyi's zebra",
      },
    ],
  },
  {
    name: 'Wildbook for Lynx',
    path: '/lynx',
    href: 'https://lynx.wildbook.org/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: lynxBannerLarge,
    bannerSmall: lynxBannerSmall,
    descriptionId: 'LYNX_DESCRIPTION',
    sightings: 22479,
    individuals: 558,
    partners: [
    ],
    species: [
      {
        name: 'Lynx pardinus',
        alias: 'Iberian lynx',
      },
    ],
  },
  {
    name: 'Spotting Giant Sea Bass',
    path: '/bass',
    href: 'https://spottinggiantseabass.msi.ucsb.edu/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: lynxBannerLarge,
    bannerSmall: lynxBannerSmall,
    descriptionId: 'BASS_DESCRIPTION',
    sightings: 607,
    individuals: null,
    partners: [
    ],
    species: [
      {
        name: 'Stereolepis gigas',
        alias: 'Giant sea bass',
      },
    ],
  },
  {
    name: 'Spot a Shark',
    path: '/spotashark',
    href: 'https://spotashark.com/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: lynxBannerLarge,
    bannerSmall: lynxBannerSmall,
    descriptionId: 'SPOT_A_SHARK_DESCRIPTION',
    sightings: null,
    individuals: null,
    partners: [
    ],
    species: [
      {
        name: 'Carcharias taurus',
        alias: 'Sand tiger shark',
      },
    ],
  },
  {
    name: 'Spot a Shark USA',
    path: '/spotasharkusa',
    href: 'https://spotasharkusa.com/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: lynxBannerLarge,
    bannerSmall: lynxBannerSmall,
    descriptionId: 'SPOT_A_SHARK_USA_DESCRIPTION',
    sightings: null,
    individuals: null,
    partners: [
    ],
    species: [
      {
        name: 'Carcharias taurus',
        alias: 'Sand tiger shark',
      },
    ],
  },
  {
    name: 'Wildbook for Jaguars',
    path: '/jaguar',
    href: 'https://jaguar.wildbook.com/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: jaguarBannerLarge,
    bannerSmall: jaguarBannerSmall,
    descriptionId: 'JAGUAR_DESCRIPTION',
    sightings: 925,
    individuals: 129,
    partners: [
    ],
    species: [
      {
        name: 'Panthera onca',
        alias: 'Jaguar',
      },
    ],
  },
  {
    name: 'Saimaa Seal',
    path: '/saimaaseal',
    href: 'https://norppagalleria.wwf.fi/',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: jaguarBannerLarge,
    bannerSmall: jaguarBannerSmall,
    descriptionId: 'SAIMAA_SEAL_DESCRIPTION',
    sightings: 4559,
    individuals: 446,
    partners: [
    ],
    species: [
      {
        name: 'Pusa hispida saimensis',
        alias: 'Saimaa ringed seal',
      },
    ],
  },
];

export default projectData;
