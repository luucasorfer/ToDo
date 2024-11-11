import { View, StyleSheet } from "react-native";

import Form from "../Form";
import Counter from "../Counter";
import TasksList from "../Card";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Form />
      <Counter />
      <TasksList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
  },
});
