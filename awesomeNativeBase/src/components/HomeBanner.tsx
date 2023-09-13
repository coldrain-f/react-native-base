import React from "react";
import { AspectRatio, Box, Image, useColorMode } from "native-base";

export default function HomeBanner(): React.JSX.Element {
  const { colorMode } = useColorMode();

  const backgroundList = [
    "https://cdn.pixabay.com/photo/2017/02/09/15/10/sea-2052650_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/04/16/59/whale-2580660_1280.jpg",
  ];

  const title = "Whale Vocabulary";

  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image
          source={{
            uri: colorMode === "light" ? backgroundList[0] : backgroundList[1],
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
