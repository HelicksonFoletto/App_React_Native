import {
    StyleSheet,
} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
  containerLogin: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingTop: Constants.statusBarHeight ,
    backgroundColor: '#259F71'
  },
  login__msg:(text='none')=>({
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
    marginTop: 10,
    marginBottom: 15,
    display: text,
  }),
  ButtonEsqueci:{
    fontSize: 17,
    color:'black',
    paddingHorizontal: '10%',
    marginBottom: '5%',
    left: '20%'
  },
  buttonCadastro:{
    fontSize: 15,
    color:'black',
    paddingHorizontal: '10%',
    marginBottom: 50,
    left: '15%',
    top: '90%',
    //backgroundColor: 'black'
  },
  logo_marca_home:{
    paddingTop: 30,
    alignItems: 'center',
    width: '100%',
    height: 'auto'
  },
  login_form:{
    width:"100%",
    height: '75%',
    top: '10%'
  },
  login_input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: '5%',
    marginBottom: '3%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#DCD5D2',
  },  
  login_button:{
    borderWidth: 2,
    borderColor: '#212121',
    padding: '5%',
    backgroundColor: "black",
    alignSelf: 'center',
    borderRadius: 20,
    paddingBottom: '5%',
    top: '5%'

  },
  login_buttonText:{
    fontWeight:'bold',
    fontSize: 20,
    color: '#fff'  
  },
  // Cadastro
  ContainerCadastro:{
    flex: 1,
    paddingHorizontal: '2%',
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#DCD5D2'
  },
  TextTitle:{
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    padding: '3%'
  },
  formCadastro:{
    width:"100%",
    height: '75%',
    padding: '3%'
  },
  input:{
    backgroundColor: '#DCD5D2',
    fontSize: 15,
    borderRadius: 50,
    padding: '1%',
    marginBottom: '5%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#259F71',
  },
  label:{
    fontSize: 15,
  },

  cadastroButton:{
    borderWidth: 2,
    borderColor: '#C4C4C4',
    padding: '5%',
    backgroundColor: "#116530",
    alignSelf: 'center',
    borderRadius: 20,
    paddingBottom: '5%'
  },
  cadastro_textButton:{
    color: '#fff'
  },
   //menu
  icon_menu:{
   width: '50%',
   height: '70%',
   left: '20%',
   top: '28%',
   flex: 1,
   flexDirection: 'row',
  },
  itemMenuHome:{
    right: '90%',
  },
  itemMenuList:{
    right: '80%',
  },
  itemMenuMais:{
    top: '-45%',
    alignSelf: 'center',
    right: '65%',
  },
  itemMenuDica:{
    right: '50%',
    top: "-5%",
  },
  itemMenuConfig:{
    right: '40%',
    top: "-3%",
  },
  //home
  cabecalho:{
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: '5%',
    marginTop: '20%'
  },
   text:{
    fontSize: 35,
    color: 'black',
    fontWeight: "bold",
    left: '5%'
  },
  quadrados:{
    flex: 1,
    height: '60%',
    width: '50%',
    alignContent: 'space-between',
    flexDirection: 'row'
  },
  quadrado1:{
    backgroundColor: "#38CFD0",
    height: '80%',
    borderRadius: 50,
    alignItems: 'center',
    padding: '5%'
  },
  quadrado2:{
    backgroundColor: "#43F37E",
    height: '80%',
    borderRadius: 50,
    alignItems: 'center',
    padding: '5%'
  },
  title:{
    color: 'white',
    fontSize: 20
  },
  description:{
    fontSize: 12,
    color: "white",
    padding: '3%'
  },
  hist:{
    flex: 1,
    height: '50%',
    width: '100%',
    backgroundColor: '#C4C4C4',
    borderRadius: 30
  },
  histText:{
    fontSize: 16,
    color: 'black',
    width: '80%',
    height: '40%',
    left: '5%',
    top: '3%',
    flex: 1,
    alignItems: 'center',
    fontWeight: "bold"
   
  },
  descriptionHist:{
    flex: 1,
    fontSize: 13,
    color: 'black',
    left: '5%',
    alignItems: 'center',
  },
 

  //List
  cabecalhoList:{
    flex: 1,
    width: '60%',
    left: '10%',
    top: '5%',
  },
  histSintomas:{
    flex:1,
    backgroundColor: "#C4C4C4",
    height: '100%',
    paddingBottom: '70%',
    borderRadius: 50,
  },
  histTexSintomas:{
    fontSize: 20,
    color: 'black',
    width: '100%',
    height: '1000%',
    left: '10%',
    top: '30%',
    flex: 1,
    alignItems: 'center',
    fontWeight: "bold",
  },
  
  descriptionHistSintomas:{
    flex: 1,
    fontSize: 15,
    color: 'black',
    left: '15%',
    top: '30%',
    alignItems: 'center',
  },  

  //Dicas
  buttonDicas:{
    flex: 1,
    backgroundColor: '#c4c4c4',
    borderRadius: 30,
    width: '100%',
    paddingBottom: '70%',
  },
  DicasButton1:{
    flex: 1,
    top: '20%',
  },

  DicasButton2:{
    flex: 1,
    top: '40%',
  },
  DicasButton3:{
    flex: 1,
    top: '60%',
  },
  DicasButton4:{
    flex: 1,
    top: '80%',
  },
  
  TitleDicas:{
    fontSize: 20,
    left: '5%',
    color: 'black',
    top: '50%',
    fontWeight: "bold",
  },
  descriptionDicas:{
    width: '90%',
    color: 'black',
    fontSize: 15,
    top: '40%',
    left: '5%',    
  },

  //config
  cabecalhoConfig:{
    flex: 1,
    width: '65%',
    height: '15%',
    top: '5%',
  },
  inf:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: '5%',
    top: '15%'
  },
  nameUser:{
    fontSize: 25,
    fontWeight: 'bold',
    left: '50%',
  },
  emailUser:{
    fontSize: 15,
    right: '350%',
    top: '5%'
  },
  buttonSair:{
    right: '120%'
  },
  notificacao:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '25%'
  },
  titleNotificacao:{
    fontSize: 25,
    fontWeight: 'bold',
    left: '15%',
  },
  descriptionNotificacao:{
    fontSize: 15,
    right: '230%',
    top: '7%'
  },
  buttonNotificacao:{
    right: '95%'
  },
  modoEscuro:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '35%'
  },
  descriptionModo:{
    fontSize: 15,
    right: '300%',
    top: '8%',
    width: '60%'
  },
  buttonModoEscuro:{
    right: '150%'
  },
  SobreApp:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '50%'
  },
  buttonApp:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '40%',
  },
  descriptionApp:{
    fontSize: 15,
    right: '260%',
    top: '8%',
  },
  //Questionario
  ContainerList:{
    flex: 1,
    paddingHorizontal: '2%',
    backgroundColor: '#007D46',
    borderRadius: 50,
  },
  TextTitleList:{
    color: '#fff',
    fontSize: 40,
    top: '2%'
  },
  descriptionList:{
    color: "#fff",
    fontSize: 20,
    top:'2%'
  },
  form_quest:{
    width:"100%",
    height: '70%',
    left: '2%',
    top: '5%',
  },
  descriptionSintomas:{
    left: '10%',
    color:'white',
    fontSize: 20,
    top: '-50%'
  },
  SaveButton:{
    borderWidth: 2,
    borderColor: '#C4C4C4',
    padding: '5%',
    backgroundColor: "#116530",
    alignSelf: 'center',
    borderRadius: 20,
    paddingBottom: '5%',
    right: '5%',
    top: '-3%'
  },
  icon_menu_dicas:{
    flexDirection: 'row'
  },
  itemMenuPhone:{
    backgroundColor: '#007D46',
    borderRadius: 30,
    width: '30%',
    height: '40%',
    top: '20%',
    left: '150%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemMenuMaps:{
    backgroundColor: '#007D46',
    borderRadius: 30,
    width: '30%',
    height: '40%',
    left: '10%',
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemMenuQuest:{
    backgroundColor: '#007D46',
    borderRadius: 30,
    width: '30%',
    height: '40%',
    top: '20%',
    right: '130%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  //Lista telefonica
  cabecalhoListPhone:{
    flex: 1,
    width: '60%',
    height: '35%',
    top: '8%',
    left: '5%'
  },
  descriptionFone:{
    fontSize: 20,
    color: 'black',
    left: '5%',
    top: '25%',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  descriptionFone1:{
    fontSize: 20,
    color: 'black',
    left: '5%',
    top: '35%',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  descriptionFone2:{
    fontSize: 20,
    color: 'black',
    left: '5%',
    top: '45%',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  descriptionFone3:{
    fontSize: 20,
    color: 'black',
    left: '5%',
    top: '55%',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  descriptionPhoneText1:{
    fontSize: 15,
    color: 'black',
    left: '5%',
    top: '28%',
    alignItems: 'center',
  },
  descriptionPhoneText2:{
    fontSize: 15,
    color: 'black',
    left: '5%',
    top: '36%',
    alignItems: 'center',
  },
  descriptionPhoneText3:{
    fontSize: 15,
    color: 'black',
    left: '5%',
    top: '48%',
    alignItems: 'center',
  },
  descriptionPhoneText4:{
    fontSize: 15,
    color: 'black',
    left: '5%',
    top: '58%',
    alignItems: 'center',
  },
  //Questionario
  title_pergunta:{
    fontSize: 20,
    color: "#fff"
  },
  QuestCheck1:{
    left: '15%',
    top: '-5%'
  },
  QuestCheck2:{
    left: '50%',
    top: '5%',
    color: 'red'
  },

  //Dicas Combate
  TextCombate:{
    top: '15%',
    margin: '5%',
    fontSize: 20
  },

  //Teste

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});