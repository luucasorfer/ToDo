import { View, Text, StyleSheet } from "react-native";

export default function Counter({ contTarefas }) {
  const tarefasConcluidas = contTarefas.filter(
    (tarefa) => tarefa.estaConcluido,
  ).length;

  return (
    <View style={styles.tasksContainer}>
      <View style={styles.tasksContainerText}>
        <Text style={{ color: "#4EA8DE", fontWeight: "bold" }}>
          Tarefas criadas
        </Text>
        <Text style={styles.tasksContainerCount}>{contTarefas.length}</Text>
      </View>
      <View style={styles.tasksContainerText}>
        <Text style={{ color: "#8284FA", fontWeight: "bold" }}>Concluído</Text>
        <Text style={styles.tasksContainerCount}>{tarefasConcluidas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    top: 15,
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
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
});
