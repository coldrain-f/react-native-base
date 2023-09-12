import React from "react";
import {
  Actionsheet,
  Divider,
  Fab,
  useColorMode,
  useDisclose,
} from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function KanjiActionSheet() {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { colorMode } = useColorMode();

  return (
    <>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={
          <Ionicon name="ellipsis-horizontal-outline" color="white" size={20} />
        }
        onPress={onOpen}
      />

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item
            _text={{
              color: "coolGray.700",
            }}
            _dark={{
              _text: {
                color: "coolGray.100",
              },
            }}
            startIcon={
              <Ionicon
                name="checkbox-outline"
                // #374151: coolGray.700, #f3f4f6: coolGray.100
                color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                size={18}
                style={{
                  marginTop: 3,
                }}
              />
            }
          >
            전체 선택
          </Actionsheet.Item>
          <Divider />
          <Actionsheet.Item
            _text={{
              color: "coolGray.700",
            }}
            _dark={{
              _text: {
                color: "coolGray.100",
              },
            }}
            startIcon={
              <Ionicon
                name="eye-outline"
                color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                size={18}
                style={{
                  marginTop: 3,
                }}
              />
            }
          >
            전체 보기
          </Actionsheet.Item>

          <Actionsheet.Item
            _text={{
              color: "coolGray.700",
            }}
            _dark={{
              _text: {
                color: "coolGray.100",
              },
            }}
            startIcon={
              <Ionicon
                name="eye-outline"
                color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                size={18}
                style={{
                  marginTop: 3,
                }}
              />
            }
          >
            음독 보기
          </Actionsheet.Item>

          <Actionsheet.Item
            _text={{
              color: "coolGray.700",
            }}
            _dark={{
              _text: {
                color: "coolGray.100",
              },
            }}
            startIcon={
              <Ionicon
                name="eye-outline"
                color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                size={18}
                style={{
                  marginTop: 3,
                }}
              />
            }
          >
            훈독 보기
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
