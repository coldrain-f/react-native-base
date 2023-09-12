import React from "react";
import { Actionsheet, Divider, Fab, useDisclose } from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function KanjiActionSheet() {
  const { isOpen, onOpen, onClose } = useDisclose();

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
            startIcon={
              <Ionicon
                name="checkbox-outline"
                color="#374151" // coolGray.700
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
            startIcon={
              <Ionicon
                name="eye-outline"
                color="#374151"
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
            startIcon={
              <Ionicon
                name="eye-outline"
                color="#374151"
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
            startIcon={
              <Ionicon
                name="eye-outline"
                color="#374151"
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
