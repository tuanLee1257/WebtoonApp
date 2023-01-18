import React from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import { data } from "../../../dumpDATA";
import { COLORS } from "../../values/colors";
import { AntDesign } from "@expo/vector-icons";
export default function RecommendWebtoon(props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: COLORS.textPR, fontSize: 32, fontWeight: "900" }}>
        New Here?
      </Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Webtoon data={item} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
}

function Webtoon({ data }) {
  return (
    <View style={{ width: 300, marginRight: 20 }}>
      <Image
        source={{
          uri: data.image,
          width: 300,
          height: 200,
        }}
        style={{ marginVertical: 15 }}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: COLORS.textPR, fontSize: 18, fontWeight: "600" }}
          >
            {data.title}
          </Text>
          <AntDesign
            name="checkcircle"
            size={13}
            color={COLORS.primary}
            style={{ marginLeft: 5, marginRight: 3 }}
          />
          <Text style={{ color: COLORS.primary, fontSize: 13 }}>
            {data.subs}
          </Text>
        </View>
        <Text
          style={{ color: "lightgray", fontSize: 16, marginTop: 5 }}
          numberOfLines={2}
        >
          {data.description}
        </Text>
      </View>
    </View>
  );
}
