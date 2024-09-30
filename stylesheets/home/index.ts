import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styleHome = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userSetting: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary.background,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
