import { View, Center, Heading } from "native-base";

export default function Word() {
  return (
    <View>
      <Center p="5">
        <Heading size="md" color="coolGray.700">
          {"Coming soon".toUpperCase()}
        </Heading>
      </Center>
    </View>
  );
}
