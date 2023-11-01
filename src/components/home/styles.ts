import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainView:{
        flex: 1
    },
    homeimg:{
        flex:1,
        justifyContent:"flex-end",
        
    },
    hometxt:{
        color:"#fff",
        fontSize:25,
        fontWeight:"bold", 
        letterSpacing:2,
        marginBottom:10,
        padding:10
        

    },
    homeBtn:{
        height:30, 
        width:100, 
        backgroundColor:"#fff",
        alignItems:'center',
    justifyContent:"center",
    borderRadius:8

    },
    homeBtntxt:{
        color:"#000",
        marginBottom:10,
        fontSize:20,
        fontWeight:"grey"
    },
    txtBtnView:{
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
        marginBottom: 10,
    }

})