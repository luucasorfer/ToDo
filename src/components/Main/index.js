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

  const alteraConcluido = (index) => {
    const atualizaTarefa = [...listaTarefas];
    atualizaTarefa[index].estaConcluido = !atualizaTarefa[index].estaConcluido;
    setListaTarefas(atualizaTarefa);
  };

  const removeTarefa = (index) => {
    setListaTarefas(listaTarefas.filter((_, indice) => indice !== index));
  };

  return (
    <View style={styles.mainContainer}>
      <Form enviaTarefa={addTarefas} />
      <Counter contTarefas={listaTarefas} />
      <TasksList
        listaTarefas={listaTarefas}
        tarefaConcluida={alteraConcluido}
        excluiTarefa={removeTarefa}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    maxWidth: 736,
    alignItems: "center",
  },
});
