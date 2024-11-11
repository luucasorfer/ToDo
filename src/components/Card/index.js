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
          fontWeight: "500",
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
    width: "80%",
    alignItems: "center",
    marginTop: 60,
  },
});
