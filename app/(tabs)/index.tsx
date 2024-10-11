import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleHome } from "@/stylesheets/home";
import Restaurant from "@/components/Restaurant";
import { RESTAURANTS } from "@/constants/mock";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Home = () => {
  return (
    <SafeAreaView style={styleHome.container}>
      <View style={styleHome.header}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Deliver to:</Text>
          <Text>24 Mai Anh Tuan</Text>
        </View>
      </View>
      <View>
        <TextInput placeholder="Search..." style={styleHome.search} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={styleHome.popularRestaurant}>Popular Restaurants</Text>
          <TouchableOpacity>
            <Text style={styleHome.viewAll}>View all</Text>
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
