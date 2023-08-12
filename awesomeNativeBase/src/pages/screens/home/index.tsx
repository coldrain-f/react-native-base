import React from 'react';
import {
  Box,
  Center,
  Heading,
  HStack,
  ScrollView,
  Pressable,
  Text,
  QuestionIcon,
  createIcon,
  StatusBar,
} from 'native-base';
import HomeBanner from '../../../components/HomeBanner';
import HomeBookItem from '../../../components/HomeBookItem';
import type {HomeProps} from '../../navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type Book = {
  id: number;
  title: string;
  subtitle: string;
  wordCount: number;
  uri: string;
};

const books: Book[] = require('./books');

export default function Home({navigation}: HomeProps): React.JSX.Element {
  return (
    <Box bg="warmGray.100" flex={1} safeAreaTop width="100%">
      <HomeBanner />
      <ScrollView h="80">
        <Heading size="md" p="5" pb="1" color="coolGray.700">
          모든 단어장
        </Heading>
        {books.map(book => {
          return (
            <HomeBookItem
              book={book}
              onPress={() => {
                navigation.navigate('Category', {
                  bookTitle: book.title,
                });
              }}
              key={book.id}
            />
          );
        })}
      </ScrollView>

      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable opacity={1} py="3" flex={1}>
          <Center>
            <BookEducationIcon />
            <Text color="white" fontSize="12">
              단어장
            </Text>
          </Center>
        </Pressable>

        <Pressable
          opacity={0.5}
          py="2"
          flex={1}
          onPress={() => navigation.navigate('Information')}>
          <Center>
            <CogBoxIcon />
            <Text color="white" fontSize="12">
              설정
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.navigate('Information');
          }}>
          <Center>
            <QuestionIcon mb="1" color="white" size="sm" />
            <Text color="white" fontSize="12">
              이용안내
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}

function CogBoxIcon() {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    d: 'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z',
  });
  return <CustomIcon size="sm" mb="1" color="white" />;
}

function BookEducationIcon() {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    d: 'M8.82 17L13 19.28V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V12.54L18.5 11.72L8.82 17M24 17L18.5 14L13 17L18.5 20L24 17M15 19.09V21.09L18.5 23L22 21.09V19.09L18.5 21L15 19.09Z',
  });
  return <CustomIcon size="sm" mb="1" color="white" />;
}
