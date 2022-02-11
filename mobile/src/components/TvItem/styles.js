import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  h1: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    textTransform: "uppercase",
  },
  p: {
    fontSize: 14,
    color: "#000",
    textAlign: "justify",
  },
});
