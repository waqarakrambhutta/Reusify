import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const messages = [
  {
    time: "7:10",
    text: "hi how are you",
  },
  { time: "8:50", text: "I'm fine" },
  { time: "10:15", text: "what about you?" },
];

const ChatScreen = () => {
  const [message, setMessage] = useState([
    {
      time: "7:10",
      text: "hi how are you",
    },
    { time: "8:50", text: "I'm fine" },
    { time: "10:15", text: "what about you?" },
  ]);
  const [text, setText] = useState("");
  console.log(text);

  const handleSendMessage = () => {
    const postData = {
      time: Date.now().toString(),
      text: text,
    };

    setMessage([...message, postData]);
    setText(null);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={message}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />

      <TextInput
        placeholder="Enter message"
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Send message" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "gray",
    height: 50,
    width: "100%",
  },
});
export default ChatScreen;
