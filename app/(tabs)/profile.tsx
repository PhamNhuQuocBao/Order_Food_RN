import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const Profile = () => {
  return (
    <SafeAreaView style={{ position: "relative" }}>
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
      <View style={{ gap: 20, margin: 20 }}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View
            style={{
              backgroundColor: Colors.gray.disable,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 50,
            }}
          >
            <MaterialIcons name="payment" size={24} color="black" />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Payment methods
            </Text>
            <Text style={{ color: Colors.gray.color }}>2 cards added</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View
            style={{
              backgroundColor: Colors.gray.disable,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 50,
            }}
          >
            <AntDesign name="home" size={24} color="black" />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Delivery address
            </Text>
            <Text style={{ color: Colors.gray.color }}>
              24 Mai Anh Tuan, Da Nang
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View
            style={{
              backgroundColor: Colors.gray.disable,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 50,
            }}
          >
            <AntDesign name="setting" size={24} color="black" />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Settings</Text>
            <Text style={{ color: Colors.gray.color }}>
              Notifications | contacts | FAQ
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={{
          padding: 12,
          backgroundColor: Colors.gray.disable,
          borderRadius: 50,
          position: "absolute",
          top: 40,
          right: 20,
        }}
      >
        <AntDesign name="logout" size={16} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;
