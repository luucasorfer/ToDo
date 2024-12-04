import { useState } from "react";
import { View, StyleSheet } from "react-native";

import Form from "../Form";
import Counter from "../Counter";
import TasksList from "../Card";

export default function Main() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const addTarefas = (tarefa) => {
    setListaTarefas([...listaTarefas, { text: tarefa, estaConcluido: false }]);
  };

  return (
    <View style={styles.mainContainer}>
      <Form enviaTarefa={addTarefas} />
      <Counter />
      <TasksList listaTarefas={listaTarefas} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    maxWidth: 736,
    alignItems: "center",
  },
});
