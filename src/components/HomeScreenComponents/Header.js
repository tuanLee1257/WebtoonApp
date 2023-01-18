import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../values/colors";
export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "white" }}> Webtoon</Text>
      <Feather name="search" size={24} color={"white"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
