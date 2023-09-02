import React from "react";
import { AspectRatio, Box, Image, useColorMode } from "native-base";

export default function HomeBanner(): React.JSX.Element {
  const { colorMode } = useColorMode();

  const backgroundList = [
    "https://cdn.pixabay.com/photo/2020/01/06/05/29/kimono-4744625_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/05/15/18/senbon-torii-6389421_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/12/09/05/black-2941843_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/22/14/51/skull-4221695_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/09/15/10/sea-2052650_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/04/16/59/whale-2580660_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/05/07/16/52/sea-1377712_1280.jpg",
  ];

  const title = "Whale Vocabulary";

  return (
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: colorMode === "light" ? backgroundList[6] : backgroundList[7],
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
        {title}
      </Box>
    </Box>
  );
}
