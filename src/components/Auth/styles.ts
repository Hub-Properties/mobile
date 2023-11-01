import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
export default (theme: any) =>
  StyleSheet.create({
    main: {
      alignItems: 'center',
      backgroundColor: colors[theme].background,
      color: colors[theme].text,
      flex: 1,
      justifyContent: 'center',
      
    },
    headerTxt: {
      textShadowRadius: 5,
      textAlign: 'center',
      width: 250,
      fontSize: 30,
      letterSpacing: 2,
      flexWrap: 'nowrap',
      fontWeight: 'bold',
      color: colors[theme].text,
      bottom: 40,
    },
    btn: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
      width: 200,
      backgroundColor: colors[theme].blue,
      borderRadius: 10,
      top: 10,
    },
    txtbtn: {
      color: colors[theme].btnText,
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 10,
    },
    continueTxt: {
      margin: 10,
      color: colors[theme].text,
    },
    ctnLineRight: {
      width: 100,
      height: 2,
      backgroundColor: colors[theme].text,
      top: 20,
    },
    ctnLineleft: {
      width: 100,
      height: 2,
      backgroundColor: colors[theme].text,
      top: 20,
    },
    icons: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 5,
      margin: 20,
    },
    input: {
      height: 40,
      width: 300,
      backgroundColor: colors[theme].inputColor,
      borderRadius: 15,
      marginBottom: 25,
      color: colors[theme].text,
      
     
    },
    registerTxt: {
      flexDirection: 'row',
      marginLeft: 20,
    },
    RegisterTxt: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    register: {
      color: colors[theme].text,
    },
    lastTxt: {
      color: colors[theme].text,
    },
    forgotTxt: {},
  });
