import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

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
    { time: "7:10", text: "Hi, how are you?" },
    { time: "7:12", text: "I'm good, thanks! How about you?" },
    { time: "7:15", text: "I'm doing well. What are you up to?" },
    { time: "7:20", text: "Just working on a project. You?" },
    { time: "7:25", text: "Same here, coding away." },
    { time: "7:30", text: "What are you working on?" },
    { time: "7:35", text: "A chat app in React Native." },
    { time: "7:40", text: "That sounds interesting!" },
    { time: "7:45", text: "Yeah, it's coming along well." },
    { time: "7:50", text: "Cool! Need any help?" },
    { time: "7:55", text: "Thanks! I might ask for your input later." },
    { time: "8:00", text: "Sure thing. Happy to help!" },
    { time: "8:05", text: "Appreciate it!" },
    { time: "8:10", text: "No problem. Anytime!" },
    { time: "8:15", text: "How's your day going?" },
    { time: "8:20", text: "Pretty busy, but good overall." },
    { time: "8:25", text: "That's good to hear." },
    { time: "8:30", text: "How about yours?" },
    { time: "8:35", text: "Also busy, but productive." },
    { time: "8:40", text: "Nice! Keep up the good work." },
  ]);

  const [text, setText] = useState("");
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current && messages.length > -1) {
      flatListRef.current.scrollToEnd({ animated: false });
    }
  }, [messages]);

  const handleSendMessage = () => {
    const postData = {
      time: Date.now().toString(),
      text: text,
    };

    setMessage([...message, postData]);
    setText(null);
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={message}
        ref={flatListRef}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({ animated: false })
        }
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
