import articleData from 'data/article.json';
import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

import data from 'data/data.json';
import forbes from 'data/forbes.json';
import transactions from 'data/transactions.json'

// - `poster` — постер картки
// - `tag` — категорія статті
// - `title` — заголовок статті
// - `description` — опис
// - `name` — ім'я користувача
// - `avatar` — аватар користувача
// - `postedAt` — час створення (рекомендовано в форматі від дати до сьогодні)

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={articleData.poster}
          tag={articleData.tag}
          title={articleData.title}
          description={articleData.description}
          name={articleData.name}
          avatar={articleData.avatar}
          postedAt={articleData.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={transactions}/>
      </Container>
    </Section>
  );
};
