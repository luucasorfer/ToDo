import { useState, useEffect } from "react";
import { View, Platform, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Form from "../Form";
import Counter from "../Counter";
import TasksList from "../Card";

export default function Main() {
  const [listaTarefas, setListaTarefas] = useState([]);

  // Função para salvar as tarefas no AsyncStorage
  const salvarTarefas = async (tarefas) => {
    try {
      await AsyncStorage.setItem("tarefas", JSON.stringify(tarefas));
    } catch (error) {
      console.error("Erro ao salvar tarefas", error);
    }
  };

  // Função para carregar as tarefas do AsyncStorage
  const carregarTarefas = async () => {
    try {
      const tarefasSalvas = await AsyncStorage.getItem("tarefas");
      if (tarefasSalvas) {
        setListaTarefas(JSON.parse(tarefasSalvas));
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas", error);
    }
  };

  // Usar useEffect para carregar as tarefas quando o aplicativo iniciar
  useEffect(() => {
    carregarTarefas();
  }, []);

  const addTarefas = (tarefa) => {
    const novaListaTarefas = [
      ...listaTarefas,
      { text: tarefa, estaConcluido: false },
    ];
    setListaTarefas(novaListaTarefas); // Atualiza o estado
    salvarTarefas(novaListaTarefas); // Salva no AsyncStorage
  };

  const alteraConcluido = (index) => {
    const atualizaTarefa = [...listaTarefas];
    atualizaTarefa[index].estaConcluido = !atualizaTarefa[index].estaConcluido;
    setListaTarefas(atualizaTarefa); // Atualiza o estado
    salvarTarefas(atualizaTarefa); // Salva no AsyncStorage
  };

  const removeTarefa = (index) => {
    const novaListaTarefas = listaTarefas.filter(
      (_, indice) => indice !== index,
    );
    setListaTarefas(novaListaTarefas); // Atualiza o estado
    salvarTarefas(novaListaTarefas); // Salva no AsyncStorage
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
    width: Platform.OS === "web" ? "100%" : "80%", // Condicional baseado na plataforma
    maxWidth: 736,
    alignItems: "center",
  },
});
