import { View, Image, StyleSheet } from "react-native";

import logo from "../../image/todoLogo.png";

export default function Title() {
  return (
    <View style={styles.header}>
      <Image
        source={logo}
        style={{
          paddingHorizontal: 100,
          paddingVertical: 18,
          aspectRatio: 1,
        }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    maxHeight: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
  },
});
