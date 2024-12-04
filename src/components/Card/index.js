import { View, Text, Image, StyleSheet } from "react-native";

import clipboard from "../../image/clipboard.png";

export function EmptyList() {
  return (
    <View style={styles.emptyList}>
      <Image source={clipboard} />
      <Text
        style={{
          color: "#808080",
          marginTop: 16,
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
        }}
      >
        Nenhuma tarefa adicionada ainda.
      </Text>
      <Text
        style={{
          color: "#808080",
          textAlign: "center",
          fontWeight: "500",
          fontSize: 16,
        }}
      >
        Adicione tarefas para organizar todos os itens que você precisa fazer.
      </Text>
    </View>
  );
}

export default function TasksList() {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <EmptyList />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyList: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  tarefaItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 8,
  },

  tarefaTexto: {
    color: "#F2F2F2",
    fontSize: 16,
  },

  tarefaConcluida: {
    textDecorationLine: "line-through",
    color: "#808080",
    fontSize: 16,
  },

  excluir: {
    marginLeft: "auto",
  },
});
