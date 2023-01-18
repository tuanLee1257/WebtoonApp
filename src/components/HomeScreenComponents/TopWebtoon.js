import React from "react";
import { Image, Text, View } from "react-native";
import { data } from "../../../dumpDATA";

function TopWebtoon(props) {
  return (
    <View>
      <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
        Top Series
      </Text>
      <Webtoon />
      <Text></Text>
    </View>
  );
}

export default TopWebtoon;

function Webtoon() {
  return (
    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 5 }}>
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        1
      </Text>
      <Image
        source={{
          uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe2c1ce0-ff64-450b-b44d-5737a06c395f/dersw5h-adb867c2-cde7-4e74-aa83-dadccee6d99e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlMmMxY2UwLWZmNjQtNDUwYi1iNDRkLTU3MzdhMDZjMzk1ZlwvZGVyc3c1aC1hZGI4NjdjMi1jZGU3LTRlNzQtYWE4My1kYWRjY2VlNmQ5OWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D6KtD7bMD6N3V3g3Z3gnMjWP8y4JLr5dMhMluF6nIJE",
          height: 50,
          width: 50,
        }}
        style={{ marginHorizontal: 13 }}
      />
      <Text style={{ color: "white", fontWeight: "500", fontSize: 16 }}>
        Top 1
      </Text>
    </View>
  );
}
