// components/styles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topnav: {
    overflow: "hidden",
    backgroundColor: "#049faa",
    color: "white",
    fontSize: 20,
    padding: 5,
    textAlign: "center",
  },
  authenticationBar: {
    backgroundColor: "mintcream",
    paddingTop: 10,
    paddingBottom: 10,
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
  },
  cards: {
    maxWidth: 800,
    margin: "0 auto",
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  reading: {
    color: "#193036",
  },
  dateTime: {
    fontSize: 12,
    color: "#1282A2",
  },
  button: {
    backgroundColor: "#049faa",
    color: "white",
    padding: 14,
    margin: 8,
    border: "none",
    cursor: "pointer",
    borderRadius: 4,
  },
  buttonHover: {
    opacity: 0.8,
  },
  deleteButton: {
    backgroundColor: "#c52c2c",
  },
  formElementsContainer: {
    padding: 16,
    width: 250,
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: 12,
    margin: 8,
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  table: {
    width: "100%",
    textAlign: "center",
    fontSize: 12,
  },
  tableRow: {
    padding: 4,
  },
  tableRowEven: {
    backgroundColor: "#f2f2f2",
  },
  tableRowHover: {
    backgroundColor: "#ddd",
  },
  tableHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: "#50b8b4",
    color: "white",
  },
  modal: {
    display: "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "#474e5d",
    paddingTop: 50,
  },
  modalContent: {
    backgroundColor: "#fefefe",
    margin: "5% auto 15% auto",
    border: "1px solid #888",
    width: "80%",
  },
  hr: {
    border: "1px solid #f1f1f1",
    marginBottom: 25,
  },
  close: {
    position: "absolute",
    right: 35,
    top: 15,
    fontSize: 40,
    fontWeight: "bold",
    color: "#f1f1f1",
  },
  closeHover: {
    color: "#f44336",
    cursor: "pointer",
  },
  clearfix: {
    content: "",
    clear: "both",
    display: "table",
  },
  cancelBtn: {
    width: "100%",
  },
  deleteBtn: {
    width: "100%",
  },
});
