import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleBag } from "@/stylesheets/bag";
import { STACKS_BAG } from "@/constants/mock";
import StackBag from "@/components/StackBag";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";

const Bag = () => {
  return (
    <SafeAreaView style={styleBag.container}>
      <Text style={styleBag.headerTitle}>My bag</Text>
      <ScrollView>
        <View>
          {STACKS_BAG.map((value) => (
            <View key={value._id}>
              <StackBag data={value} key={value._id} />
              <Text style={{ color: Colors.primary.color }}>
                --------------------------------------------------------
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            gap: 8,
            marginBottom: 8,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>Subtotal</Text>
            <Text style={{ fontWeight: "bold", color: Colors.primary.color }}>
              71$
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>Delivery</Text>
            <Text style={{ fontWeight: "bold", color: Colors.primary.color }}>
              71$
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>Delivery</Text>
            <Text style={{ fontWeight: "bold", color: Colors.primary.color }}>
              71$
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button title="Checkout" />
    </SafeAreaView>
  );
};

export default Bag;
