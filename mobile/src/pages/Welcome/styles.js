import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    position: "relative",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#000",
  },
  button: {
    position: "absolute",
    bottom: 36,

    width: 56,
    height: 56,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000",
    borderRadius: 8,

    elevation: 1,
  },
});
