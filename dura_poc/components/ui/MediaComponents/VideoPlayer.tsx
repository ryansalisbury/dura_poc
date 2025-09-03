import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { View } from "react-native";

type VideoSource = number | { uri: string };

interface Props {
  videoPath: VideoSource;
}

const VideoPlayer = ({ videoPath }: Props) => {
  const player = useVideoPlayer(videoPath, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View className="items-center">
      <View className="relative w-full h-[200px]">
        <VideoView
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          startsPictureInPictureAutomatically
          style={{ width: "100%", height: 200 }}
          contentFit="contain"
        />
        <View></View>
      </View>
    </View>
  );
};
export default VideoPlayer;
