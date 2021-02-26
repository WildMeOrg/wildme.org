import seattleTimesLogo from '../../assets/seattle-times-logo.svg';
import guardianLogo from '../../assets/guardian-logo.svg';
import natureLogo from '../../assets/nature-logo.svg';
import newYorkTimesLogo from '../../assets/new-york-times-logo.svg';

const articles = [
  {
    name: 'The Potential of Citizen Science',
    href:
      'https://www.washingtonpost.com/rolex-partnership-content/climate-solutions/the-potential-of-citizen-science/',
    organization: 'Washington Post',
    date: '2020-02-25',
    citation: 'Washington Post (Rolex Partnership Content)',
    excerpt:
      'According to Norman, a citizen scientist is just a regular person who’s helping to expand knowledge of the natural world; for his purposes, its anyone with a camera and the ability to upload their whale shark photos to the ever-growing database, now known as Wildbook for Whale Sharks and managed through Wild Me.',
  },
  {
    name:
      'The Amazing Ways Wild Me Uses Artificial Intelligence And Citizen Scientists To Help With Conservation',
    href:
      'https://www.forbes.com/sites/bernardmarr/2021/01/29/the-amazing-ways-wild-me-uses-artificial-intelligence-and-citizen-scientists-to-help-with-conservation',
    organization: 'Forbes',
    date: '2020-01-29',
    citation: 'Bernard Marr, Forbes',
    excerpt:
      'There’s no doubt Wild Me’s innovations have revolutionized animal identification. It’s a spectacular example of what can result when humans and machines combine efforts for the greater good.',
  },
  {
    name:
      'When Sharks Turned Up at Their Beach, They Called in Drones',
    href:
      'https://www.nytimes.com/2020/11/20/science/sharks-drones-artificial-intelligence.html',
    organization: 'The New York Times',
    date: '2020-11-20',
    citation: 'Jackie Snow, The New York Times',
    excerpt:
      'Flukebook is a project that tracks individual dolphins and whales by using artificial intelligence to identify them by unique features on their tails and fins, much like facial recognition technology.',
  },
  {
    name:
      "'Wildbook' site lets users upload pictures of endangered Grevy's zebras in Kenya to identify and track the animals in a bid to save the dwindling species",
    href:
      'https://www.dailymail.co.uk/sciencetech/article-8659635/Wildbook-site-lets-users-upload-pictures-endangered-Grevys-zebras-save-dwindling-species.html',
    organization: 'DailyMail.com',
    date: '2020-08-24',
    citation: 'Dan Avery, DailyMail.com',
    excerpt:
      "Wildbook's algorithms replace tedious manual identification. So far volunteers, known as ‘citizen scientists,’ have helped map out some 2,800 Grevy’s zebras in Kenya",
  },
  {
    name: "Kenyans go hi-tech to save endangered Grevy's Zebra",
    href:
      'https://www.standardmedia.co.ke/nairobi/article/2001378332/kenyans-go-hi-tech-to-save-endangered-grevys-zebra',
    organization: 'The Standard',
    date: '2020-07-11',
    citation: 'Caroline Chebet, The Standard',
    excerpt:
      'The technology comprises a database where all photos taken by citizen scientists are loaded. The system compares photos of the zebras to a database of previously recorded animals, thus saving researchers in the field weeks of manual work.',
  },
  {
    name: 'Spots and Stripes',
    href:
      'https://www.oceanographicmagazine.com/features/leopard-sharks-sundive-byron-bay/',
    organization: 'Oceanographic Magazine',
    date: '2020-02-29',
    citation: 'David Robinson, Oceanographic Magazine',
    excerpt:
      'The amazing team at Wildbook created a page for leopard sharks, which allows individuals to upload any encounters they have of leopard sharks, not only at Julian Rocks but anywhere in the world.',
  },
  {
    name:
      'What do sharks have to do with the Hubble Space Telescope?',
    href: 'https://www.instagram.com/tv/CDwJDOfHlRE/',
    organization: '@nasahubble',
    date: '2020-08-11',
    citation: '@nasahubble, Instagram',
    excerpt:
      "Using a modified version of Groth's algorithm, instead of measuring the triangles made by stars, conservationists were able to measure the distance between the Whale Shark's unique spots.",
  },
  {
    name:
      'How a Portland nonprofit is using artificial intelligence to help save whales, giraffes, zebras',
    href:
      'https://www.seattletimes.com/seattle-news/environment/how-a-portland-nonprofit-is-using-artificial-intelligence-to-help-save-whales-giraffes-zebras/',
    organization: 'The Seattle Times',
    date: '2020-02-29',
    citation: 'Aimee Rawlins, The Seattle Times',
    logo: seattleTimesLogo,
    excerpt:
      'The Wildbook for whales, called Flukebook, encourages collaboration, which is particularly useful for whales that travel long distances because it can be difficult for one research group to effectively monitor one area.',
  },
  {
    name: 'Artificial intelligence adds value in the Wild',
    href: 'https://www.itweb.co.za/content/Gb3Bw7Wo6p472k6V',
    organization: 'ITWeb (South Africa)',
    date: '2019-07-09',
    citation: 'Jessie Rudd, ITWeb',
    excerpt:
      'AI is well-positioned to identify individual animals from photos for population studies, or categorising the many millions of camera trap photos gathered by field scientists.',
  },
  {
    name:
      "GiraffeSpotter: Using Big Data and Citizen Science to Protect the World's Tallest Mammals",
    href:
      'https://en.reset.org/blog/giraffespotter-using-big-data-and-citizen-science-protect-worlds-tallest-mammals-06242019',
    organization: 'Reset (German)',
    date: '2019-06-24',
    citation: 'Jasmina Schmidt, Reset',
    excerpt:
      'GiraffeSpotter is a photo identification database where people can upload photos of giraffes for them to be recorded and individually catalogued based on the unique pattern of their hides - which is different for each and every animal, just like a human fingerprint is.',
  },
  {
    name: 'The Curated Wild',
    href:
      'http://www.anthropocenemagazine.org/2019/06/the-curated-wild/',
    organization: 'Anthropocene Magazine',
    date: '2019-06-01',
    citation: 'David Biello, Anthropocene Magazine',
    excerpt:
      'Neural networks allow a computer program such as Wildbook to be trained on one set of animal-picture data to learn the characteristics of another species and its ecosystem, rather than having to build a program anew for each and every task.',
  },
  {
    name: 'AI could be a critical tool to saving the planet',
    href:
      'https://www.theguardian.com/ai-for-earth/2019/apr/30/ai-tech-sustainable-planet',
    organization: 'The Guardian',
    citation: 'The Guardian Labs',
    date: '2019-04-30',
    logo: guardianLogo,
    excerpt:
      'Using AI to collect and curate data will also free up valuable time needed by researchers to develop and revise conservation plans to combat extinction.',
  },
  {
    name:
      'World Changing Ideas 2019: All the winners, finalists, and honorable mentions',
    href:
      'https://www.fastcompany.com/90329244/world-changing-ideas-2019-all-the-winners-finalists-and-honorable-mentions',
    organization: 'Fast Company',
    date: '2019-07-09',
    citation: 'Fast Company',
    excerpt: 'World Changing Ideas in AI and Data, Honorable Mention',
  },
  {
    name:
      'How Advanced Technology Can Help Save Wildlife, And The Companies Behind Them',
    href:
      'https://www.nasdaq.com/article/how-advanced-technology-can-help-save-wildlife-and-the-companies-behind-them-cm1116142',
    organization: 'Nasdaq',
    date: '2019-03-18',
    citation: 'Prableen Bajpai, Nasdaq',
    excerpt:
      'Traditionally, analysts spend hours and hours studying thousands of images taken from satellites, drones or camera traps in the wild to decipher range, populations, and behaviors of animals otherwise rarely seen by humans. It is laborious work. This is one area where advanced technologies such as deep learning is making a difference.',
  },
  {
    name: 'AI empowers conservation biology',
    href:
      'https://www.nature.com/articles/d41586-019-00746-1?fbclid=IwAR2FZZkMqX4iGmH5vgRcdcIWtD0tQjJ6y46O0C3dos2aMG8jAY317nMZeQo',
    organization: 'Nature',
    citation: 'Roberta Kwok, Nature',
    date: '2019-03-04',
    logo: natureLogo,
    excerpt:
      'Wildbook uses neural networks and computer-vision algorithms to detect and count animals in images, and to identify individual animals within a species. This information enables more precise estimates of wildlife population sizes.',
  },
  {
    name:
      'Wildbook: Finding Elephants in the Data (and Whale sharks, Turtles and More, Too!)',
    href:
      'https://medium.com/@trackernews/wildbook-finding-elephants-in-the-data-and-whale-sharks-turtles-and-more-too-a40abaada67c?fbclid=IwAR3aS2XntuTQ6PjlC4WuS2IXv3z9gObkTNLU7bmarVcWYkYojGqoPskBj2Y',
    organization: 'Medium',
    date: '2019-02-19',
    citation: 'J.A. Ginsburg, Medium',
    excerpt:
      'A vast and exponentially-expanding wildlife database has been created from hundreds of thousands of photographs and videos submitted by citizen-scientists, along with those captured by in-the-field camera-traps, and also scraped from websites such as YouTube and Flickr.',
  },
  {
    name:
      'How Microsoft is using AI to help the Earth (Practical AI #29)',
    href: 'https://changelog.com/practicalai/29',
    organization: 'Practical AI (podcast)',
    date: '2019-02-04',
    citation: 'Chris Benson, Practical AI (podcast)',
    excerpt:
      'Wildbook has an intelligent agent that wakes up every night at 10 PM and it searches the internet, and it looks on the social media sites, and then it will find instances of people – using just natural language processing, or just regular search, you can find people who are posting about whale sharks, and then they’re extracting frames from those videos, and then running their object detector to find the whale shark in the object, and then classifying those things and recognizing that individual animal. So they’re finding both new whale sharks that way, that researchers haven’t been exposed to before.',
  },
  {
    name: 'How Eavesdropping on Elephants is Keeping Them Safe',
    href:
      'http://www.bbc.com/future/story/20190130-how-eavesdropping-on-elephants-is-keeping-them-safe',
    organization: 'BBC',
    date: '2019-01-31',
    citation: 'Rachel Nuwer, BBC',
    excerpt:
      '[Wildbook] is revolutionising researchers’ ability to follow the movements of animals without the use of costly, cumbersome tracking devices.',
  },
  {
    name: 'How artificial intelligence is changing wildlife research',
    href:
      'https://www.nationalgeographic.com/animals/2018/11/artificial-intelligence-counts-wild-animals/',
    organization: 'National Geographic',
    date: '2018-11-13',
    citation: 'Anne Casselman, National Geographic',
    excerpt:
      "Enter Wildbook, a software program developed by Portland-based conservation tech nonprofit Wild Me, which automatically identifies individual animals by their unique coat patterns or other hallmark features, such as fluke or ear outlines. With the help of Wildbook and the nonprofit Giraffe Conservation Foundation, Stacy-Dawes, a research coordinator at the zoo's Institute for Conservation Research, and her colleagues are able to blitz a giraffe population with photos over two days, upload the images and location data to their Giraffespotter database, and presto: a robust population assessment emerges.",
  },
  {
    name: 'How many elephants are there?',
    href:
      'http://engineering.vulcan.com/2018_1112_How-many-elephants-are-there.aspx',
    organization: 'Vulcan Blog',
    date: '2018-11-12',
    citation: 'Pooja M., Kathleen G., Vulcan Blog',
    excerpt:
      "With our project, “Modernizing Wildlife Surveys with Machine Learning” (MWS), we're working with Wild Me, a non-profit based in Portland, Oregon and colleagues in East Africa to develop a platform specifically trained on aerial imagery, the kind that is used to generate these population estimates. If all goes well, we'll be able to release the platform, open source, to allow for other organizations and entities to use it, or even add to it, by training it with their data - it could be a system that can derive population estimates for elephants and eventually other large game, like giraffe, in African savannas to polar bears in Arctic tundra.",
  },
  {
    name: '‘Gentle giants’ urgently need conservation management',
    href:
      'https://geographical.co.uk/nature/wildlife/item/2867-whale-sharks',
    organization: 'Geographical',
    date: '2018-08-17',
    citation: 'Lucy Hodge-Sellers, Geographical',
    excerpt:
      'A shark’s pattern is photographed and run through software on the Wildbook for Whale Sharks platform (www.whaleshark.org), a system that has been adapted from NASA software used to identify star constellations.',
  },
  {
    name:
      'How Conservationists Are Using AI And Big Data To Aid Wildlife',
    href:
      'https://geographical.co.uk/nature/wildlife/item/2867-whale-sharks',
    organization: 'OPB',
    date: '2018-08-14',
    citation: 'Joseph Winters, OPB',
    excerpt:
      'In tandem with citizen science, Wildbook is able to condense years of human work — like photographing thousands of animals and identifying each by hand — into a matter of weeks.',
  },
  {
    name:
      'H2O.ai Partners with Wildbook to Help Save Elephants with Artificial Intelligence',
    href:
      'https://www.prnewswire.com/news-releases/h2oai-partners-with-wildbook-to-help-save-elephants-with-artificial-intelligence-300695790.html',
    organization: 'PR Newswire',
    date: '2018-08-13',
    citation: 'PR Newswire',
    excerpt:
      '"Wildbook is using deep learning to save elephants. We are excited to partner with Tanya and Wildbook to bring best-in-class AI to conserve threatened species. AI has the potential to uplift us and make us better humans," said Sri Ambati, CEO and founder at H2O.ai.',
  },
  {
    name:
      'Computer Vision and Intelligent Agents for Wildlife Conservation with Jason Holmberg',
    href:
      'https://twimlai.com/twiml-talk-166-computer-vision-and-intelligent-agents-for-wildlife-conservation-with-jason-holmberg/',
    organization: 'TWiML & AI',
    date: '2018-07-23',
    citation: 'Sam Charrington, TWiML & AI',
    excerpt:
      'Jason and I explore the evolution of these projects’ use of computer vision and deep learning, the unique characteristics of the models they’re building, and how they’re ultimately enabling a new kind of citizen science.',
  },
  {
    name: 'Astronomy Tool Helps ID Sharks',
    href:
      'https://www.scientificamerican.com/podcast/episode/astronomy-tool-helps-id-sharks/',
    organization: 'Scientific American',
    date: '2018-07-18',
    citation: 'Annie Sneed, Scientific American',
    excerpt:
      'All told, the Wildbook database now has over 5,000 citizen-science contributors, around 30,000 whale shark encounters covering 54 countries, and more than 6,000 individual whale sharks identified. In the latest study using that data, researchers report that the number of known sites where whale sharks gather has risen from 13 to 20.',
  },
  {
    name:
      "New 'Facebook' for animals could help protect endangered wildlife",
    href:
      'https://www.cnet.com/news/new-facebook-wildbook-for-animals-could-help-protect-endangered-wildlife/',
    organization: 'c-net',
    date: '2018-07-03',
    citation: 'Bonnie Burton, c-net',
    excerpt:
      "This deep-learning approach enables Wildbook to find the same exact animal in different images, which can then help researchers use even more accurate data about an animal's health, eating habits, hunting patterns, population size and possibly poacher activity.",
  },
  {
    name: 'The world’s animals are getting their very own Facebook',
    href:
      'https://www.the-star.co.ke/news/2018-07-02-hope-for-endangered-grevys-zebra-as-census-shows-population-rising/',
    organization: 'Fast Company',
    date: '2018-06-22',
    citation: 'Jackie Snow, Fast Company',
    excerpt:
      'Give machine learning algorithms enough data and it could uncover previously unknown insights about what makes animals thrive or die. These discoveries will supercharge conservation efforts and benefit populations across the world.',
  },
  {
    name: 'Combating extinction one photo at a time',
    href: 'https://sciencenode.org/feature/Wildbook.php',
    organization: 'ScienceNode',
    date: '2018-06-20',
    citation: 'Laura Reed, ScienceNode',
    excerpt:
      'The IUCN Red List of Threatened Species now uses Wildbook data on the Grevy’s zebra as its official numbers.',
  },
  {
    name: 'Wild Me joins AI for Earth',
    href:
      'https://news.microsoft.com/2018/06/14/wild-me-joins-ai-for-earth/',
    organization: 'Microsoft News Center',
    date: '2018-06-14',
    citation: 'Microsoft News Center',
    excerpt:
      '“The world is facing a major biodiversity crisis, and Wild Me’s work in harnessing computer vision and machine learning to monitor and track individual animals is truly groundbreaking,” said Bonnie Lei, AI for Earth project manager at Microsoft.',
  },
  {
    name:
      'Standing out from the pack: Wild Me uses AI to revolutionize animal identification',
    href:
      'https://blogs.microsoft.com/green/2018/06/14/standing-out-from-the-pack-wild-me-uses-ai-to-revolutionize-animal-identification/',
    organization: 'Microsoft Blog',
    date: '2018-06-14',
    citation: 'Michelle Lancaster, Microsoft Blog',
    excerpt:
      'Wildbook blends a diversity of functions and disciplines into a cloud-based common platform with tools for data collection, storage, analysis, and collaboration that help researchers operate on a larger stage.',
  },
  {
    name: 'WACV18: An Animal Detection Pipeline for Identification',
    href:
      'https://blogs.microsoft.com/green/2018/06/14/standing-out-from-the-pack-wild-me-uses-ai-to-revolutionize-animal-identification/',
    organization: 'Microsoft Blog',
    date: '2018-06-14',
    citation: 'Michelle Lancaster, Microsoft Blog',
    excerpt:
      'Wildbook blends a diversity of functions and disciplines into a cloud-based common platform with tools for data collection, storage, analysis, and collaboration that help researchers operate on a larger stage.',
  },
  {
    name:
      'Call of the Wild(book): How GPUs Help Track Threatened Animal Species',
    href:
      'https://blogs.nvidia.com/blog/2018/03/13/wildbook-threatened-species/',
    organization: 'NVIDIA Blog',
    date: '2018-03-13',
    citation: 'Tony Kontzer, NVIDIA Blog',
    excerpt:
      'To date, the team has created 15 Wildbooks for animals ranging from giraffes and polar bears to whale sharks and manta rays. It has a backlog of more than 200 requests from conservationists for more Wildbooks.',
  },
  {
    name: 'The case for technology investments in the environment',
    href: 'https://www.nature.com/articles/d41586-017-08675-7',
    organization: 'Nature',
    date: '2017-12-19',
    citation: 'Lucas Joppa, Nature',
    excerpt:
      'By identifying each individual animal, together with where and how often it’s photographed, these algorithms are providing new ways of producing global population estimates for endangered species.',
  },
  {
    name: 'Tracking the Elusive Whale Shark',
    href:
      'https://www.nytimes.com/2017/11/29/science/whale-sharks.html',
    organization: 'The New York Times',
    citation: 'Karen Weintraub, The New York Times',
    date: '2017-11-29',
    logo: newYorkTimesLogo,
    excerpt:
      'The ability to photo-identify species — and indeed the whale shark was the first shark we could do this for — has transformed our ability to understand how many individuals are out there, who is moving where, how far do they go, and how many are staying around.',
  },
  {
    name:
      'Snap a Shark Photo and Help Save the Biggest Fish on Earth',
    href:
      'https://www.nationalgeographic.com/news/2017/11/animals-whales-oceans-tourism-endangered/',
    organization: 'National Geographic',
    citation: 'Jason Bittel, National Geographic',
    date: '2017-11-29',
    excerpt:
      'Over the last 22 years, Norman and his colleagues have collected nearly 30,000 images of these markings in the Wildbook database—many of them taken by tourists—and used them to identify more than 6,000 individual sharks from all over the world.',
  },
  {
    name:
      'Finding Big Fish Online: How Wild Me Is Turning Vacation Videos Into Shark Science with Artificial Intelligence',
    href: 'https://www.prweb.com/releases/2017/05/prweb14334385.htm',
    organization: 'PR Web',
    citation: 'PR Web',
    date: '2017-05-18',
    excerpt:
      'Their global research platform—Wildbook for Whale Sharks-has combined over 120 researchers and volunteers with 5000+ citizen scientists into a global community focused on studying the population size and migrations of this rare and gentle giant.',
  },
  {
    name:
      'The Citizen Science Revolution and Artificial Intelligence',
    href:
      'http://scitechconnect.elsevier.com/citizen-science-revolution-artificial-intelligence/',
    organization: 'SciTech Connect',
    citation: 'Michael Bear, SciTech Connect',
    date: '2017-11-17',
    excerpt:
      'Contained within Wildbook are two pattern recognition algorithms, which scan submitted photographs and analyze the black freckling pattern, seen around the eyes and gill area of this species facilitating individual recognition. In this way, photographs submitted over time in a single location can determine which sharks are returning to the location from year-to-year.',
  },
  {
    name: "Tracking the Sea's Gentle Giants",
    href:
      'https://www.nationalgeographic.com/news/2016/11/brad-norman-explorer-moments-identification-system-helps-protect-whale-sharks/',
    organization: 'National Geographic',
    citation: 'Gary Strauss, National Geographic',
    date: '2016-11-11',
    excerpt:
      'Pattern-recognition algorithms adapted from those used by NASA to map stars allow a swelling collection of photos from 54 countries to serve as visual tags for identifying individuals, as well as aid researchers in piecing together migration patterns and territory.',
  },
  {
    name: '5 Intriguing Uses for Artificial Intelligence',
    href:
      'https://www.livescience.com/56497-artificial-intelligence-intriguing-uses.html',
    organization: 'LiveScience',
    citation: 'Laura Geggel',
    date: '2016-10-14',
    excerpt:
      "[Wildbook] inspects photos uploaded online by experts and the public. It can recognize each animal's unique markings, track its habitat range by using GPS coordinates provided by each photo, estimate the animal's age and reveal whether it is male or female",
  },
  {
    name: 'The Internet of Turtles',
    href:
      'https://static1.squarespace.com/static/5b80290bee1759a50e3a86b3/t/5bb5486fa4222fed5003af82/1538607215734/SWOT11_p12-13_Internet+of+Turtles.pdf',
    organization: 'SWOT',
    citation: 'Aimée Leslie et al, SWOT',
    date: '2016-10-14',
    excerpt:
      'Projects that contribute to the Internet of Turtles will be able to (a) digitally collect and share data among entities and across countries and languages; (b) extract and analyze relevant turtle data at different scales, such as population and subpopulation, from all life stages, and from turtles dead or alive; (c) contribute to the regional management unit delineation and assessment process of the International Union for Conservation of Nature’s Marine Turtle Specialist Group; and (d) provide up-to-the-moment clarity on the status of turtles wherever they are (in water or on land).',
  },
  {
    name:
      "Citizens and scientists earn their stripes counting Kenya's Grevy's zebras",
    href: 'https://www.youtube.com/watch?v=SezjJxx6NQg',
    organization: 'Euronews',
    citation: 'Euronews',
    date: '2016-02-15',
    excerpt:
      'How do you tell one zebra from another? By looking at their stripes, of course – with a special software that can identify their natural “barcode”.',
  },
  {
    name:
      'UIC Researchers are Crowd-Sourcing Wildlife Photos In Kenya to Collect Animal Data',
    href:
      'https://www.americaninno.com/chicago/african-animals-photographed-will-help-researchers-collect-wildlife-data/',
    organization: 'Chicago Inno',
    citation: 'Jim Dallke, Chicago Inno',
    date: '2015-02-16',
    excerpt:
      'IBEIS can detect individual species in photographs and can identify animals based on their stripes, spots, or wrinkles.',
  },
  {
    name: 'New Technology Identifies Zebras by Their Stripes',
    href:
      'https://www.audubon.org/news/new-technology-identifies-zebras-their-stripes',
    organization: 'Audobon',
    citation: 'Alisa Opar, Audobon',
    date: '2012-03-12',
    excerpt:
      'The free, open source program is fast and easy to use. Field ecologists upload a digital photograph of an animal’s flank into StripeSpotter, which analyzes the pixels and assigns a “stripecode.”',
  },
];

export default articles;
