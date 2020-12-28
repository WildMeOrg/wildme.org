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
          Dr. Tanya Berger-Wolf is a Computational Ecologist,
          designing computational methods to solve problems in
          ecology, from genetics to social interactions, focusing
          particularly on the algorithmic and data aspects of the
          questions. Dr. Berger-Wolf is the co-founder and lead of the
          Wildbook project. She is a Professor in the Department of
          Computer Science at the University of Illinois at Chicago,
          where she heads the Computational Population Biology Lab. As
          a legitimate part of her research (and Wildbook) she gets to
          fly in a super-light airplane over a nature preserve in
          Kenya, taking a hyper-stereo video of zebra populations and
          learning how to identify each one of them by the unique
          stripe pattern.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Berger-Wolf holds a Ph.D. in Computer Science from the
          University of Illinois at Urbana-Champaign. She has received
          numerous awards for her research and mentoring, including
          the US National Science Foundation CAREER Award, Association
          for Women in Science Chicago Innovator Award, and the UIC
          Mentor of the Year Award.
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
