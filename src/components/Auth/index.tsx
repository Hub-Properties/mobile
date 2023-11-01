import React, {FC, useState} from 'react';
import {
  View,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import useStyles from './styles';
import colors from '../../common/colors';
import Icon from '../../common/icon';
import {Api} from '../../helper';

type Pageprops = 'Logins' | 'Register';
type StateProps = {
  currentPage: Pageprops;
  inputs: Inputprops[];
  isloading: boolean;
};


type Inputprops = {
  label: string;
  value: string | number;
  field: string;
  error: null | string;
  icon?: string | null;
};

const Auth: FC = () => {
  const styles = useStyles(useColorScheme());

  const [state, setState] = useState<StateProps>({
    currentPage: 'Register',
    isloading: false,
    inputs: [
      'Full Name',
      'Email',
      'Phone Number',
      'Password',
      'Confirm Password',
    ].map(q => ({
      label: q,
      field: q.replace(' ', ''),
      value: '',
      error: '',
      icon: '',
    })),
  });

  const {currentPage, inputs, isloading} = state;
  const selectedInputs =
    currentPage === 'Register'
    ?['FullName', 'Email', 'PhoneNumber', 'Password', 'ConfirmPassword']:
       ['Email', 'Password']
  const renderInputs = inputs.filter(x => selectedInputs.includes(x.field));

  const inputChange = (field: string, obj: any) => {
    let index = state.inputs.findIndex(q => q.field === field);
    let Inputs = [...state.inputs];
    Inputs[index] = {...Inputs[index], ...obj};
    // console.log(Inputs)
    setState({
      ...state,
      inputs: Inputs,
    });
  };
  const SubmitData = () => {
    setState({
      ...state,
      isloading: true,
    });
  };
  let data = {
    fullname: inputs[0].value,
    email: inputs[1].value,
    phoneNumber: inputs[2].value,
    password: inputs[3].value,
    confirmPassword: inputs[4].value,
    action: currentPage,
    controller: 'Users',
  };
  const submitdata = () => {
    // console.log({data});

    Api(data)
      .then((resp:any) => {
        if(resp.error)
        inputChange(resp.error.field, {error: resp.error.message})
      })
      .catch(error => {
        console.log({error});
      });
  };

  return (
    <View style={styles.main}>
      {currentPage === 'Register' ? (
        <Text style={styles.headerTxt}>Welcome Back</Text>
      ) : (
        <Text style={styles.headerTxt}>Welcome to your Next Home</Text>
      )}

      <View>
        {renderInputs.map(({field, label, value, error, icon}, i) => (
          <View key={i}>
            <TextInput
              style={styles.input}
              onFocus={() => {
                inputChange(field, {error: null});
              }}
              onChangeText={text => inputChange(field, {value: text})}
              placeholder={` ${label}`}
              value={value.toString()}
              placeholderTextColor="#030403"
              
            
            />
            {field === 'Email' ? (
              <View style={{position: 'absolute', right: 10, paddingTop: 5}}>
                <Icon size={25} name="drafts" material />
              </View>
            ) : field === 'FullName' ? (
              <View style={{position: 'absolute', right: 10, paddingTop: 5}}>
                <Icon size={25} name="edit" material />
              </View>
            ) : field === 'PhoneNumber' ? (
              <View style={{position: 'absolute', right: 10, paddingTop: 5}}>
                <Icon size={25} name="call" material />
              </View>
            ) : field === 'Password' ? (
              <View style={{position: 'absolute', right: 10, paddingTop: 5}}>
                <Icon size={25} name="lock" material />
              </View>
            ) : null}

            {error ? (
              <Text
                style={{
                  color: 'red',
                }}>
                {error}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
      {currentPage === 'Logins' ? (
        <View style={styles.forgotTxt}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'blue',
                right: 8,
                textDecorationLine: 'underline',
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        
        </View>
      ) : (
        <View style={styles.registerTxt}>
          <Text style={styles.register}>Already registered,</Text>

          <Text
            onPress={() => {
              setState({
                ...state,
                currentPage: 'Logins',
              });
            }}
            style={{
              color: 'blue',
            }}>
            Login
          </Text>
        </View>
      )}

      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          paddingTop: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={submitdata} style={styles.btn}>
          <Text style={styles.txtbtn}>{currentPage}</Text>
          {isloading ? <ActivityIndicator color={'#fff'} /> : null}
        </TouchableOpacity>

        <View>
          <View style={{flexDirection: 'row', top: 20}}>
            <View style={styles.ctnLineleft} />
            <Text style={styles.continueTxt}>Or continue with</Text>
            <View style={styles.ctnLineRight} />
          </View>

          <View style={styles.icons}>
            <Image
              style={{height: 30, width: 30, borderRadius: 15, right: 5}}
              source={{
                uri: 'http://pngimg.com/uploads/google/google_PNG19635.png',
              }}
            />
            <Image
              style={{height: 30, width: 30, borderRadius: 15, left: 5}}
              source={{
                uri: 'https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png',
              }}
            />
          </View>
          {currentPage === 'Logins' ? (
            <View style={styles.RegisterTxt}>
              <Text style={styles.lastTxt}>Not a Member,</Text>
              <Text
                onPress={() => {
                  setState({
                    ...state,
                    currentPage: 'Register',
                  });
                }}
                style={{textDecorationLine: 'underline', color: 'blue'}}>
                Register
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Auth;
