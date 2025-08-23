import VideoPlayer from "@/components/ui/MediaComponents/VideoPlayer";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";

const moreInformation = () => {
  const videoSource = require("../../assets/videos/example_video.mp4");

  return (
    <View>
      <PagerView style={{ height: 260 }} initialPage={0}>
        <View
          key="1"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
          {/* VideoPlayer not working */}
          <VideoPlayer videoPath={videoSource} />
        </View>
        <View
          key="2"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Text>Second page</Text>
        </View>
        <View
          key="3"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Text>Third page</Text>
        </View>
      </PagerView>
      {/* VideoPlayer not working */}
      <VideoPlayer videoPath={videoSource} />
    </View>
  );
};

export default moreInformation;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
