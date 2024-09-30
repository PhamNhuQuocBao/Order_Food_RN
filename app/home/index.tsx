import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleHome } from "@/stylesheets/home";
import Restaurant from "@/components/Restaurant";
import { RESTAURANTS } from "@/constants/mock";

const Home = () => {
  return (
    <SafeAreaView style={styleHome.container}>
      <ScrollView>
        <View style={styleHome.header}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Deliver to:
            </Text>
            <Text>24 Mai Anh Tuan</Text>
          </View>
          <TouchableOpacity>
            <View style={styleHome.userSetting}>
              <Image source={require("@/assets/icons/user.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {RESTAURANTS.map((value) => (
            <Restaurant data={value} key={value.documentId} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
