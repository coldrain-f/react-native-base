import React from "react";
import Navigation from "./src/pages/navigation";
import { NativeBaseProvider, extendTheme } from "native-base";

export default function App(): React.JSX.Element {
  const theme = extendTheme({
    components: {
      Text: {
        defaultProps: {
          allowFontScaling: false,
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
}
