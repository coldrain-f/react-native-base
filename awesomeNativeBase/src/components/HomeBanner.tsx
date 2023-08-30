import React from "react";
import { AspectRatio, Box, Image, useColorMode } from "native-base";

export default function HomeBanner(): React.JSX.Element {
  const [index, setIndex] = React.useState<number>(0);
  const { colorMode } = useColorMode();

  const backgroundList = [
    "https://cdn.pixabay.com/photo/2020/01/06/05/29/kimono-4744625_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/05/15/18/senbon-torii-6389421_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/12/09/05/black-2941843_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/22/14/51/skull-4221695_1280.jpg",
  ];

  // setTimeout(() => {
  //   const length = backgroundList.length;
  //   setIndex((index + 1) % length);
  // }, 1000 * 30);

  return (
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            // uri: backgroundList[index],
            uri: colorMode === "light" ? backgroundList[1] : backgroundList[0],
          }}
          resizeMode="cover"
          alt="image"
        />
      </AspectRatio>
      <Box
        _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xl",
        }}
        position="absolute"
        bottom="0"
        px="3"
        py="1.5"
      >
        일본어 단어 종결자
      </Box>
    </Box>
  );
}
