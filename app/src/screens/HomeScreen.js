import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const List = [
  {
    id: 1,
    name: "Chat Screen",
    navigateTO: "chatScreen",
  },
];
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={List}
        key={(item) => {
          item.id;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.navigateTO);
            }}
          >
            <Text style={styles.text}>
              {item.id}- {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  text: {
    color: "blue",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default HomeScreen;
