import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
container: {
    flex: 1,
    color: "black",
    backgroundColor: "#033E3E",
    alignItems: "center",
},
container_with_tab_bar: {
    width: "100%",
    height:"92%",
    color: "black",
    backgroundColor: "#033E3E",
    alignItems: "center",
},
image: {
    flex: 1,
},
input: {
    marginTop:"50%",
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
    top: "80%",
    position: "absolute",
    width: 335,
    height: 56,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#F5C106",
},
button_dec: {
    top: "90%",
    position: "absolute",
    width: 335,
    height: 56,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#9ABA4A",
},
text_name: {
    position: "absolute",
    alignItems: "center",
    top: 236,
    fontSize: 16,
    lineHeight: 24,
    color: "white"
},
text_mail: {
    position: "absolute",
    alignItems: "center",
    top: 265,
    fontSize: 14,
    lineHeight: 21,
    color: "white"
},
text_phone: {
    position: "absolute",
    alignItems: "center",
    top: 288,
    fontSize: 14,
    lineHeight: 21,
    color: "white"
},
text_password: {
    position: "absolute",
    alignItems: "center",
    left: "10%",
    top: 358,
    fontSize: 16,
    lineHeight: 24,
    color: "white"
},
text_hide: {
    position: "absolute",
    alignItems: "center",
    left:"10%",
    top: 387,
    fontSize: 12,
    lineHeight: 18,
    color: "white"
},
text_catego: {
    position: "absolute",
    alignItems: "center",
    left: "10%",
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
    left: -12,
    width: 88,
    height: 88,
    borderRadius: 16,
    opacity: 1,
},
center_container:{
    top: "16%",
    flex: 1,
    width: 345,
    height: 100,
    marginBottom: "35%",
    backgroundColor: "#033E3E"
},
button_card:{
    marginTop: "6%",
    width: "92.5%",
    height: 86,
    marginLeft: "5%",
    marginBottom: "6%",
    backgroundColor: "#2B5050",
    borderRadius: 14
},
button_card_notif:{
    marginTop: "12%",
    width: "95%",
    height: 86,
    marginLeft: "5%",
    backgroundColor: "#1C5151",
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
},
text_go:{
    color: "#033E3E",
    top: 0,
    fontSize: 14,
    marginTop: "6%",
    alignSelf:"center",
    fontWeight: "bold"
},
text_notif_restau:{
    color: "white",
    top: 20,
    fontSize: 14,
    marginLeft: 130,
},
container_drop:{
    position: "absolute",
    top: 55,
    height: 39,
    width: 113,
},
drop_down:{
    position: "absolute",
    width: 113,
    height: 39,
    borderRadius: 16,
    left: 117,
    backgroundColor: "#F5C106"
},
button_return:{
    position: "absolute",
    height: 32,
    width: 32,
    borderRadius: 50,
    backgroundColor: "#F5C106",
    left: 10,
},
text_retour:{
    fontSize: 14,
    color: "white",
    left: 55,
    fontWeight: "bold",
    top: 9
},
text_notif:{
    fontSize: 11,
    color: "white",
    left: 10,
    fontWeight: "bold",
    top: 30
},
container_top:{
    marginTop: "10%",
    height: "5%",
    width: 345,
    marginBottom: 70,
    backgroundColor: "#033E3E"
},
container_center:{
    /* position: "absolute",
    top: 150, */
    //marginTop: 100,
    height: "80%",
    width: 334,
    backgroundColor: "#033E3E"
},
style_switch:{
    borderWidth: 3,
    borderColor: "#F5C106",
    position: "absolute",
    backgroundColor: "white",
    left: 290,
    top: 35,
},
contact:{

    fontWeight: "bold",
    fontSize: 14,
    top: 10,
    marginLeft: "2%",
    color: "white",
},
coord:{
    marginTop: -17,
    marginLeft: "10%",
    color: "white",
},
image_contact:{
    marginLeft: "2%",
    marginTop: "7%",
    height: 17,
    width: 17,
},
view_card:{
    width: 334,
    height: 154,
    backgroundColor: "#1C5151",
    borderRadius: 15,
},
view_map:{
    marginTop: "7%",
    width: 334,
    height: 154,
    backgroundColor: "black",
    borderRadius: 15,
},
view_fidele:{
    width: 79,
    height: 74,
    backgroundColor: "#1C5151",
    borderRadius: 15,
},
view_view:{
    width: 79,
    height: 74,
    backgroundColor: "#1C5151",
    borderRadius: 15,
},
view_point:{
    width: 79,
    height: 74,
    backgroundColor: "#1C5151",
    borderRadius: 15,
},
view_recomp:{
    marginTop: "7%",
    width: 334,
    height: 169,
    backgroundColor: "#1C5151",
    borderRadius: 15,
},
button_go:{
    width: 334,
    height: 56,
    borderRadius: 15,
    backgroundColor: "#F5C106",
},
text_point:{
    top: 16,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    color: "#F5C106",
},
value_point:{
    top: 20,
    fontSize: 14,
    textAlign: "center",
    color: "white",
},
text_view_recomp:{
    position: "absolute",
    top: 22,
    left: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
},
value_view_after:{
    position: "absolute",
    top: 22,
    left: 230,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
},
value_view_card:{
    position: "absolute",
    top: 22,
    left: 171,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
},
text_dish:{
    position: "absolute",
    top: 56,
    left: 16,
    fontSize: 14,
    color: "white",
},
image_coin:{
    position: "absolute",
    top: 21,
    left: 297,
    height: 18,
    width: 18,
},
image_gift:{
    position: "absolute",
    height: 90,
    width: 95,
    top: 80,
    borderBottomRightRadius: 65,
    left: 275,
},
image_beauty:{
    position: "absolute",
    height: 70,
    width: 77,
    left: 35,
    borderRadius: 15,
},
image_resto:{
    position: "absolute",
    height: 70,
    width: 77,
    left: 135,
    borderRadius: 15,
},
scrollview:{
    top: 474,
    height: 99,
    width: "100%",
},
text_view_scroll:{
    position: "absolute",
    left: 35,
    top: 80,
    color:"white"
},
text_view_scroll2:{
    position: "absolute",
    left: 135,
    top: 80,
    color:"white"
},
image_coin_card:{
    position: "absolute",
    top: 55,
    left: 295,
    height: 18,
    width: 18,
},
how_piece:{
    position: "absolute",
    fontWeight: "bold",
    top: 55,
    left: 275,
    color: "white"
},
view_how_piece:{
    position: "absolute",
    width: 37,
    height: 37,
    top: -15,
    left: 290,
    backgroundColor: "#0D6666",
    borderRadius: 100,
},
who_win_piece:{
    position: "absolute",
    color: "white",
    fontSize: 10,
    top: 12,
    left: 7,
    fontWeight: "bold"
},
image_how_coin:{
    position: "absolute",
    height: 9,
    width: 9,
    top: 14,
    left: 22,
},
image_return:{
    top: "18%",
    left: "18%",
    height: 18,
    width: 18
},
image_house:{
    position: "absolute",
    top: 40,
    left: 5,
    height: 90,
    width: 160,
},
view_row:{
    marginTop: "7%",
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent: "space-between",
},
view_go:{
    width: 334,
    height: 56,
    marginTop: "7%",
    marginBottom: "7%",
},
linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 334,
    height: 154,
    borderRadius: 15,
},
button_validate: {
    top: "90%",
    position: "absolute",
    width: 335,
    height: 56,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#F5C106",
},
text_infos: {
    marginTop:"40%",
    marginBottom: "5%",
    marginLeft: "-57%",
    fontWeight: "bold",
    color:"white",
    fontSize: 16
},
text_nom: {
    marginTop:"2%",
    marginLeft: "-73%",
    fontWeight:"bold",
    color:"white",
    fontSize: 14
},
text_prenom: {
    marginTop:"2%",
    marginLeft: "-68%",
    fontWeight:"bold",
    color:"white",
    fontSize: 14
},
text_nb_phone: {
    marginTop:"2%",
    marginLeft: "-63%",
    fontWeight:"bold",
    color:"white",
    fontSize: 14
},
view_value: {
    width: 334,
    height: 56,
    backgroundColor: "#1C5151",
    borderRadius:11,
    marginTop:"1%",
},
value_text_input: {
    marginTop: "5.5%",
    marginLeft: "3%",
    color:"white"
}
});

export default styles;