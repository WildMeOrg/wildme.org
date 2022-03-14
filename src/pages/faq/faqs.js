import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../../components/Link';

export default [
  {
    id:
      'i-am-a-user-with-a-question-about-wildbook-how-can-i-get-help',
    question:
      'I am a user with a question about Wildbook. How can I get help?',
    renderAnswer: () => (
      <Typography paragraph>
        This FAQ covers questions about Wild Me, the non-profit
        organization that develops Wildbook. For technical questions
        about Wildbook, refer to the{' '}
        <Link
          external
          href="https://docs.wildme.org/docs/researchers/faq"
        >
          Wildbook FAQ
        </Link>
        . If you have a new question or need product support, use the{' '}
        <Link external href="https://community.wildme.org/">
          Wild Me Community Forums
        </Link>{' '}
        (anyone can sign up for an account).
      </Typography>
    ),
  },
  {
    id: 'how-do-i-start-a-wildbook',
    question: 'How do I start a Wildbook?',
    renderAnswer: () => (
      <Typography paragraph>
        For most users, a new Wildbook is a custom engagement with
        Wild Me and requires further discussion. However the code is
        open source and freely available, so someone with the right
        technical background could get a Wildbook up and running with
        minimal assistance. If that might be you, feel free to take a
        look at the{' '}
        <Link external href="https://github.com/wildmeorg/wildbook">
          Wildbook
        </Link>{' '}
        and{' '}
        <Link
          external
          href="https://github.com/WildMeOrg/wildbook-ia"
        >
          Wildbook-
          <abbr title="Image Analysis">IA</abbr>
        </Link>{' '}
        repositories and{' '}
        <Link
          external
          href="https://docs.wildme.org/docs/developers/wildbook_overview"
        >
          technical documentation
        </Link>
        .
      </Typography>
    ),
  },
  {
    id:
      'can-your-machine-learning-toolkit-identify-this-animal-species',
    question:
      'Can your machine learning toolkit identify this animal species?',
    renderAnswer: () => (
      <Fragment>
        <Typography paragraph>
          The species we currently support are listed on our{' '}
          <Link href="/platforms">platforms</Link> page.
        </Typography>
        <Typography paragraph>
          Do you have interest in getting a Wildbook for a species we
          don&apos;t currently support? Before you reach out, check to
          make sure your species meets the following criteria:
        </Typography>
        <ul>
          <Typography component="li" paragraph>
            You can tell the animals apart based on distinct visual
            characteristics that can be seen in a photograph
          </Typography>
          <Typography component="li" paragraph>
            You have a dataset containing high-quality images of the
            animals that have been labeled by individual
          </Typography>
          <Typography component="li" paragraph>
            Your dataset is representative of the images you want to
            submit later on
          </Typography>
        </ul>
        <Typography paragraph>
          Please reach out if you are studying any animals like this
          that you think would be good candidates for automated ID
        </Typography>
      </Fragment>
    ),
  },
  {
    id: 'how-much-data-do-i-need-to-start-a-wildbook',
    question: 'How much data do I need to start a Wildbook?',
    renderAnswer: () => (
      <Fragment>
        <Typography paragraph>
          It depends on the species and how individuals are
          identified, as well as whether Wild Me has already worked on
          the species. For most engagements for a new species, we
          need:
        </Typography>
        <ul>
          <Typography component="li" paragraph>
            2000 diverse images of the species to train a machine
            learning detector to crop to the animal (i.e. create a
            bounding box) and predict viewpoint (e.g., left, right,
            etc.). Diversity in imagery includes different lighting
            conditions, large time deltas between photos, different
            poses of the animal, and more. The more diverse the image
            set, the better the detector will handle application in
            the real world.
          </Typography>
          <Typography component="li" paragraph>
            3+ photos per animal of 200+ individual animals to train a
            machine learning individual identification algorithm. Here
            too, diversity in imagery is important. For some species,
            this requirement can be waived where a pre-trained ID
            algorithm can be applied, such as HotSpotter or Modified
            Groth.
          </Typography>
        </ul>
        <Typography paragraph>
          Click for more information about how Wild Me applies{' '}
          <Link
            external
            href="https://docs.wildme.org/docs/researchers/ia_pipeline"
          >
            different computer vision algorithms
          </Link>
          .
        </Typography>
      </Fragment>
    ),
  },
  {
    id: 'can-you-support-me-if-i-have-less-data',
    question: 'Can you support me if I have less data?',
    renderAnswer: () => (
      <Typography paragraph>
        For some species, Wild Me can cross-apply an existing detector
        and/or ID algorithm where we have developed these for similar
        species. This technique is especially useful where projects
        are just starting to collect data. Similarly, as a data
        management platform, Wildbook can be used to store and curate
        data in advance of machine learning training. Contact Wild Me
        for more information.
      </Typography>
    ),
  },
  {
    id:
      'i-have-enough-data-but-i-study-birds-or-another-animal-with-seasonal-pattern-changes-can-you-help-me',
    question:
      'I have enough data, but I study birds, or another animal with seasonal pattern changes. Can you help me?',
    renderAnswer: () => (
      <Typography paragraph>
        Sadly, we can&apos;t support animals with shifting physical
        features over time. The software could be useful for a single
        season if you have a data-rich project, but the maintenance
        and support of the platform would likely not be worth the
        overhead for your study.
      </Typography>
    ),
  },
  {
    id: 'can-you-send-us-your-data-for-my-research-project',
    question: 'Can you send us your data for my research project?',
    renderAnswer: () => (
      <Typography paragraph>
        Wild Me does not own or retain rights to distribute data
        uploaded by researchers. However, when we can we partner with
        researchers to contribute to{' '}
        <Link external href="https://lila.science/">
          <dfn>
            <abbr
              title="Labeled Information Library of Alexandria: Biology and Conservation"
              style={{ fontStyle: 'normal' }}
            >
              LILA BC
            </abbr>
          </dfn>
        </Link>
        , an open-source repository for datasets related to biology
        and conservation. Recently we added a{' '}
        <Link
          external
          href="https://lila.science/datasets/great-zebra-giraffe-id"
        >
          zebra and giraffe dataset
        </Link>{' '}
        as well as a{' '}
        <Link
          external
          href="https://lila.science/datasets/whale-shark-id"
        >
          whale shark dataset
        </Link>
        .
      </Typography>
    ),
  },
  {
    id: 'can-i-write-a-news-article-about-wild-me',
    question: 'Can I write a news article about Wild Me?',
    renderAnswer: () => (
      <Typography paragraph>
        Absolutely. Take a look at our{' '}
        <Link href="/media-resources">media resources</Link> page for
        statements about our organization, our logo, and some action
        photos. Please send us an email when the article comes out so
        we can add it to our <Link href="/press">press</Link> page!
      </Typography>
    ),
  },
];
