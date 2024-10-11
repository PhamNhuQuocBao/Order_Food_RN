import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { ProductStack } from "@/types/product";
import { StackBagStyle } from "./style";
import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  data: ProductStack;
}

const StackBag: React.FC<Props> = ({ data }) => {
  return (
    <View style={StackBagStyle.container}>
      <Image source={{ uri: data.image }} width={80} height={80} />
      <View
        style={{
          gap: 10,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{data.name}</Text>
        <Text style={{ fontSize: 12, color: Colors.gray.color }}>
          {data.category}
        </Text>
        <Text style={{ fontSize: 16, color: Colors.primary.color }}>
          {`${data.price}$`}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Pressable
            disabled
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              backgroundColor: Colors.gray.disable,
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Entypo name="minus" size={20} color="black" />
          </Pressable>
          <Text style={{ fontWeight: "bold" }}>{data.quantity}</Text>
          <Pressable
            disabled
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              backgroundColor: Colors.gray.blur,
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Entypo name="plus" size={20} color="black" />
          </Pressable>
        </View>
      </View>
      <Pressable style={{ position: "absolute", right: 10, top: 10 }}>
        <FontAwesome name="close" size={16} color="black" />
      </Pressable>
    </View>
  );
};

export default React.memo(StackBag);
