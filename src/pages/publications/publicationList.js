export const tags = {
  sharkbook: {
    id: 'sharkbook',
    labelId: 'SHARKBOOK_DOT_AI',
  },
  mantamatcher: {
    id: 'mantamatcher',
    labelId: 'MANTAMATCHER',
  },
  flukebook: {
    id: 'flukebook',
    labelId: 'FLUKEBOOK',
  },
  iot: {
    id: 'iot',
    labelId: 'INTERNET_OF_TURTLES',
  },
  spotashark: {
    id: 'spotashark',
    labelId: 'SPOT_A_SHARK',
  },
  staff: {
    id: 'staff',
    labelId: 'STAFF_PUBLICATIONS',
  },
};

const publications = [
  {
    tags: [tags.sharkbook],
    href: 'https://doi.org/10.1002/ece3.8492',
    citation:
      'Hardenstine, R. S., He, S., Cochran, J. E. M., Braun, C. D., Cagua, E. F., Pierce, S. J., Prebble, C. E. M., Rohner, C. A., Saenz-Agudelo, P., Sinclair-Taylor, T. H., Skomal, G. B., Thorrold, S. R., Watts, A. M., Zakroff, C. J., & Berumen, M. L. (2022). Pieces in a global puzzle: Population genetics at two whale shark aggregations in the western Indian Ocean. Ecology and Evolution, 12, e8492.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href: 'https://onlinelibrary.wiley.com/doi/10.1111/jfb.15121',
    citation:
      'Magson, K., Monacella, E., Scott, C., Buffat, N., Arunrugstichai, S., Chuangcharoendee, M., Pierce, S. J., Holmberg, J., & Araujo, G. (2022). Citizen science reveals the population structure and seasonal presence of whale sharks in the Gulf of Thailand. Journal of Fish Biology, 1– 10.',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href: 'https://doi.org/10.1007/s42991-022-00253-3',
    citation:
      'Khan, C., Blount, D., Parham, J. et al. Artificial intelligence for right whale photo identification: from data science competition to worldwide collaboration. Mamm Biol (2022).',
  },
  {
    tags: [tags.flukebook],
    href: 'https://doi.org/10.1098/rsos.211737',
    citation:
      'Vachon Felicia, Hersh Taylor A., Rendell Luke, Gero Shane and Whitehead Hal. 2022. Ocean nomads or island specialists? Culturally driven habitat partitioning contrasts in scale between geographically isolated sperm whale populations. R. Soc. open sci. 9: 211737. 211737.',
  },
  {
    tags: [tags.mantamatcher],
    href: 'https://doi.org/10.7717/peerj.13302',
    citation:
      'Germanov ES, Pierce SJ, Marshall AD, Hendrawan IG, Kefi A, Bejder L, Loneragan N. 2022. Residency, movement patterns, behavior and demographics of reef manta rays in Komodo National Park. PeerJ 10:e13302',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href:
      'https://link.springer.com/article/10.1007/s42991-021-00221-3',
    citation:
      'Blount, D., Gero, S., Van Oast, J. et al. Flukebook: an open-source AI platform for cetacean photo identification. Mamm Biol (2022).',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href: 'https://doi.org/10.3389/fmars.2022.849813',
    citation:
      'Moore R, Urian K, Allen J, Cush C, Parham J, Blount D, Holmberg J, Thompson J, Wells J. Rise of the Machines: Best Practices and Experimental Evaluation of Computer-Assisted Dorsal Fin Image Matching Systems for Bottlenose Dolphins. Front. Mar. Sci. 07 April 2022.',
  },
  {
    tags: [tags.sharkbook],
    href: 'http://dx.doi.org/10.3354/esr01177',
    citation:
      'Rohner CA, Venables SK, Cochran JEM, Prebble CEM, Kuguru BL, Berumen ML, Pierce SJ (2022) The need for long-term population monitoring of the worlds largest fish. Endang Species Res 47:231-248.',
  },
  {
    tags: [tags.staff, tags.sharkbook],
    href: 'https://doi.org/10.1002/aqc.3806',
    citation:
      'Araujo G, Kwong K, Jones I, Holmberg J, Pierce S, Manjaji-Matsumoto M. Citizen science as a key tool in whale shark conservation. Aquatic Conserv Volume 32, Issue 3 (2022)',
  },
  {
    tags: [tags.staff],
    href: 'https://doi.org/10.1038/s41467-022-27980-y',
    citation:
      'Tuia D, Kellenberger B, Beery S, Costelloe B, Zuffie S, Risse B, Mathis A, Langevelde F, Burghardt T, Kays R, Klinck H, Wikelski M, Couzin I, Van Horn G, Crofoot M, Stewart C, Berger-Wolf T. Perspectives in machine learning for wildlife conservation. Nat Commun 13, 792 (2022).',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href: 'https://doi.org/10.1101/2021.12.22.473895',
    citation:
      'Blount A, Holmberg J, Parham J, Levenson J, Gero S. Comparison of Three Individual Identification Algorithms for Sperm Whales (Physeter macrocephalus) after Automated Detection. bioRxiv 2021.12.22.473895; doi: https://doi.org/10.1101/2021.12.22.473895',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://www.sciencedirect.com/science/article/pii/S2351989421005114?via%3Dihub',
    citation:
      'Reynolds, Samantha & Franklin, Craig & Bach, Steffen & Comezzi, Francesco & Diamant, Stella & Jaidah, Mohammed & Pierce, Simon & Richardson, Anthony & Robinson, David & Rohner, Christoph & Dwyer, Ross. (2021). Regional variation in anthropogenic threats to Indian Ocean whale sharks. Global Ecology and Conservation. e01961. 10.1016/j.gecco.2021.e01961.',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://onlinelibrary.wiley.com/doi/10.1002/aqc.3743',
    citation:
      "Diamant, Stella & Pierce, Simon & Rohner, Christoph & Graham, Rachel & D'echon, Arthur & D'echon, Tanguy & Sourisseau, Elina & Léonce, & Fidiarisandratra, Costika & Bakary, Gisèle & Trélanche, Sylvia & Andriananrisoa, Fanja & Kiszka, Jeremy. (2021). Population structure, residency, and abundance of whale sharks in the coastal waters off Nosy Be, north-western Madagascar. Aquatic Conservation Marine and Freshwater Ecosystems. 10.1002/aqc.3743.",
  },
  {
    tags: [tags.staff, tags.sharkbook],
    href:
      'https://www.routledge.com/Whale-Sharks-Biology-Ecology-and-Conservation/Dove-Pierce/p/book/9781138571297?gclid=CjwKCAjw092IBhAwEiwAxR1lRm6CESO2NTCfNm_RM-dW-5Vl1TkkXJjBZuXtvU7SEnCg865qeZZPRBoCdVAQAvD_BwE',
    citation:
      'Dove, Alistair D.M., and Simon J. Pierce, editors. Whale Sharks Biology, Ecology, and Conservation. CRC Press, 2021.',
  },
  {
    tags: [tags.mantamatcher],
    href:
      'https://mbr.biomedcentral.com/articles/10.1186/s41200-021-00204-w',
    citation:
      'Bucair, N., Venables, S.K., Balboni, A.P. et al. Sightings trends and behaviour of manta rays in Fernando de Noronha Archipelago, Brazil. Mar Biodivers Rec 14, 10 (2021). https://doi.org/10.1186/s41200-021-00204-w',
  },
  {
    tags: [tags.staff],
    href: 'https://doi.org/10.15346/hc.v8i1.130',
    citation:
      'Shanley, L. A., Michelucci, P., Tsosie, K., Wyeth, G., Drapkin, J. K., Azelton, K., Cavalier, D., & Holmberg, J. (2021). Public Comment on Draft NOAA Citizen Science Strategy. Human Computation, 8, 25–42. doi: 10.15346/hc.v8i1.130',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://www.researchgate.net/publication/348305378_Seasonal_Occurrence_Horizontal_Movements_and_Habitat_Use_Patterns_of_Whale_Sharks_Rhincodon_typus_in_the_Gulf_of_Mexico#fullTextFileContent',
    citation:
      'Seasonal Occurrence, Horizontal Movements, and Habitat Use Patterns of Whale Sharks (Rhincodon typus) in the Gulf of Mexico. Eric R. Hoffmayer, Jennifer A. McKinney, James S. Franks, Michael E. Byrne, Michael E. Byrne et al. Frontiers in Marine Science, Jan 2021. doi: 10.3389/fmars.2020.598515',
  },
  {
    tags: [tags.iot],
    href:
      'https://www.sciencedirect.com/science/article/pii/B9780128210291000052?via%3Dihub',
    citation:
      '5 - Applications of Photo Identification in Sea Turtle Studies. Stephen G. Dunbar, Jillian Hudgins, Claire Jean. Applications of Photo Identification in Sea Turtle Studies, Pages 45-55, Editor(s): Brad Nahill, Jan 2021. doi: 10.1016/B978-0-12-821029-1.00005-2',
  },
  {
    tags: [tags.iot, tags.staff],
    href:
      'https://www.sciencedirect.com/science/article/abs/pii/S0022098120301738',
    citation:
      'HotSpotter: Using a computer-driven photo-id application to identify sea turtles. Stephen G. Dunbar, Edward C. Anger, Jason R. Parham, Colin Kingen, Marsha K. Wright, Christian T. Hayes, Shahnaj Safi, Jason Holmberg, Lidia Salinas, Dustin S. Baumbach. Journal of Experimental Marine Biology and Ecology, Feb 2021. doi: 10.1016/j.jembe.2020.151490',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href:
      'https://www.cascadiaresearch.org/publications/Franklin_etal_2020JCetResManagement',
    citation:
      'Franklin, T., W. Franklin, L. Brooks, P. Harrison, D. Burns, J. Holmberg, and J. Calambokidis. 2020. Photo-Identification of Individual Humpback Whales (Megaptera novaeangliae) Using All Available Natural Marks: Implications for Misidentification and Automated Algorithm Matching Technology. Journal of Cetacean Research and Management. 21:71-83.',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href:
      'https://openaccess.thecvf.com/content_WACV_2020/papers/Weideman_Extracting_identifying_contours_for_African_elephants_and_humpback_whales_using_WACV_2020_paper.pdf',
    citation:
      'Weideman H, Stewart CV, Parham J, Holmberg J, Flynn K, Calambokidis J, Paul, D. Barry, Bedetti A, Henley M, Pope F, Lepirei J (2020) .Extracting identifying contours for African elephants and humpback whales using a learned appearance model. Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2020, pp. 1276-1285',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.14254',
    citation:
      'Araujo G, Ismail AR, McCann C, McCann D, Legaspi CG, Snow S, Labaja J, Manjaji-Matsumoto M, Ponzo A. (2020) Getting the most out of citizen science for endangered species such as Whale Shark. J Fish Biol. 2020 Jan 9. doi: 10.1111/jfb.14254.    ',
  },
  {
    tags: [tags.flukebook],
    href:
      'https://archive.iwc.int/pages/view.php?search=SC%2F68B%2FPH%2F03&k=&modal=&display=list&order_by=resourcetype&offset=0&per_page=240&archive=&sort=DESC&restypes=1%2C2%2C3%2C4%2C14&recentdaylimit=&foredit=&ref=17340',
    citation:
      'Khan C, Holmberg J, Hamilton P, Pettis H, Blount D, Parham J, Mucha M, Charlton C, Rowntree V, Vermeulen E, Rayment W, Dawson S, Johnston D, Groch K (2020) From Competition to Collaboration: Automated Identification of Right Whales. International Whale Commission, Cambridge, UK (virtual).  Report SC/68B/PH/03.    ',
  },
  {
    tags: [tags.flukebook],
    href:
      'https://archive.iwc.int/pages/view.php?search=SC%2F68B%2FPH%2F06&k=&modal=&display=list&order_by=resourcetype&offset=0&per_page=240&archive=&sort=DESC&restypes=1%2C2%2C3%2C4%2C14&recentdaylimit=&foredit=&ref=17352',
    citation:
      'Blount D, Minton G, Khan C, Levenson J, Dulau V, Gero S, Parham J, Holmberg J (2020) Flukebook – Continuing growth and technical advancement for cetacean photo identification and data archiving, including automated fin, fluke, and body matching. International Whale Commission, Cambridge, UK (virtual).  Report SC/68B/PH/06    ',
  },
  {
    tags: [tags.mantamatcher],
    href: 'https://doi.org/10.3389/fmars.2019.00215',
    citation:
      'Germanov ES, Bejder L, Chabanne DBH, Dharmadi D, Hendrawan IG, Marshall AD, Pierce SJ, van Keulen M and Loneragan NR (2019) Contrasting Habitat Use and Population Dynamics of Reef Manta Rays Within the Nusa Penida Marine Protected Area, Indonesia. Front. Mar. Sci. 6:215.',
  },
  {
    tags: [tags.mantamatcher],
    href: 'https://doi.org/10.1007/s00265-019-2720-x',
    citation:
      'Perryman, R.J.Y., Venables, S.K., Tapilatu, R.F. et al. Social preferences and network structure in a population of reef manta rays. Behav Ecol Sociobiol 73, 114 (2019).',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://www.nature.com/articles/s41598-019-53718-w',
    citation:
      'Araujo, G., Agustines, A., Tracey, B. et al. (2019) Photo-ID and telemetry highlight a global whale shark hotspot in Palawan, Philippines. Sci Rep 9, 17209 (2019) doi:10.1038/s41598-019-53718-w',
  },
  {
    tags: [tags.spotashark, tags.staff],
    href: 'https://doi.org/10.1002/ecy.2687',
    citation:
      'Paxton, A. B., Blair, E., Blawas, C., Fatzinger, M. H., Marens, M., Holmberg, J., Kingen, C., Houppermans, T., Keusenkothen, M., McCord, J., Silliman, B. R., and Penfold, L. M.. 2019. Citizen science reveals female sand tiger sharks (Carcharias taurus) exhibit signs of site fidelity on shipwrecks. Ecology 100( 8):e02687. 10.1002/ecy.2687',
  },
  {
    tags: [tags.spotashark, tags.staff],
    href: 'https://doi.org/10.1002/bes2.1553',
    citation:
      'Paxton, A. B., Blair, E., Blawas, C., Fatzinger, M. H., Marens, M., Holmberg, J., Kingen, C., Houppermans, T., Keusenkothen, M., McCord, J., Silliman, B. R., and Penfold, L. M. 2019. Citizen science provides evidence that a large coastal shark species returns to the same or nearby shipwrecks. Bull Ecol Soc Am 100( 3):e01553. https://doi.org/10.1002/bes2.1553',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://www.frontiersin.org/articles/10.3389/fmars.2018.00271/full',
    citation:
      'McCoy E, Burce R, David D, Aca EQ, Hardy J, Labaja J, Snow SJ, Ponzo A and Araujo G (2018) Long-Term Photo-Identification Reveals the Population Dynamics and Strong Site Fidelity of Adult Whale Sharks to the Coastal Waters of Donsol, Philippines. Front. Mar. Sci. 5:271. doi: 10.3389/fmars.2018.00271    ',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://peerj.com/articles/5231/',
    citation:
      'Araujo G, Rohner CA, Labaja J, Conales SJ, Snow SJ, Murray R, Pierce SJ, Ponzo A. (2018) Satellite tracking of juvenile whale sharks in the Sulu and Bohol Seas, Philippines. PeerJ 6:e5231 https://doi.org/10.7717/peerj.5231',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://www.int-res.com/articles/esr2018/36/n036p049.pdf',
    citation:
      'Diamant S. et al (2018) Movements and habitat use of satellite-tagged whale sharks off western Madagascar.',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://peerj.com/articles/4161/',
    citation:
      'Rohner CA, Richardson AJ, Jaine FRA, Bennett MB, Weeks SJ, Cliff G, Robinson DP, Reeve-Arnold KE, Pierce SJ. (2018) Satellite tagging highlights the importance of productive Mozambican coastal waters to the ecology and conservation of whale sharks.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href: 'https://doi.org/10.1093/biosci/bix127',
    citation:
      'Bradley M. Norman, Jason A. Holmberg, Zaven Arzoumanian, Samantha D. Reynolds, Rory P. Wilson, Dani Rob, Simon J. Pierce, Adrian C. Gleiss, Rafael de la Parra, Beatriz Galvan, Deni Ramirez-Macias, David Robinson, Steve Fox, Rachel Graham, David Rowat, Matthew Potenski, Marie Levine, Jennifer A. Mckinney, Eric Hoffmayer, Alistair D. M. Dove, Robert Hueter, Alessandro Ponzo, Gonzalo Araujo, Elson Aca, David David, Richard Rees, Alan Duncan, Christoph A. Rohner, Clare E. M. Prebble, Alex Hearn, David Acuna, Michael L. Berumen, Abraham Vázquez, Jonathan Green, Steffen S. Bach, Jennifer V. Schmidt, Stephen J. Beatty, David L. Morgan; Undersea Constellations: The Global Biology of an Endangered Marine Megavertebrate Further Informed through Citizen Science, 2017/11/29, BioScience, bix127.',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://royalsocietypublishing.org/doi/full/10.1098/rsos.170394',
    citation:
      "Thomson JA, Araujo G, Labaja J, McCoy E, Murray R, Ponzo A. Feeding the world's largest fish: highly variable whale shark residency patterns at a provisioning site in the Philippines. R. Soc. open sci. 2017 4 170394; DOI: 10.1098/rsos.170394. Published 27 September 2017",
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0185360',
    citation:
      'Robinson DP, Jaidah MY, Bach SS, Rohner CA, Jabado RW, Ormond R, et al. (2017) Some like it hot: Repeat migration and residency of whale sharks within an extreme natural environment. PLoS ONE 12(9): e0185360. https://doi.org/10.1371/journal.pone.0185360',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://onlinelibrary.wiley.com/doi/full/10.1111/ddi.12618',
    citation:
      'Reynolds SD, Norman BM, Beger M, Franklin CE, Dwyer RG. Movement, distribution and marine reserve use by an endangered migratory giant. Divers Distrib. 2017;00:1–12.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href:
      'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0180495',
    citation:
      'McKinney JA, Hoffmayer ER, Holmberg J, Graham RT, Driggers WB III, de la Parra-Venegas R, et al. (2017) Long-term assessment of whale shark population demography and connectivity using photo-identification in the Western Atlantic Ocean. PLoS ONE 12(8): e0180495. https://doi.org/10.1371/journal.pone.0180495',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0164440',
    citation:
      'Macena BCL, Hazin FHV (2016) Whale Shark (Rhincodon typus) Seasonal Occurrence, Abundance and Demographic Structure in the Mid-Equatorial Atlantic Ocean. PLoSONE 11(10):e0164440.doi:10.1371/journal.pone.0164440',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/fee.1418',
    citation:
      'Norman B. and Morgan D. (2016) The return of “Stumpy” the whale shark: two decades and counting. Front Ecol Environ 2016; 14(8):449–450, doi:10.1002/fee.1418',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/aqc.2636',
    citation:
      'Araujo, G., Snow, S., So, C. L., Labaja, J., Murray, R., Colucci, A., and Ponzo, A. (2016) Population structure, residency patterns and movements of whale sharks in Southern Leyte, Philippines: results from dedicated photo-ID and citizen science. Aquatic Conserv: Mar. Freshw. Ecosyst., doi: 10.1002/aqc.2636.',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://www.publish.csiro.au/pc/PC15045',
    citation:
      'Norman B, Reynolds S and Morgan D. (2016) Does the whale shark aggregate along the Western Australian coastline beyond Ningaloo Reef? Pacific Conservation Biology 22(1) 72-80 Submitted. 1 April 2016',
  },
  {
    tags: [tags.mantamatcher],
    href: 'https://doi.org/10.1371/journal.pone.0110071',
    citation:
      'Germanov ES, Marshall AD (2014) Running the Gauntlet: Regional Movement Patterns of Manta alfredi through a Complex of Parks and Fisheries. PLoS ONE 9(10): e110071.',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://peerj.com/articles/543/',
    citation:
      'Araujo G, Lucey A, Labaja J, So CL, Snow S, Ponzo A. (2014) Population structure and residency patterns of whale sharks, Rhincodon typus, at a provisioning site in Cebu, Philippines. PeerJ 2:e543',
  },
  {
    tags: [tags.staff],
    href: 'https://doi.org/10.1109/WACV.2013.6475023',
    citation:
      'Crall, J. P., Stewart, C. V., Berger-Wolf, T. Y., Rubenstein, D. I., & Sundaresan, S. R. (2013). HotSpotter-Patterned species instance recognition. In 2013 IEEE Workshop on Applications of Computer Vision, WACV 2013 (pp. 230-237). [6475023] (Proceedings of IEEE Workshop on Applications of Computer Vision).',
  },
  {
    tags: [tags.sharkbook],
    href: 'http://www.int-res.com/articles/meps_oa/m482p153.pdf',
    citation:
      'Rohner CA, Pierce SJ, Marshall AD, Weeks SJ, Bennett MB, Richardson AJ (2013) Trends in sightings and environmental influences on a coastal aggregation of manta rays and whale sharks. Mar Ecol Prog Ser 482: 153–168, 2013.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href: 'http://dx.doi.org/10.7287/peerj.preprints.98v1',
    citation:
      'McKinney J, Hoffmayer ER, Holmberg J, Graham R, de la Parra R et al. (2013) Regional connectivity of whale sharks demonstrated using photo-identification - Western Atlantic, 1999 - 2013. PeerJ PrePrints 1:e98v1',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href:
      'https://onlinelibrary.wiley.com/doi/abs/10.1111/biom.12045',
    citation:
      'Bonner SJ & Holmberg, J (2013), Mark-Recapture with Multiple, Non-Invasive Marks. Biometrics. doi: 10.1111/biom.12045',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0071883',
    citation:
      'Hueter RE, Tyminski JP, de la Parra R (2013) Horizontal Movements, Migration Patterns, and Population Structure of Whale Sharks in the Gulf of Mexico and Northwestern Caribbean Sea. PLoS ONE 8(8): e71883. doi:10.1371/journal.pone.0071883',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.12195',
    citation:
      'Fox S, Foisy I, De La Parra Venegas R, Galvan Pastoriza BE, Graham RT, Hoffmayer ER, Holmberg J, Pierce SJ. (2013) Population structure and residency of whale sharks Rhincodon typus at Utila, Bay Islands, Honduras. Journal of Fish Biology Volume 83, Issue 3, pages 574-587, September 2013',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058255',
    citation:
      'Robinson DP, Jaidah MY, Jabado RW, Lee-Brooks K, Nour El-Din NM, et al. (2013) Whale Sharks, Rhincodon typus, Aggregate around Offshore Platforms in Qatari Waters of the Arabian Gulf to Feed on Fish Spawn. PLoS ONE 8(3): e58255. doi:10.1371/journal.pone.0058255',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://www.publish.csiro.au/wr/WR12092',
    citation:
      'Davies, Tim K., Stevens, Guy, Meekan, Mark G., Struve, Juliane, and Rowcliffe, J. Marcus (2012) Can citizen science monitor whale-shark aggregations? Investigating bias in mark-recapture modelling using identification photographs sourced from the public. Wildlife Research 39, 696-704.',
  },
  {
    tags: [],
    citation:
      'Marshall AD & SJ Pierce (2012) The use and abuse of photographic identification in sharks and rays. Journal of Fish Biology 80: 1361-1379',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Catlin J, Jones T, Norman B & Wood D. Consolidation in a wildlife tourism industry: the changing impact of whale shark tourist expenditure in the Ningaloo Coast region. International Journal of Tourism Research, Volume 12, Issue 2, pages 134-148, March/April 2010.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Catlin J, Jones R, Jones T, Norman B and Wood D (2010). Discovering Wildlife Tourism: A Whale Shark Tourism Case Study. Current Issues in Tourism, Volume 13, Issue 4.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Jones T, Wood D, Catlin J & Norman B (2009). Expenditure and ecotourism: predictors of expenditure for whale shark tour participants. Journal of Ecotourism Volume 8, Issue 1: 32-50.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman B (2009) ECOCEAN Best Practice Whale Shark Ecotourism UNEP MANUAL. Technical Report (United Nations Environment Program - Regional Seas) 7pp.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    citation:
      'Holmberg J & Norman B (2009) ECOCEAN Whale Shark Photo-identification - UNEP MANUAL. Technical Report (United Nations Environment Program - Regional Seas) 69pp.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href: 'http://www.int-res.com/articles/esr2009/7/n007p039.pdf',
    citation:
      'Holmberg J, Norman B & Arzoumanian Z (2009) Estimating population size, structure, and residency time for whale sharks Rhincodon typus through collaborative photo-identification. Endangered Species Research, (7) 39-53.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Jones T, Wood D, Catlin J & Norman, B (2009) Expenditure and ecotourism: predictors of expenditure for whale shark tour participants. Journal of Ecotourism, (8) 32-50.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Gleiss AC, Norman B, Liebsch N, Francis C & Wilson RP (2009) A new prospect for tagging large free-swimming sharks with motion-sensitive data-loggers. Fisheries Research 97: 11-16.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href: 'http://www.esajournals.org/doi/abs/10.1890/07-0315.1',
    citation:
      'Holmberg J, Norman B & Arzoumanian Z (2008) Robust, comparable population metrics through collaborative photo-monitoring of whale sharks Rhincodon typus . Ecological Applications 18(1): 222-223.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    href:
      'https://www.sharkbook.ai/Norman_Holmberg_Earthwatch_2007.pdf',
    citation:
      'Norman B. & Holmberg J (2007) A Cooperative Approach for Generating Robust Population Metrics for Whale Sharks Rhincodon typus. In: Maldini D, Meck Maher D, Troppoli D, Studer M, and Goebel J, editors. Translating Scientific Results into Conservation Actions: New Roles, Challenges and Solutions for 21st Century Scientists. Boston : Earthwatch Institute; 2007.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman B & Stevens J (2007) Size and maturity status of the whale shark ( Rhincodon typus ) at Ningaloo Reef in Western Australia. Fisheries Research Vol. 84, Issue 1, 1-136. Whale Sharks: Science, Conservation and Management - Proceedings of the First International Whale Shark Conference, First International Whale Shark Conference Australia 09-12 May 2005. T. R. Irvine and J. K. Keesing (Eds).',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman B & Catlin J (2007) Economic importance of conserving whale sharks. Unpublished Report for the International Fund for Animal Welfare (IFAW), Sydney 18pp.',
  },
  {
    tags: [tags.sharkbook, tags.staff],
    citation:
      'Arzoumanian Z, Holmberg J & Norman B (2005) An astronomical pattern-matching algorithm for computer-aided identification of whale sharks Rhincodon typus . Journal of Applied Ecology 42, 999-1011.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman BM (2005) Whale shark critical habitats and movement patterns within Australian waters. Technical Report (DEH Natural Heritage Trust Project) 46pp.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman BM (2004) Review of the current conservation concerns for the whale shark ( Rhincodon typus ): A regional perspective. Technical Report (NHT Coast & Clean Seas Project No. 2127) 74pp.',
  },
  {
    tags: [tags.sharkbook],
    href:
      'http://www.environment.gov.au/marine/publications/cites-identification-manual-whale-shark-rhincodon-typus-smith-1829',
    citation:
      'Norman B (2002) CITES Identification Manual: Whale Shark ( Rhincodon typus Smith 1829). Commonwealth of Australia.',
  },
  {
    tags: [tags.sharkbook],
    href:
      'https://www.ingentaconnect.com/content/tandf/tnah/2000/00000034/00000003/art00004?token=0044129e186720297d76253e7b2a4a467a24425e3b6b6d3f4e4b252493777d450b13',
    citation:
      'Norman BM, Newbound D & Knott B (2000) A new species of Pandaridae (Copepoda), from the whale shark Rhincodon typus (Smith) . Journal of Natural History 34:3, 355-366.',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman BM (2000) In: 2000 IUCN Red List of Threatened Species. IUCN, Gland, Switzerland and Cambridge, UK. Xviii+61 pp. (Book & CD).',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Norman BM (1999) Aspects of the biology and ecotourism industry of the whale shark Rhincodon typus in north-western Australia. MPhil. Thesis (Murdoch University, Western Australia).',
  },
  {
    tags: [tags.sharkbook],
    citation:
      'Gunn JS, Stevens JD, Davis TLO & Norman BM (1999) Observations on the short-term movements and behaviour of whale sharks ( Rhincodon typus ) at Ningaloo Reef, Western Australia. Mar. Biol . 135: 553-559.',
  },
  {
    tags: [],
    href:
      'https://wildlife.onlinelibrary.wiley.com/doi/abs/10.1002/wsb.1086',
    citation:
      'Nipko R., Holcombe B., and Kelly M. (2020) Identifying Individual Jaguars and Ocelots via Pattern‐Recognition Software: Comparing HotSpotter and Wild‐ID. The Wildlife Society Bulletin. https://doi.org/10.1002/wsb.1086',
  },
  {
    tags: [],
    href:
      'https://journals.plos.org/plosone/article/citation?id=10.1371/journal.pone.0214269',
    citation:
      'Koivuniemi M, Kurkilahti M, Niemi M, Auttila M, Kunnasranta M (2019) A mark–recapture approach for estimating population size of the endangered ringed seal (Phoca hispida saimensis). PLOS ONE 14(3): e0214269. https://doi.org/10.1371/journal.pone.0214269',
  },
  {
    tags: [],
    href:
      'https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecy.2687',
    citation:
      'Paxton, A. B., Blair, E., Blawas, C., Fatzinger, M. H., Marens, M., Holmberg, J., Kingen, C., Houppermans, T., Keusenkothen, M., McCord, J., Silliman, B. R., and Penfold, L. M.. 2019. Citizen science reveals female sand tiger sharks (Carcharias taurus) exhibit signs of site fidelity on shipwrecks. Ecology 00( 00):e02687. 10.1002/ecy.2687',
  },
  {
    tags: [tags.mantamatcher],
    href:
      'https://mbr.biomedcentral.com/articles/10.1186/s41200-019-0162-9',
    citation:
      'Arauz R , Chávez E, Hoyos-Padilla EM, and Marshall AD. First record of the reef manta ray, Mobula alfredi, from the eastern Pacific. Marine Biodiversity Records 2019 12:3 https://doi.org/10.1186/s41200-019-0162-9',
  },
  {
    tags: [tags.staff],
    href:
      'https://cthulhu.dyn.wildme.io/public/posters/parham_wacv_2018.pdf',
    citation:
      'Parham, Jason & Stewart, Charles & Crall, J.P. & Rubenstein, Daniel & Holmberg, Jason & Berger-Wolf, Tanya. (2018). An Animal Detection Pipeline for Identification. 1075-1083. 10.1109/WACV.2018.00123.',
  },
  {
    tags: [tags.flukebook, tags.staff],
    citation:
      'Blount D, Holmberg J, and Minton G. (2018) Flukebook – A tool for cetacean photo identification, data archiving and automated fluke matching. International Whaling Commission report SC/67B/PH/03.',
  },
  {
    tags: [tags.staff],
    href:
      'https://www.aaai.org/ocs/index.php/SSS/SSS17/paper/download/15245/14512',
    citation:
      'J. Parham, J. Crall, C. Stewart, T. Berger-Wolf and D. Rubenstein, "Animal Population Censusing at Scale with Citizen Science and Photographic Identification", AAAI 2017 Spring Symposium.',
  },
  {
    tags: [tags.flukebook, tags.staff],
    href: 'https://arxiv.org/abs/1708.07785',
    citation:
      'Weideman, H.J, Z.M. Jablons, J. Holmberg, K. Flynn, J. Calambokidis, R. B. Tyson, J.B. Allen, R.S. Wells, K. Hupman, K. Urian, C.V. Stewart. 2017. Integral Curvature Representation and Matching Algorithms for Identification of Dolphins and Whales. doi: 10.1002/ar.23650',
  },
  {
    tags: [tags.staff],
    citation:
      'S. Menon, T. Y. Berger-Wolf , E. Kiciman, L. Joppa, C. V. Stewart, J. Parham, J. Crall, J. Holmberg, J. Van Oast, “Animal Population Estimation Using Flickr Images”, 2nd International Workshop on the Social Web for Environmental and Ecological Monitoring (SWEEM 2017).',
  },
  {
    tags: [tags.sharkbook],
    href: 'https://www.iucnredlist.org/species/19488/2365291',
    citation:
      '2016 IUCN Red List Assessment (Endangered) for Rhincodon typus (whale shark).',
  },
  {
    tags: [tags.flukebook],
    citation:
      'Z. Jablons. Identifying humpback whale flukes by sequence matching of trailing edge curvature. Master’s thesis, Rensselaer Polytechnic Institute, 2016.',
  },
  {
    tags: [],
    href:
      'https://ieeexplore.ieee.org/document/6475023/;jsessionid=wlg1Gjvv81Cw0HGxSQH8UU9djClvSs3UY_N3So-RXF_A1DOP8F13!1734095487',
    citation:
      'J. P. Crall, C. V. Stewart, T. Y. Berger-Wolf, D. I. Rubenstein and S. R. Sundaresan, "HotSpotter — Patterned species instance recognition," 2013 IEEE Workshop on Applications of Computer Vision (WACV 2013), pp. 230-237.',
  },
  {
    tags: [],
    href:
      'https://gisandscience.com/2014/06/16/genegis-geoanalytical-tools-and-arc-marine-customization-for-individual-based-genetic-records/',
    citation:
      'Dick, D et al. (2014) geneGIS: Geoanalytical Tools and Arc Marine Customization for Individual-Based Genetic Records. Transactions in GIS, Volume 18, Issue 3, pages 324–350, June 2014.',
  },
];

export default publications;
