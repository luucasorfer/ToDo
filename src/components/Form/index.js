import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Form() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { fontWeight: "500" }]}
        placeholder="Adicione uma tarefa..."
        placeholderTextColor={"#808080"}
      />
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Criar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    gap: 10,
    top: -30,
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: "#262626",
    borderColor: "#0D0D0D",
    borderWidth: 1,
    borderRadius: 8,
    color: "#F2F2F2",
    padding: 16,
    width: "80%",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#1e6f9f",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: "100%",
  },
});
