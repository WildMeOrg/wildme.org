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
import acwBannerLarge from '../../assets/acw-banner-large.jpg';
import acwBannerSmall from '../../assets/acw-banner-small.jpg';
import leopardSharkBanner from '../../assets/leopardshark.jpg';
import zebraBannerLarge from '../../assets/zebra-banner-large.jpg';
import zebraBannerSmall from '../../assets/zebra-banner-small.jpg';
import lynxBannerLarge from '../../assets/lynx-banner-large.jpg';
import lynxBannerSmall from '../../assets/lynx-banner-small.jpg';
import jaguarBannerLarge from '../../assets/jaguar-banner-large.jpg';
import jaguarBannerSmall from '../../assets/jaguar-banner-small.jpg';
import dragonsearchBannerLarge from '../../assets/seadragon-banner-large.jpg';
import dragonsearchBannerSmall from '../../assets/seadragon-banner-small.jpg';
import saimaaBannerLarge from '../../assets/saimaa-banner-large.jpg';
import saimaaBannerSmall from '../../assets/saimaa-banner-small.jpg';
import sandtigerBannerLarge from '../../assets/sandtiger-banner-large.jpg';
import sandtigerBannerSmall from '../../assets/sandtiger-banner-small.jpg';
import bassBannerLarge from '../../assets/bass-banner-large.jpg';
import bassBannerSmall from '../../assets/bass-banner-small.jpg';
import skunkBannerLarge from '../../assets/skunk-banner-large.jpg';
import skunkBannerSmall from '../../assets/skunk-banner-small.jpg';
import sharkUsaBannerLarge from '../../assets/shark-usa-banner-large.jpg';
import sharkUsaBannerSmall from '../../assets/shark-usa-banner-small.jpg';
import osuLogo from '../../assets/osu_logo.svg';
import noaaLogo from '../../assets/noaa-logo.png';
import dwspLogo from '../../assets/dswp-logo.png';
import indocetLogo from '../../assets/indocet-logo.png';
import boemLogo from '../../assets/boem-logo.png';
import aswnLogo from '../../assets/aswn-logo.png';
import dmcrLogo from '../../assets/dmcr-logo.png';
import mmfLogo from '../../assets/mmf-logo.png';
import wsorcLogo from '../../assets/wsorc-logo.png';
import gcfLogo from '../../assets/gcf_logo.png';
import sdZooLogo from '../../assets/sdzoo_global.png';
import algorithms from '../../constants/algorithms';

const projectData = [
  {
    name: 'Flukebook',
    path: '/flukebook',
    href: 'https://flukebook.org/',
    inviteOnly: true,
    hosted: true,
    tagline:
      'Computer vision and deep learning to identify and track individual whales and dolphins.',
    adminName: 'Drew Blount',
    adminContact: 'drew@wildme.org',
    bannerLarge: flukebookBannerLarge,
    bannerSmall: flukebookBannerSmall,
    descriptionId: 'FLUKEBOOK_DESCRIPTION',
    sightings: 203772,
    individuals: 42505,
    photos: 1200000,
    algorithms: [
      algorithms.hotspotter,
      algorithms.curvrank,
      algorithms.deepsense,
      algorithms.dtw,
      algorithms.kaggle,
    ],
    partners: [
      {
        name: 'Dominican Sperm Whale Project',
        imageSrc: dwspLogo,
        invertLogo: true,
        url: 'http://www.thespermwhaleproject.org/',
      },
      {
        name: 'National Oceanic and Atmospheric Administration',
        imageSrc: noaaLogo,
        url: 'https://www.noaa.gov/',
      },
      {
        name: 'Indocet',
        imageSrc: indocetLogo,
        url: 'https://indocet.org/',
      },
      {
        name: 'Arabian Sea Whale Network',
        imageSrc: aswnLogo,
        url: 'https://arabianseawhalenetwork.org/',
      },
      {
        name: 'Bureau of Ocean Energy Management',
        imageSrc: boemLogo,
        url: 'https://www.boem.gov/',
      },
    ],
    species: [
      {
        name: 'Balaenoptera acutorostrata',
        alias: 'Minke whale',
        url: 'https://en.wikipedia.org/wiki/Common_minke_whale',
      },
      {
        name: 'Balaenoptera borealis',
        alias: 'Sei whale',
        url: 'https://en.wikipedia.org/wiki/Sei_whale',
      },
      {
        name: 'Balaenoptera brydei',
        alias: "Bryde's whale",
        url: 'https://en.wikipedia.org/wiki/Bryde%27s_whale',
      },
      {
        name: 'Balaenoptera edeni',
        alias: "Bryde's/Eden's whale",
        url: 'https://en.wikipedia.org/wiki/Bryde%27s_whale',
      },
      {
        name: 'Balaenoptera musculus',
        alias: 'Blue whale',
        url: 'https://en.wikipedia.org/wiki/Blue_whale',
      },
      {
        name: 'Balaenoptera physalus',
        alias: 'Fin whale',
        url: 'https://en.wikipedia.org/wiki/Fin_whale',
      },
      {
        name: 'Delphinus capensis',
        alias: 'Long-beaked common dolphin',
        url:
          'https://en.wikipedia.org/wiki/Long-beaked_common_dolphin',
      },
      {
        name: 'Delphinus delphis',
        alias: 'Short-beaked common dolphin',
        url:
          'https://en.wikipedia.org/wiki/Short-beaked_common_dolphin',
      },
      {
        name: 'Dugong dugon',
        alias: 'Dugong',
        url: 'https://en.wikipedia.org/wiki/Dugong',
      },
      {
        name: 'Eubalaena australis',
        alias: 'Southern right whale',
        url: 'https://en.wikipedia.org/wiki/Southern_right_whale',
      },
      {
        name: 'Eubalaena glacialis',
        alias: 'North Atlantic right whale',
        url:
          'https://en.wikipedia.org/wiki/North_Atlantic_right_whale',
      },
      {
        name: 'Feresa attenuata',
        alias: 'Pygmy killer whale',
        url: 'https://en.wikipedia.org/wiki/Pygmy_killer_whale',
      },
      {
        name: 'Globicephala macrorhynchus',
        alias: 'Short-finned pilot whale',
        url: 'https://en.wikipedia.org/wiki/Short-finned_pilot_whale',
      },
      {
        name: 'Grampus griseus',
        alias: "Risso's dolphin",
        url: 'https://en.wikipedia.org/wiki/Risso%27s_dolphin',
      },
      {
        name: 'Kogia breviceps',
        alias: 'Pygmy sperm whale',
        url: 'https://en.wikipedia.org/wiki/Pygmy_sperm_whale',
      },
      {
        name: 'Kogia sima',
        alias: 'Dwarf sperm whale',
        url: 'https://en.wikipedia.org/wiki/Dwarf_sperm_whale',
      },
      {
        name: 'Lagenorhynchus albirostris',
        alias: 'White-beaked dolphin',
        url: 'https://en.wikipedia.org/wiki/White-beaked_dolphin',
      },
      {
        name: 'Megaptera novaeangliae',
        alias: 'Humpback whale',
        url: 'https://en.wikipedia.org/wiki/Humpback_whale',
      },
      {
        name: 'Neophocaena phocaenoides',
        alias: 'Finless porpoise',
        url: 'https://en.wikipedia.org/wiki/Finless_porpoise',
      },
      {
        name: 'Orcaella brevirostris',
        alias: 'Irrawaddy dolphin',
        url: 'https://en.wikipedia.org/wiki/Irrawaddy_dolphin',
      },
      {
        name: 'Orcinus orca',
        alias: 'Orca whale',
        url: 'https://en.wikipedia.org/wiki/Killer_whale',
      },
      {
        name: 'Physeter macrocephalus',
        alias: 'Sperm whale',
        url: 'https://en.wikipedia.org/wiki/Sperm_whale',
      },
      {
        name: 'Pseudorca crassidens',
        alias: 'False killer whale',
        url: 'https://en.wikipedia.org/wiki/False_killer_whale',
      },
      {
        name: 'Sousa chinensis',
        alias: 'Indo-Pacific humpback dolphin',
        url:
          'https://en.wikipedia.org/wiki/Indo-Pacific_humpback_dolphin',
      },
      {
        name: 'Sousa plumbea',
        alias: 'Indian Ocean humpback dolphin',
        url:
          'https://en.wikipedia.org/wiki/Indian_Ocean_humpback_dolphin',
      },
      {
        name: 'Stenella attenuata',
        alias: 'Pantropical spotted dolphin',
        url:
          'https://en.wikipedia.org/wiki/Pantropical_spotted_dolphin',
      },
      {
        name: 'Stenella coeruleoalba',
        alias: 'Striped dolphin',
        url: 'https://en.wikipedia.org/wiki/Striped_dolphin',
      },
      {
        name: 'Stenella frontalis',
        alias: 'Atlantic spotted dolphin',
        url: 'https://en.wikipedia.org/wiki/Atlantic_spotted_dolphin',
      },
      {
        name: 'Stenella longirostris',
        alias: 'Spinner dolphin',
        url: 'https://en.wikipedia.org/wiki/Spinner_dolphin',
      },
      {
        name: 'Steno bredanensis',
        alias: 'Rough-toothed dolphin',
        url: 'https://en.wikipedia.org/wiki/Rough-toothed_dolphin',
      },
      {
        name: 'Tursiops aduncus',
        alias: 'Indo-Pacific bottlenose dolphin',
        url:
          'https://en.wikipedia.org/wiki/Indo-Pacific_bottlenose_dolphin',
      },
      {
        name: 'Tursiops truncatus',
        alias: 'Bottlenose dolphin',
        url:
          'https://en.wikipedia.org/wiki/Common_bottlenose_dolphin',
      },
      {
        name: 'Ziphiidae',
        alias: 'Beaked whale',
        url: 'https://en.wikipedia.org/wiki/Beaked_whale',
      },
      {
        name: 'Ziphius cavirostris',
        alias: "Cuvier's beaked whale",
        url: 'https://en.wikipedia.org/wiki/Cuvier%27s_beaked_whale',
      },
    ],
  },
  {
    name: 'whaleshark.org',
    path: '/whaleshark',
    href: 'https://whaleshark.org/',
    tagline:
      'A.I for the conservation of whale sharks by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adoption: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: whalesharkBannerLarge,
    bannerSmall: whalesharkBannerSmall,
    descriptionId: 'WHALESHARK_DESCRIPTION',
    sightings: 75191,
    individuals: 12060,
    algorithms: [algorithms.groth, algorithms.i3s],
    partners: [
      {
        name: 'Whale Shark and Oceanic Research Centre',
        imageSrc: wsorcLogo,
        url: 'https://wsorc.org/',
      },
      {
        name: 'Department of Marine and Coastal Resources, Thailand',
        imageSrc: dmcrLogo,
        url:
          'https://www.iyor2018.org/organization/department-marine-coastal-resources-thailand/',
      },
    ],
    species: [
      {
        name: 'Rhincodon typus',
        alias: 'Whale shark',
        url: 'https://en.wikipedia.org/wiki/Whale_shark',
      },
    ],
  },
  {
    name: 'MantaMatcher',
    path: '/mantamatcher',
    href: 'https://mantamatcher.org/',
    tagline:
      'A.I for the conservation of rays by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adoption: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: mantaBannerLarge,
    bannerSmall: mantaBannerSmall,
    descriptionId: 'MANTAMATCHER_DESCRIPTION',
    sightings: 36287,
    individuals: 11105,
    algorithms: [
      algorithms.mantamatcher,
      algorithms.pie,
      algorithms.hotspotter,
    ],
    partners: [
      {
        name: 'Marine Megafauna Foundation',
        imageSrc: mmfLogo,
        invertLogo: true,
        url: 'https://marinemegafaunafoundation.org/',
      },
    ],
    species: [
      {
        name: 'Manta alfredi',
        alias: 'Reef manta ray',
        url: 'https://en.wikipedia.org/wiki/Reef_manta_ray',
      },
      {
        name: 'Manta birostris',
        alias: 'Giant oceanic manta ray',
        url: 'https://en.wikipedia.org/wiki/Manta_birostris',
      },
      {
        name: 'Aetomylaeus bovinus',
        alias: 'Bull ray',
        url: 'https://en.wikipedia.org/wiki/Bull_ray',
      },
      {
        name: 'Himantura uarnak',
        alias: 'Honeycomb whipray',
        url: 'https://en.wikipedia.org/wiki/Reticulate_whipray',
      },
    ],
  },
  {
    name: 'GiraffeSpotter',
    path: '/giraffespotter',
    href: 'https://giraffespotter.org/',
    tagline:
      'A.I for the conservation of giraffes by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jon Van Oast',
    adminContact: 'jon@wildme.org',
    bannerLarge: giraffeBannerLarge,
    bannerSmall: giraffeBannerSmall,
    descriptionId: 'GIRAFFESPOTTER_DESCRIPTION',
    sightings: 20379,
    individuals: 6801,
    algorithms: [algorithms.hotspotter],
    partners: [
      {
        name: 'Giraffe Conservation Foundation',
        imageSrc: gcfLogo,
        url: 'https://giraffeconservation.org/',
      },
      {
        name: 'San Diego Zoo Global',
        imageSrc: sdZooLogo,
        url: 'https://www.sandiegozooglobal.org/',
      },
    ],
    species: [
      {
        name: 'Giraffa reticulata',
        alias: 'Reticulated giraffe',
        url: 'https://en.wikipedia.org/wiki/Reticulated_giraffe',
      },
      {
        name: 'Giraffa camelopardalis peralta',
        alias: 'West African giraffe',
        url: 'https://en.wikipedia.org/wiki/West_African_giraffe',
      },
      {
        name: 'Giraffa giraffa angolensis',
        alias: 'Angolan giraffe',
        url: 'https://en.wikipedia.org/wiki/Angolan_giraffe',
      },
      {
        name: 'Giraffa tippelskirchi',
        alias: 'Masai giraffe',
        url: 'https://en.wikipedia.org/wiki/Masai_giraffe',
      },
      {
        name: 'Giraffa camelopardalis',
        alias: 'Northern giraffe',
        url: 'https://en.wikipedia.org/wiki/Northern_giraffe',
      },
    ],
  },
  {
    name: 'Internet of Turtles',
    path: '/iot',
    href: 'https://iot.wildbook.org/',
    tagline:
      'A.I for the conservation of turtles by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Colin Kingen',
    adminContact: 'colin@wildme.org',
    bannerLarge: iotBannerLarge,
    bannerSmall: iotBannerSmall,
    descriptionId: 'IOT_DESCRIPTION',
    sightings: 37149,
    individuals: 6775,
    algorithms: [algorithms.hotspotter],
    partners: [],
    species: [
      {
        name: 'Chelonia mydas',
        alias: 'Green turtle',
        url: 'https://en.wikipedia.org/wiki/Green_sea_turtle',
      },
      {
        name: 'Eretmochelys imbricata',
        alias: 'Hawksbill turtle',
        url: 'https://en.wikipedia.org/wiki/Hawksbill_sea_turtle',
      },
      {
        name: 'Caretta caretta',
        alias: 'Loggerhead turtle',
        url: 'https://en.wikipedia.org/wiki/Loggerhead_sea_turtle',
      },
      {
        name: 'Lepidochelys olivacea',
        alias: 'Olive Ridley turtle',
        url: 'https://en.wikipedia.org/wiki/Olive_ridley_sea_turtle',
      },
    ],
  },
  {
    name: 'Wildbook for Zebras',
    path: '/zebra',
    href: 'https://zebra.wildbook.org/',
    tagline:
      'A.I for the conservation of zebras by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: zebraBannerLarge,
    bannerSmall: zebraBannerSmall,
    descriptionId: 'ZEBRA_DESCRIPTION',
    sightings: 28520,
    individuals: 8280,
    algorithms: [algorithms.hotspotter],
    partners: [],
    species: [
      {
        name: 'Equus quagga',
        alias: 'Plains zebra',
        url: 'https://en.wikipedia.org/wiki/Plains_zebra',
      },
      {
        name: 'Equus grevyi',
        alias: "Grevyi's zebra",
        url: 'https://en.wikipedia.org/wiki/Gr%C3%A9vy%27s_zebra',
      },
    ],
  },
  {
    name: 'Wildbook for Lynx',
    path: '/lynx',
    href: 'https://lynx.wildbook.org/',
    tagline:
      'A.I for the conservation of lynx by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: lynxBannerLarge,
    bannerSmall: lynxBannerSmall,
    descriptionId: 'LYNX_DESCRIPTION',
    sightings: 22479,
    individuals: 558,
    algorithms: [algorithms.hotspotter],
    partners: [],
    species: [
      {
        name: 'Lynx pardinus',
        alias: 'Iberian lynx',
        url: 'https://en.wikipedia.org/wiki/Iberian_lynx',
      },
    ],
  },
  {
    name: 'Giant Sea Bass',
    path: '/bass',
    href: 'https://spottinggiantseabass.msi.ucsb.edu/',
    tagline:
      'A.I for the conservation of giant sea bass by automating individual identification.',
    inviteOnly: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: bassBannerLarge,
    bannerSmall: bassBannerSmall,
    descriptionId: 'BASS_DESCRIPTION',
    sightings: 607,
    individuals: null,
    algorithms: [algorithms.groth, algorithms.i3s],
    partners: [],
    species: [
      {
        name: 'Stereolepis gigas',
        alias: 'Giant sea bass',
        url: 'https://en.wikipedia.org/wiki/Giant_sea_bass',
      },
    ],
  },
  {
    name: 'Spot a Shark',
    path: '/spotashark',
    href: 'https://spotashark.com/',
    tagline:
      'A.I for the conservation of sharks by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adoption: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: sandtigerBannerLarge,
    bannerSmall: sandtigerBannerSmall,
    descriptionId: 'SPOT_A_SHARK_DESCRIPTION',
    sightings: 7290,
    individuals: null,
    partners: [],
    algorithms: [algorithms.groth, algorithms.i3s],
    species: [
      {
        name: 'Carcharias taurus',
        alias: 'Sand tiger shark',
        url: 'https://en.wikipedia.org/wiki/Sand_tiger_shark',
      },
    ],
  },
  {
    name: 'African Carnivores',
    path: '/acw',
    href: 'https://africancarnivore.wildbook.org/',
    tagline:
      'A.I for the conservation of african carnivores by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adoption: false,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: acwBannerLarge,
    bannerSmall: acwBannerSmall,
    descriptionId: 'ACW_DESCRIPTION',
    sightings: 21466,
    individuals: null,
    partners: [],
    algorithms: [algorithms.hotspotter],
    species: [
      {
        name: 'Lycaon Pictus',
        alias: 'Wild Dog',
        url: 'https://en.wikipedia.org/wiki/African_wild_dog',
      },
      {
        name: 'Panthera Pardus',
        alias: 'Leopard',
        url: 'https://en.wikipedia.org/wiki/Leopard',
      },
      {
        name: 'Acinonyx Jubatus',
        alias: 'Cheetah',
        url: 'https://en.wikipedia.org/wiki/Cheetah',
      },
    ],
  },
  {
    name: 'Spot a Shark USA',
    path: '/spotasharkusa',
    href: 'https://spotasharkusa.com/',
    tagline:
      'A.I for the conservation of sharks by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: sharkUsaBannerLarge,
    bannerSmall: sharkUsaBannerSmall,
    descriptionId: 'SPOT_A_SHARK_USA_DESCRIPTION',
    sightings: 1404,
    individuals: null,
    partners: [],
    algorithms: [algorithms.groth, algorithms.i3s],
    species: [
      {
        name: 'Carcharias taurus',
        alias: 'Sand tiger shark',
        url: 'https://en.wikipedia.org/wiki/Sand_tiger_shark',
      },
    ],
  },
  {
    name: 'Whiskerbook',
    path: '/jaguar',
    href: 'https://www.whiskerbook.org/',
    tagline:
      'A.I for the conservation of big cats by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: jaguarBannerLarge,
    bannerSmall: jaguarBannerSmall,
    descriptionId: 'JAGUAR_DESCRIPTION',
    sightings: 925,
    individuals: 129,
    algorithms: [algorithms.hotspotter],
    partners: [],
    species: [
      {
        name: 'Panthera onca',
        alias: 'Jaguar',
        url: 'https://en.wikipedia.org/wiki/Jaguar',
      },
	  {
        name: 'Panthera uncia',
        alias: 'Snow leopard',
        url: 'https://en.wikipedia.org/wiki/Snow_leopard',
      },
	  {
        name: 'Acinonyx jubatus',
        alias: 'Asiatic cheetah',
        url: 'hhttps://en.wikipedia.org/wiki/Asiatic_cheetah',
      }
    ],
  },
  {
    name: 'Skunk Wildbook',
    path: '/skunks',
    href: 'http://skunk.wildbook.org/',
    tagline:
      'A.I for the conservation of skunks by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: skunkBannerLarge,
    bannerSmall: skunkBannerSmall,
    descriptionId: 'SKUNK_DESCRIPTION',
    sightings: 657,
    individuals: 11,
    algorithms: [algorithms.hotspotter],
    partners: [
      {
        name: 'Oregon State University',
        imageSrc: osuLogo,
        url: 'https://mmi.oregonstate.edu/',
      },
    ],
    species: [
      {
        name: 'Spilogale gracilis',
        alias: 'Western spotted skunk',
        url: 'https://en.wikipedia.org/wiki/Western_spotted_skunk',
      },
    ],
  },
  {
    name: 'Seadragonsearch',
    path: '/seadragonsearch',
    href: 'https://seadragonsearch.org/',
    tagline:
      'A.I for the conservation of seadragons by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: dragonsearchBannerLarge,
    bannerSmall: dragonsearchBannerSmall,
    descriptionId: 'DRAGONSEARCH_DESCRIPTION',
    sightings: 2521,
    individuals: null,
    algorithms: [algorithms.hotspotter],
    partners: [],
    species: [
      {
        name: 'Phycodurus eques',
        alias: 'Leafy seadragon',
        url: 'https://en.wikipedia.org/wiki/Leafy_seadragon',
      },
      {
        name: 'Phyllopteryx taeniolatus',
        alias: 'Common seadragon',
        url: 'https://en.wikipedia.org/wiki/Common_seadragon',
      },
      {
        name: 'Phyllopteryx dewysea',
        alias: 'Ruby seadragon',
        url: 'https://en.wikipedia.org/wiki/Ruby_seadragon',
      },
    ],
  },
  {
    name: 'Saimaa Seal',
    path: '/saimaaseal',
    href: 'https://norppagalleria.wwf.fi/',
    tagline:
      'A.I for the conservation of Saimaa seals by automating individual identification.',
    inviteOnly: true,
    hosted: false,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: saimaaBannerLarge,
    bannerSmall: saimaaBannerSmall,
    descriptionId: 'SAIMAA_SEAL_DESCRIPTION',
    sightings: 4559,
    individuals: 446,
    algorithms: [algorithms.hotspotter],
    partners: [],
    species: [
      {
        name: 'Pusa hispida saimensis',
        alias: 'Saimaa ringed seal',
        url: 'https://en.wikipedia.org/wiki/Saimaa_ringed_seal',
      },
    ],
  },
  {
    name: 'Leopard Sharks',
    path: '/leopardsharks',
    href: 'https://leopardshark.wildbook.org/',
    tagline:
      'A.I for the conservation of leopard sharks by automating individual identification.',
    inviteOnly: true,
    hosted: true,
    adoption: false,
    adminName: 'Jason Holmberg',
    adminContact: 'jason@wildme.org',
    bannerLarge: leopardSharkBanner,
    bannerSmall: leopardSharkBanner,
    descriptionId: 'LEOPARDSHARK_DESCRIPTION',
    sightings: 196,
    individuals: null,
    partners: [],
    algorithms: [algorithms.hotspotter],
    species: [
      {
        name: 'Stegostoma Fasciatum',
        alias: 'Leopard Shark',
        url: 'https://en.wikipedia.org/wiki/Leopard_shark',
      },
    ],
  },
];

export default projectData;
