import React from 'react';
import Typography from '@material-ui/core/Typography';

import drew from '../../assets/staff/drew.jpg';
import colin from '../../assets/staff/colin.jpg';
import mark from '../../assets/staff/mark.jpg';
import jh from '../../assets/staff/jh.jpg';
import ben from '../../assets/staff/ben.jpg';
import jp from '../../assets/staff/jp.jpg';
import tanya from '../../assets/staff/tanya.jpg';
import jon from '../../assets/staff/jon.jpg';

export default [
  {
    img: colin,
    name: 'Colin Kingen',
    role: 'Software Engineer/Community Engagement',
    renderDescription: () => (
      <Typography>
        <span>
          Colin Kingen is a Software Engineer and Technical Support
          Lead in Portland, Oregon. He has a strong interest in
          biology and environmental science. He is passionate about
          using coding and technology to build tools and resources to
          benefit the community and foster learning. His work on
          Wildbook includes working with others to build an adoption
          and donation system to help with funding and increase
          interest and engagement for citizen science.
        </span>
      </Typography>
    ),
  },
  {
    img: jh,
    name: 'Jason Holmberg',
    role: 'Executive Director',
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
    name: 'Jason Parham',
    role: 'Senior Computer Vision Research Engineer',
    renderDescription: () => (
      <div>
        <Typography>
          <span>
            Jason Parham received his B.S. in Computer Science /
            Mathematics from Pepperdine University in Malibu, CA in
            2008 and holds a 2015 M.S. in Computer Science from RPI in
            Troy, NY. Jason is finishing his Ph.D. under the advising
            of{' '}
          </span>
          <a href="https://www.cs.rpi.edu/~stewart/">
            Dr. Charles Stewart in the Computer Vision research group
            at RPI
          </a>
          <span>.</span>
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Jason’s Masters thesis was on the design and implementation
          of a citizen science-powered photographic censusing of the
          zebra and giraffe in the Nairobi National Park. His current
          doctoral research focuses on object detection and
          classification, using deep learning on wildlife imagery, to
          power photographic censusing. Jason is a co-developer of
          Wildbook‘s Image Analysis components, which are used to
          monitor animal populations in conservancies around Kenya and
          which integrate with the Wildbook data management platform.
          Previously, Jason worked three years for Kitware, Inc. in
          Clifton Park on detecting vehicles and military aircraft in
          overhead satellite imagery. His work at Kitware led to the
          development of KWCNN, a customized Python module that
          enables easy training of deep learning networks such as
          Fully-Convolutional Neural Networks (FCNNs) and Generative
          Autoencoder Networks (GANs).
        </Typography>
      </div>
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
    img: ben,
    name: 'Ben Scheiner',
    role: 'Senior engineer, H2O.ai Liason',
    renderDescription: () => (
      <div>
        <Typography>
          Ben is a frontend developer with a passion for building
          friendly-yet-powerful user interfaces. He has extensive
          experience developing web apps at scale, creating
          interactive dashboards, and working with robotics. Ben is
          currently designing and building the next generation of
          Wildbook. He pays careful attention to feedback from users
          and colleagues.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          In 2019 Ben fostered two squirrels from infancy to
          adolescence. His hobbies include Ultimate Frisbee, improv,
          and spending time in Pacific Northwest forests. Ben’s
          employment is made possible through Wild Me’s partnership
          with H2O.ai.
        </Typography>
      </div>
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
];
