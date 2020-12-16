const algorithms = {
  hotspotter: {
    name: 'Hotspotter',
    description:
      'Hotspotter is a SIFT-based computer vision algorithm. It analyzes the textures in an image to find distinct patterning, or "hot spots", and then compares those against other images in the database. Unlike machine learning-based approaches, HotSpotter can help build new catalogs for new species that need to match individuals but don’t have the training data yet for machine learning-based approaches. Hotspotter can also match new individuals without the need for network retraining. Hotspotter produces a ranked list of potential matches, increasing match score with increasing similarity.',
    url:
      'http://cs.rpi.edu/hotspotter/crall-hotspotter-wacv-2013.pdf',
  },
  curvrank: {
    name: 'Curvrank',
    description:
      'CurvRank is a machine learning-based approach to matching curvature or an “edge”, such as the trailing edge of a cetacean fluke or a dorsal fin. Specifically ML is employed to weight sections of a fin or fluke that contain individually identifying information and to represent the curvature in a comparable format less subject to deformation from changes in the pose of the animal in the image.',
    url:
      'https://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w41/Weideman_Integral_Curvature_Representation_ICCV_2017_paper.pdf',
  },
  dtw: {
    name: 'DTW',
    description:
      'OC/WDTW (or “DTW” for short) is based originally on a sound wave matching technique called “Dynamic Time Warping”. DTW uses the A* algorithm to extract the trailing edge of a fluke and then look for matches to other edges by measuring the difference between them. This computer vision technique does not use ML and is optimized only for the trailing edge of humpback flukes but has good accuracy and speed.',
    url:
      'https://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w41/Weideman_Integral_Curvature_Representation_ICCV_2017_paper.pdf',
  },
  deepsense: {
    name: 'Deepsense',
    description:
      '“Deepsense” is a deep learning approach to identify right whales based on aerial photos of the callosity patterns on their heads. Deepsense is the winning entry from a Kaggle competition. It is fast and highly accurate, however it must be re-trained when new whales are added to a catalog. Like many deep learning competition winners, this algorithm is optimized for its specific task and cannot be cross-applied to other wildlife challenges. It is also highly subjective to the quality if the data in a right whales catalog, with performance degrading significantly (due to learned errors) if the catalog is not already very well curated.',
    url:
      'https://www.researchgate.net/publication/327910789_Applying_deep_learning_to_right_whale_photo_identification',
  },
  finfindr: {
    name: 'finFindR',
    url: 'http://wiki.wildbook.org/en/researchers/overview',
  },
  kaggle: {
    name: 'Kaggle7',
    description:
      '“Kaggle7” is a deep learning approach to identifying individual humpback whale flukes based on one of the winning entries from a Kaggle competition. Kaggle7 is fast and highly accurate at identifying individual humpback whales by their natural fluke patterning, however it must be re-trained when new whales are added to a catalog. Like many deep learning competition winners, this algorithm is highly optimized for its task and cannot be cross-applied to other wildlife challenges. It is also highly subjective to the quality if the data in a humpback catalog, with performance degrading significantly (due to learned errors) if the catalog is not already very well curated.',
    url:
      'https://medium.com/@ducha.aiki/thanks-radek-7th-place-solution-to-hwi-2019-competition-738624e4c885',
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
    description:
      '“Pose Invariant Embeddings” (or PIE) is a deep learning approach to individual ID. PIE is trained to learn embeddings that are useful for distinguishing among individuals in a wildlife population. Unlike HotSpotter, which is a “static” pattern matcher (i.e. a fixed algorithm not trained for each separate species), PIE can be trained on a per-species basis. Wild Me has generated separate PIE models optimized for manta rays, humpback whales, orcas, right whales, and so on. And unlike fixed-catalog classifiers like Deepsense or Kaggle7, PIE can gracefully add new individuals to its catalog without being retrained: it learns the general task of mapping images into embeddings that represent individuals, rather than the specific task of sorting images into a fixed number of IDs. PIE strikes a lovely balance between a flexible general-purpose identifier and one that can be trained and refined on a given problem. In summary, PIE is a very powerful, reusable machine learning technique that can be trained to identify individuals across many species.',
    url: 'https://arxiv.org/pdf/1902.10847.pdf',
  },
};

export default algorithms;
