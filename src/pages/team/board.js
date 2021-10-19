import React from 'react';
import Typography from '@material-ui/core/Typography';

import tanya from '../../assets/tbg.jpeg';
import zaven from '../../assets/zaven.jpg';
import alex from '../../assets/alex.jpg';

export default [
  {
    img: tanya,
    name: 'Dr. Tanya Berger-Wolf',
    role: 'Director, Co-founder',
    renderDescription: () => (
      <div>
        <Typography>
          Dr. Tanya Berger-Wolf is among the founders of the field of
          computational ecology, leading research at the unique
          intersection of computer science, wildlife biology, and
          social sciences. Tanya is a Professor of Computer Science
          and Engineering; Electrical and Computer Engineering; and
          Evolution, Ecology, and Organismal Biology at the Ohio State
          University, where she is also the Director of the
          Translational Data Analytics Institute. She is also a
          director and co-founder of the AI for conservation software
          non-profit Wild Me, home of the Wildbook project, which
          brings together computer vision, crowdsourcing, and
          conservation. It has been featured in media, including
          Forbes, The New York Times, CNN, National Geographic, and
          The Economist.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Tanya has given hundreds of talks about her work, including
          at TEDx and UN/UNESCO AI for the Planet. She has received
          numerous awards, including the National Science Foundation
          CAREER award, University of Illinois Scholar, UIC
          Distinguished Researcher of the Year, and Association for
          Women in Science Chicago Innovator.
        </Typography>
        <Typography style={{ marginTop: 16, fontWeight: 'bold' }}>
          To address our planet’s challenges we need a global AI-human
          partnership.
        </Typography>
      </div>
    ),
  },
  {
    img: zaven,
    name: 'Dr. Zaven Arzoumanian',
    role: 'President, Co-founder',
    renderDescription: () => (
      <Typography>
        Zaven Arzoumanian earned degrees in Physics at McGill
        University (B.Sc.) and Princeton University (M.A., Ph.D.). His
        research interests include the astrophysics of neutron stars
        and black holes, testing theories of gravitation and the
        nature of matter in extreme environments, and new technologies
        for instrumentation in radio and X-ray astronomy. Zaven is a
        scientist at NASA’s Goddard Space Flight Center in Greenbelt,
        MD, USA. Zaven’s interest in Whale Sharks and pattern-matching
        computations for biological applications culminated in the
        co-development of a technique for matching spot patterns
        adapted from astronomy, published in the Journal of Applied
        Ecology (May 2005).
      </Typography>
    ),
  },
  {
    img: alex,
    name: 'Dr. Alex Dehgan',
    role: 'Director',
    renderDescription: () => (
      <Typography>
        Dr. Alex Dehgan is the CEO and co-founder of Conservation X
        Labs, a startup for tech innovation for conservation and
        development. Dr. Alex Dehgan recently served as the Chief
        Scientist at USAID, with rank of Assistant Administrator, and
        founded the Global Development Lab. Prior to USAID, Alex
        worked in multiple positions within the Office of the
        Secretary, and the Bureau of Near Eastern Affairs, at the
        Dept. of State. At State, Alex developed political and science
        diplomacy strategies towards addressing our most challenging
        foreign policy issues in Iraq, Egypt, and the greater Islamic
        world, including engagement with Iran under the Obama
        Administration with Amb. Dennis Ross. As head of the Wildlife
        Conservation Society Afghanistan Program, Alex helped create
        Afghanistan’s first national park.
      </Typography>
    ),
  },
];
