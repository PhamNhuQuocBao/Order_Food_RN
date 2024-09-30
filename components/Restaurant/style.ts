import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styleRestaurant = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
  },
  image: {
    width: "100%",
    height: 217,
    borderRadius: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});
