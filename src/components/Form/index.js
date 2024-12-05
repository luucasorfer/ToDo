import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Form({ enviaTarefa }) {
  const [tarefa, setTarefa] = useState("");

  function enviaTexto() {
    if (tarefa.trim() === "") {
      alert("A tarefa não pode estar vazia!");
      return;
    }
    enviaTarefa(tarefa);
    setTarefa("");
  }
  

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { fontWeight: "500" }]}
        placeholder="Adicione uma tarefa..."
        placeholderTextColor={"#808080"}
        value={tarefa}
        onChangeText={setTarefa}
      />
      <TouchableOpacity style={styles.button} onPress={enviaTexto}>
        <Text
          style={{
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Criar
        </Text>
        <Ionicons name="add-circle-outline" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    gap: 8,
    top: -26,
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: "#262626",
    borderColor: "#0D0D0D",
    borderWidth: 1,
    borderRadius: 8,
    color: "#F2F2F2",
    padding: 16,
    width: "100%",
    fontSize: 14,
  },

  button: {
    backgroundColor: "#1e6f9f",
    borderRadius: 8,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
