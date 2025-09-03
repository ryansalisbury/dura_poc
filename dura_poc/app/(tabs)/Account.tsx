import ActivityCard from "@/components/ui/ActivityCard/ActivityCard";
import VideoPlayer from "@/components/ui/MediaComponents/VideoPlayer";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";

const Account = () => {
  const videoSource = require("../../assets/videos/example_video.mp4");
  const thumbnailSource = require("@/assets/images/physioStockImages/stock-physio-image-1.webp");
  return (
    <View className="flex flex-col h-full gap-2 bg-[#B5EBDB]">
      <PagerView
        style={{ height: 260, width: "100%" }}
        offscreenPageLimit={1}
        initialPage={0}
        className="flex flex-col"
      >
        <View
          key="1"
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Text>First page</Text>
          <ActivityCard
            thumbnail={thumbnailSource}
            title={"Hip Mobility"}
            description={
              "Learn how to open your hips up with safe progression and developement."
            }
            onPress={() =>
              console.log("NAVIGATE TO CONTENT PAGE", thumbnailSource)
            }
          />
          <Text>Swipe ➡️</Text>
        </View>
        <View
          key="2"
          style={{ alignItems: "center", flex: 2, justifyContent: "center" }}
        >
          <Text>Second page</Text>
        </View>
        <View
          key="3"
          style={{ alignItems: "center", flex: 2, justifyContent: "center" }}
        >
          <Text>Third page</Text>
        </View>
      </PagerView>
      {/* VideoPlayer not working */}
      <VideoPlayer videoPath={videoSource} />
      <ActivityCard
        thumbnail={thumbnailSource}
        title={"Hip Mobility"}
        description={
          "Learn how to open your hips up with safe progression and developement."
        }
        onPress={() => console.log("NAVIGATE TO CONTENT PAGE", thumbnailSource)}
      />
    </View>
  );
};

export default Account;

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
