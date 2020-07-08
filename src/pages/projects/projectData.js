import flukebookBannerLarge from '../../assets/flukebook-banner-large.jpg';
import flukebookBannerSmall from '../../assets/flukebook-banner-small.jpg';
import whalesharkBannerLarge from '../../assets/whaleshark-banner-large.jpg';
import whalesharkBannerSmall from '../../assets/whaleshark-banner-small.jpg';
import mantaBannerLarge from '../../assets/mantamatcher-banner-large.jpg';
import mantaBannerSmall from '../../assets/mantamatcher-banner-small.jpg';
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
    inviteContact: 'drew@wildme.org',
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
    inviteContact: 'jason@wildme.org',
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
    inviteContact: 'jason@wildme.org',
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
];

export default projectData;
