import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Counter() {
  return (
    <View style={styles.tasksContainer}>
      <View style={styles.tasksContainerText}>
        <Text style={{ color: "#4EA8DE", fontWeight: "bold" }}>
          Tarefas criadas
        </Text>
        <Text style={styles.tasksContainerCount}>0</Text>
      </View>
      <View style={styles.tasksContainerText}>
        <Text style={{ color: "#8284FA", fontWeight: "bold" }}>Concluído</Text>
        <Text style={styles.tasksContainerCount}>0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  tasksContainerText: {
    flexDirection: "row",
    alignItems: "center",
  },

  tasksContainerCount: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    fontSize: 14,
    fontWeight: "700",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
});
