import { View, Text, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

const Profile = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: 24,
          marginVertical: 12,
        }}
      >
        Profile
      </Text>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://www.ruaanhgiare.vn/wp-content/uploads/2023/06/anh-ngau.jpg",
          }}
          width={120}
          height={120}
          style={{ borderRadius: 60 }}
        />
      </View>
      <View style={{ gap: 4, marginTop: 12 }}>
        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>
          Pham Nhu Quoc Bao
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: Colors.gray.color,
          }}
        >
          24 Mai Anh Tuan, Hoa Xuan
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: Colors.gray.color,
          }}
        >
          0326495191
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={{ backgroundColor: Colors.primary.color }}>
            <MaterialIcons name="payment" size={24} color="black" />
          </View>
          <View>
            <Text>Payment methods</Text>
            <Text>2 cards added</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
