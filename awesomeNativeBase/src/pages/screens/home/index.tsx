import React from 'react';
import {Box, Heading, ScrollView} from 'native-base';
import HomeBanner from '../../../components/HomeBanner';
import HomeBookItem from '../../../components/HomeBookItem';

type Book = {
  id: number;
  title: string;
  subtitle: string;
  wordCount: number;
  uri: string;
};

const books: Book[] = require('./books');

export default function Home(): React.JSX.Element {
  return (
    <Box bg="warmGray.100">
      <HomeBanner />
      <ScrollView h="80">
        <Heading size="md" p="5" pb="1" color="coolGray.700">
          모든 단어장
        </Heading>
        {books.map(book => {
          return <HomeBookItem book={book} key={book.id} />;
        })}
      </ScrollView>
    </Box>
  );
}
