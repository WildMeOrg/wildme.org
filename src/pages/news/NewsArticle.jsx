import React from 'react';
import Typography from '@material-ui/core/Typography';
import MarkdownPage from '../../components/MarkdownPage';
import { Line, Row } from '../../components/Containers';
import ImageCard from '../../components/ImageCard';
import newsData from './newsData';

export default function NewsArticle({ articleData }) {
  const { title, image, markdown, dateString } = articleData;

  const otherArticles = newsData.filter(
    article => article.title !== title,
  );

  return (
    <MarkdownPage
      title={title}
      imgSrc={image}
      imgSubtitle={dateString}
      content={markdown}
    >
      <div>
        <Line />
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          More Wild Me news
        </Typography>
        <Row style={{ flexWrap: 'wrap-reverse' }}>
          {otherArticles.map(article => (
            <ImageCard
              variant="black"
              date={article.dateString}
              imgSrc={article.image}
              title={article.title}
              url={`/news${article.path}`}
            />
          ))}
        </Row>
      </div>
    </MarkdownPage>
  );
}
