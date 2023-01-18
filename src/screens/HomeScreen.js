import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Header from "../components/HomeScreenComponents/Header";
import RecommendWebtoon from "../components/HomeScreenComponents/RecommendWebtoon";
import TopWebtoon from "../components/HomeScreenComponents/TopWebtoon";
import { COLORS } from "../values/colors";
function HomeScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Header />
      <View style={{ marginLeft: 10 }}>
        <RecommendWebtoon />
        <TopWebtoon />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
