import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
type VideoSource = number | { uri: string };

interface Props {
  videoPath: VideoSource;
}

const VideoPlayer = ({ videoPath }: Props) => {
  const player = useVideoPlayer(videoPath, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View>
      <VideoView player={player} allowsFullscreen allowsPictureInPicture />
      <View>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
};
export default VideoPlayer;
