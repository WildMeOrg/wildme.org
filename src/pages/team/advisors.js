import React from 'react';
import Typography from '@material-ui/core/Typography';

import chuck from '../../assets/staff/chuck.jpg';

export default [
  {
    img: chuck,
    name: 'Dr. Chuck Stewart',
    role: 'Advisor, Co-founder',
    renderDescription: () => (
      <div>
        <Typography>
          Dr. Chuck Stewart is Professor and Head of the Department of
          Computer Science at Rensselaer Polytechnic Institute in
          Troy, NY. He is also Founder and Chief Scientist at
          DualAlign LLC. An expert on computer vision and machine
          learning, he oversaw the development of the IBEIS system, a
          precursor to the current Wildbook, by his graduate students
          Jon Crall, Jason Parham and Hendrik Weideman. He is
          currently involved in Wildbook as an advisor and consultant,
          helping the team design, build and deploy advanced
          algorithms for individual animal identification. He is
          passionate about the development of cutting-edge computer
          vision algorithms for important applications in biology,
          ecology, and conservation. Stewart holds a BS in
          Mathematical Sciences from Williams College and MS and Ph.D.
          degrees in Computer Science from the University of
          Wisconsin, Madison.
        </Typography>
      </div>
    ),
  },
];
