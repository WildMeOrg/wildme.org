const algorithms = {
  hotspotter: {
    name: 'Hotspotter',
    description:
      'Hotspotter is our baseline algorithm. It analyzes the textures in an image to find distinct patterning, or "hot spots", and compare those against other images in the database.',
    url:
      'http://cs.rpi.edu/hotspotter/crall-hotspotter-wacv-2013.pdf',
  },
  curvrank: {
    name: 'Curvrank',
    url: 'https://hjweide.github.io/research/',
  },
  dtw: {
    name: 'DTW',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  deepsense: {
    name: 'Deepsense',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  finfindr: {
    name: 'finFindR',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  kaggle: {
    name: 'Kaggle7',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  mantamatcher: {
    name: 'MantaMatcher',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  groth: {
    name: 'Modified Groth',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  i3s: {
    name: 'I3S',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  pie: {
    name: 'PIE',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
};

export default algorithms;
