import React from 'react';
import Typography from '@material-ui/core/Typography';

import drew from '../../assets/staff/drew.jpg';
import malcolm from '../../assets/staff/malcolm.jpg';
import mark from '../../assets/staff/mark.jpg';
import jh from '../../assets/staff/jh.jpg';
import jp from '../../assets/staff/jp.jpg';
import tanya from '../../assets/staff/tanya.jpg';
import jon from '../../assets/staff/jon.jpg';
import howard from '../../assets/staff/howard.jpg';
import emily from '../../assets/staff/emily.jpg';

export default [
  {
    img: malcolm,
    name: 'Malcolm Diggs',
    role: 'Engineering Manager',
    renderDescription: () => (
      <Typography>
        <span>
          Malcolm has a track record of building great teams that build great software. He is always on the lookout for passionate developers, regardless of their experience, skillset, or location. If you're reading this and are wondering if there's a place for you at Wild Me, he definitely wants to talk to you. Email him directly to get the conversation started. You can reach him at malcolm at wildme dot org.
        </span>
      </Typography>
    ),
  },
  {
    img: jh,
    name: 'Jason Holmberg',
    role: 'Executive Director, Co-founder',
    renderDescription: () => (
      <div>
        <Typography>
          Jason Holmberg has logged thousands of hours of development
          time on Wildbook and Wildbook for Whale Sharks. As Wild Me’s
          Information Architect, he has designed and implemented new
          tools to support digital pattern recognition for whale
          sharks and other species. Using Jason’s tools, our projects
          have been able to categorize and manage a large amount of
          wildlife data, promote collaboration across borders and data
          sets, and to identify individual animals from multiple
          photos taken by different researchers many years apart.
          Jason was lead author and population modeler for two widely
          lauded papers covering whale shark population trajectories
          at Ningaloo Marine Park in Western Australia, demonstrating
          that citizen science data can provide improved insight and
          population models through greater acquisition of high
          quality data.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Building on 16 years of experience in wildlife software,
          Jason now provides organizational leadership as Executive
          Director and manages the professional software engineers and
          machine learning specialists at Wild Me as Director of
          Engineering.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Jason’s current research focus is the development of
          Intelligent Agents that augment and interact with wildlife
          research communities. Jason’s agents are combining multiple
          forms of machine learning (DCNN, NLP, NMT, etc.) to data
          mine social media for usable wildlife information
          (photos/where/when) and autonomously curating the data and
          interacting with the public to asynchronously get more
          information as needed and educate, “returning the gift of
          data with the gift of knowledge”.
        </Typography>
      </div>
    ),
  },
  {
    img: mark,
    name: 'Dr. Mark Fisher',
    role: 'Software Engineer',
    renderDescription: () => (
      <Typography>
        Mark Fisher received his B.S. in Ecology and Evolution from
        Yale University in 2007 and his Ph.D. in Genetics from the
        University of Georgia in 2013, where he studied invasive fire
        ant population genetics. He also worked briefly as a
        computational biologist at Oregon Health and Science
        University. Afterwards, he decided to re-tool as a software
        developer, and he has been creating open-source educational
        and biology-themed tools ever since. He also teaches biology
        at various colleges in the Pacific Northwest, including
        General Biology, Genetics, Animal Behavior, Evolution,
        Entomology, and Environmental Biology. He is bringing his
        joint passions for biology, education, and software
        development to bear on Wild Me’s ongoing and future projects.
        He’s also really into Brazilian Jiu Jitsu.
      </Typography>
    ),
  },
  {
    img: jp,
    name: 'Dr. Jason Parham',
    role: 'Senior Computer Vision Research Engineer',
    renderDescription: () => (
      <Typography>
        <span>
          Jason Parham is a senior research engineer at Wild Me and
          works to apply the latest machine learning and computer
          vision algorithms in wildlife applications. Jason holds a
          B.S. in Computer Science / Mathematics from Pepperdine
          University (2008), M.S. in Computer Science from RPI (2015),
          and a Ph.D. in Computer Science from RPI (2021; advisor{' '}
        </span>
        <a href="https://www.cs.rpi.edu/~stewart/">
          Dr. Charles Stewart
        </a>
        <span>).</span>
        <span>{" Jason's doctoral research on "}</span>
        <a href="https://scholar.google.com/citations?user=18vVhS8AAAAJ&hl=en&oi=ao">
          &quot;Animal Detection for Photographic Censusing&quot;
        </a>
        <span>
          {' '}
          complements his applied work at Wild Me and offers a robust,
          end-to-end system for building large animal ID databases for
          conservation. Photographic censusing is designed as a
          drop-in replacement for traditional, invasive counting
          methods for large animal populations and was experimentally
          validated in Kenya at scale with the Great Grevy&apos;s
          Rally. The 2016 Great Grevy&apos;s Rally (GGR) was a two-day
          photographic censusing rally that created an animal ID
          database for the entire Grevy&apos;s zebra population in
          Kenya (approximately 2,500 individuals), representing the
          most comprehensive ecological snapshot for that endangered
          species. Jason&apos;s work on the GGR was repeated in 2018
          and in 2020 to build a continuous understanding of how
          Grevy&apos;s zebras are thriving and how new advances in
          machine learning algorithms can drastically automate the
          creation of ecological insights. Jason is also the
          co-developer and current maintainer of{' '}
        </span>
        <a href="https://github.com/WildMeOrg/wildbook-ia">
          Wildbook&apos;s Image Analysis (WBIA)
        </a>
        <span>
          {' '}
          Python toolkit. The machine learning algorithms available in
          WBIA are used to detect, classify, ID, and catalog animal
          populations worldwide and are available open-source on
          GitHub, PyPI, and as a pre-configured Docker container.
        </span>
      </Typography>
    ),
  },
  {
    img: drew,
    name: 'Drew Blount',
    role: 'Machine Learning Engineer',
    renderDescription: () => (
      <Typography>
        <span>
          Drew is a data scientist, software engineer and cryptography
          enthusiast. He has academic publications in both theoretical
          machine learning and applied data analysis, and has been
          active in the burgeoning, post-Bitcoin “crypto” world.
          Throughout these experiences, his work has focused on using
          information technology to benefit public, cooperative
          communities rather than private interests.
        </span>
      </Typography>
    ),
  },
  {
    img: tanya,
    name: 'Tanya Stere',
    role: 'Director of Product',
    renderDescription: () => (
      <Typography>
        Tanya Stere is a product manager with strong project
        management undertones. With a varied background dealing with
        everything from production-grade soldering to technical
        writing, her goal has always been to drive customer value at
        scale. Combined with a love for conservation and
        sustainability, and she is a great fit here at Wild Me.
      </Typography>
    ),
  },
  {
    img: jon,
    name: 'Jon Van Oast',
    role: 'Senior Engineer',
    renderDescription: () => (
      <Typography>
        <span>
          Jon Van Oast has been developing online collaborative
          software for over twenty years. He has a strong interest in
          open source software/hardware, open data, citizen science,
          and conservation.
        </span>
      </Typography>
    ),
  },
  {
    img: howard,
    name: 'Howard Windsor',
    role: 'Software Engineer',
    renderDescription: () => (
      <Typography>
        <span>
          Howard has developed software for over 20 years. He has a
          keen interest in biology, the environment and conservation.
        </span>
      </Typography>
    ),
  },
  {
    img: emily,
    name: 'Emily Kerr',
    role: 'Frontend Software Engineer',
    renderDescription: () => (
      <Typography>
        <span>
          Emily is a software engineer who is gratified to be using
          her web development experience to support the wildlife
          conservation community. She is currently helping to build
          the next generation of Wildbook.
        </span>
      </Typography>
    ),
  },
];
