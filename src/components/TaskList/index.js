import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskList(props) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        props.onSetPlaying?.(!playing);
        setPlaying(!playing);
      }}
    >
      {playing ? (
        <AntDesign name="checkcircle" size={20} color="#63ff63" />
      ) : (
        <AntDesign name="checkcircleo" size={20} color="#63ff63" />
      )}
    </TouchableOpacity>
  );
}
