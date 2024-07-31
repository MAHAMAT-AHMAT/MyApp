import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  topnav: {
    overflow: "hidden",
    backgroundColor: "#049faa",
    color: "white",
    fontSize: 20,
    padding: 5,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  authenticationBar: {
    backgroundColor: "mintcream",
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: "center",
  },
  userDetails: {
    color: "cadetblue",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    shadowColor: "rgba(140,140,140,.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: "5%",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    flexWrap: "wrap",
  },
  label: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    margin: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  error: {
    color: "red",
  },
  button: {
    backgroundColor: "#049faa",
    color: "white",
    padding: 14,
    margin: 8,
    borderRadius: 4,
    textAlign: "center",
  },
  buttonHover: {
    opacity: 0.8,
  },
  deleteButton: {
    backgroundColor: "#c52c2c",
  },
});

export default styles;
