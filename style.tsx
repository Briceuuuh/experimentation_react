import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
container: {
    flex: 1,
    color: "black",
    backgroundColor: "#033E3E",
    alignItems: "center",
    justifyContent: "center"
},
image: {
    flex: 1,
},
input: {
    top: 0,
    fontSize: 17,
    height: 55,
    width: 335,
    margin: 20,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    borderColor: "#033E3E",
    backgroundColor: "#2B5050"
},
button_mod: {
    top: 560,
    position: "absolute",
    margin: 28,
    width: 335,
    height: 56,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#F5C106"
},
button_dec: {
    top: 660,
    position: "absolute",
    left: 28,
    width: 335,
    height: 56,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#9ABA4A"
},
text_name: {
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    width: 120,
    height: 24,
    left: 135,
    top: 236,
    fontSize: 16,
    lineHeight: 24,
    color: "white"
},
text_mail: {
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    width: 190,
    height: 21,
    left: 99,
    top: 265,
    fontSize: 14,
    lineHeight: 21,
    color: "white"
},
text_phone: {
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    width: 103,
    height: 21,
    left: 146,
    top: 288,
    fontSize: 14,
    lineHeight: 21,
    color: "white"
},
text_password: {
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    width: 103,
    height: 24,
    left: 37,
    top: 358,
    fontSize: 16,
    lineHeight: 24,
    color: "white"
},
text_hide: {
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    width: 103,
    height: 18,
    left: 37,
    top: 387,
    fontSize: 12,
    lineHeight: 18,
    color: "white"
},
text_catego: {
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    width: 141,
    height: 24,
    left: 37,
    top: 435,
    fontSize: 16,
    lineHeight: 24,
    color: "white"
},
image_profil:{
    position: "absolute",
    top: 114,
    width: 88,
    height: 88,
    borderRadius: 16,
    alignSelf: "center"
},
image_card:{
    position: "absolute",
    top: -15,
    left: -15,
    width: 88,
    height: 88,
    borderRadius: 16,
    opacity: 1,
},
dropdown:{
    position: "absolute",
    width: 113,
    height: 39,
    top:74,
    left:199,
    borderRadius:16,
    backgroundColor: "black"
},
center_container:{
    position: "absolute",
    top: 95,
    flex: 1,
    bottom: 50,
    backgroundColor: "#033E3E"
},
button_card:{
    marginTop: 37,
    width: 322,
    height: 86,
    marginLeft: 22,
    backgroundColor: "#2B5050",
    borderRadius: 14
},
text_date:{
    color: "#F5C106",
    top: 20,
    fontSize: 12,
    marginLeft: 90,
},
text_restaurant:{
    color: "white",
    top: 8,
    fontSize: 14,
    marginLeft: 90,
    fontWeight: "bold"
}
});

export default styles;