import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
          width: "50%",
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

export default function TasksList({
  listaTarefas,
  tarefaConcluida,
  excluiTarefa,
}) {
  return (
    <FlatList
      style={styles.flatList}
      data={listaTarefas}
      showsVerticalScrollIndicator={false} // Remove a barra de rolagem
      renderItem={({ item, index }) => (
        <View style={styles.tarefaItem}>
          <TouchableOpacity
            style={{ width: "95%", padding: 12 }}
            onPress={() => tarefaConcluida(index)}
          >
            <Text
              style={[
                styles.tarefaTexto,
                item.estaConcluido && styles.tarefaConcluida,
              ]}
            >
              {item.estaConcluido ? "✔️" : "⚪"} {item.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.excluir}
            onPress={() => excluiTarefa(index)}
          >
            <Text style={{ padding: 8 }}>❌</Text>
          </TouchableOpacity>
        </View>
      )}
      ListEmptyComponent={<EmptyList />}
    />
  );
}

const styles = StyleSheet.create({
  emptyList: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  flatList: {
    width: "100%",
    marginTop: 2,
  },

  tarefaItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#333333",
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
