import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        style={styles.homeimg}
        source={{
          uri: 'https://a0.muscache.com/im/pictures/3212d35c-11ef-4c7d-858b-49b944a064fa.jpg?aki_policy=large',
        }}>
        <View
          style={styles.txtBtnView}
        
        >
          <Text style={styles.hometxt}>
            Find your next dream rentals space today
          </Text>
          <TouchableOpacity style={styles.homeBtn}>
            <Text style ={styles.homeBtntxt}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
