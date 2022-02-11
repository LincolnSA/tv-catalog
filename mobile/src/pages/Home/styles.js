import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    // paddingHorizontal: 24,
  },

  h1: {
    fontSize: 36,
    fontWeight: "700",
    color: "#000",
    textAlign: "justify",
    marginBottom: 2,

    paddingHorizontal: 24,
    marginTop: 36,
    marginBottom: 16,
  },
  h2: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    textAlign: "justify",
    marginBottom: 2,

    paddingHorizontal: 24,
    marginBottom: 12,
  },
  h3: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    textAlign: "justify",
    marginBottom: 2,
  },
  paragraph: {
    fontSize: 14,
    color: "#000",
    textAlign: "justify",
    marginBottom: 8,
  },

  // input search and filter
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  filterWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
    backgroundColor: "#fff",
    height: 56,
    borderRadius: 8,
    marginRight: 8,
    padding: 4,
  },
  filterInput: {
    flex: 1,
    height: "100%",
    marginLeft: 4,
  },
  filterButton: {
    width: 56,
    height: 56,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fff",
    borderRadius: 8,
  },

  // styles modal
  modalContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },
  wrapper: {
    flex: 1,
  },
  h1Modal: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginBottom: 24,
  },
  h2Modal: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    textAlign: "justify",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    height: 56,
    borderRadius: 8,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
