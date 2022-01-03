import hotspotter from '../assets/hotspotter.jpg';

const markdown = `
Happy New Year!

It is with an amazing amount of thankfulness that I approach the end of 2021. Where we are now as an organization — two years into a global pandemic but larger, stronger and more capable than ever — was never guaranteed. And while no future is certain, let me not miss a chance to pause for a moment and be appreciative, reflective, and humbly grateful when things are good. 

My year-end thankfulness covers many areas: a wonderful staff who face tough challenges daily with skill and thoughtfulness; an amazing community of wildlife researchers and collaborators (we are their biggest fans!); and our financial supporters — the Gordon and Betty Moore Foundation, the Paul G. Allen Family Foundation, Microsoft, and H2O.ai — who have shown long-term faith in our mission and vision and helped us along through difficult times. The hard work and support of all of the above made 2021 a good year for us. Consider these 2021 accomplishments for Wild Me:

 - Wildbooks are now tracking 146,000 individual animals across almost 750,000 sightings.
 - Our [community support model](https://community.wildme.org/) has never been stronger. In 2021, we tracked and resolved over 550 support tickets, including bug fixes, platform support modifications, and new feature requests.
 - We added computer vision support for more new species in Wildbook than ever before, including:
   - [Internet of Turtles](https://iot.wildbook.org/)
      - Southern Vietnamese box turtles
      - Bourret's box turtle
   - [Flukebook](https://www.flukebook.org/) 
      - Gray whale
      - Beluga whale 
      - Guiana dolphin 
      - False killer whale 
      - Indo-pacific humpback dolphin  
   - [African Carnivore Wildbook](https://africancarnivore.wildbook.org/)
      - Spotted hyena 
      - Brown hyena 
   - [MantaMatcher](https://www.mantamatcher.org/) 
      - Bull ray 
      - Spotted eagle ray 
   - [Sharkbook.ai](https://www.sharkbook.ai/) (formerly whaleshark.org)
      - Basking shark 
      - Nursehound shark 
      - White shark 
      - And consolidation of leopard, ragged tooth, and sevengill sharks from other legacy platforms.
   - **NEW:** [GrouperSpotter](https://www.grouperspotter.org/)
      - Nassau grouper
   - **NEW:** [Amphibian](https://amphibian-reptile.wildbook.org/) 
      - Fire salamander 
   - [Whiskerbook](https://www.whiskerbook.org/) (formerly the Jaguar Wildbook)
      - Bobcat 
      - Eurasian lynx 
      - Persian leopard 
      - Asiatic cheetah 
      - Ocelot 
      - Snow leopard 
- We increased our machine learning competency greatly, including:
   - Completion of Dr. Jason Parham’s PhD in machine learning for wildlife
   - Production deployment of the orientation network (rotate animals to a common orientation for improved ID matching) and the assigner network (whose body part is this?)
   - Addition of the new PIE v2 triplet loss-based ID algorithm for multiple species in collaboration with Dr. Olga Moskvyak
   - [Our supported publication list](https://www.wildme.org/#/publications) keeps growing and growing.
   - Across all of our platforms, over 250 new study sites were added to reflect the growing coverage of Wildbooks.
   - Our staff grew with the addition of Software Engineer Howard Windsor, who brings over 20 years of software experience to our Codex development effort.


And this is the short list.

<hr style="margin-bottom: 20px;" />
<img src="${hotspotter}" alt="New machine learning techniques" width="100%" />
<hr />

Investment in new machine learning techniques is allowing Wild Me to support more researchers for more species than ever before.

2021 was not an easy year for anyone, but Wild Me survived, expanded, and grew stronger. And for that I am humbled and thankful to you all: staff, community users, and supporters alike.

As I look ahead to 2022…once again we’re probably not going to get an easy year globally, but the work Wild Me is doing is going to be exciting. Here are some hints at our workload already scheduled:

- An entire rewrite of Wildbook, called “Codex”, is releasing its first version very early in the year. Improving how humans and AI interact is at the forefront of its new workflow.
- We are working with NOAA, BOEM, and NASA on a new computer vision competition for beluga individual ID.
- Our first AI-enabled platform for aerial surveys will be released mid-year, which represents our second open source product, with the support of the Paul G. Allen Family Foundation.
- We’ll be working with NOAA and BOEM to understand how time plays a role in training machine learning for wildlife individual ID.
- After years of dreaming, a Codex for Seals is finally on order thanks to the support of BOEM.
- We’ll be exploring facial recognition for wildlife individual ID thanks to a new grant from the Gordon and Betty Moore Foundation.

I wish you all a Happy New Year, a safe and healthy 2022, and I thank you for continuing to support Wild Me in our mission: to bring cutting edge software and AI to strengthen and enable those who are fighting the Sixth Mass Extinction in so many locations across the globe.

Sincerely,  
Jason Holmberg  
Executive Director  
Wild Me
`;

export default markdown;
