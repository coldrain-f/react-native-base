import React from 'react';
import {AspectRatio, Box, Image} from 'native-base';

export default function HomeBanner(): React.JSX.Element {
  const title: string = '일본어 단어 학습';

  return (
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/01/06/05/29/kimono-4744625_1280.jpg',
          }}
          resizeMode="cover"
          alt="image"
        />
      </AspectRatio>
      <Box
        _text={{
          color: 'warmGray.50',
          fontWeight: '700',
          fontSize: 'xl',
        }}
        position="absolute"
        bottom="0"
        px="3"
        py="1.5">
        {title}
      </Box>
    </Box>
  );
}
