import React, {useState, memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Toggle from 'react-native-toggle-element';
import styles from './Styles';
import Title from '../Title';

const Header = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons name={'person'} size={28} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Title
          lable={'The Clear Quran'}
          fsize={20}
          fweight={'bold'}
          col={'white'}
        />
      </View>
      <View style={styles.toggleContainer}>
        <Toggle
          value={toggleValue}
          thumbInActiveComponent={
            <Feather name="sun" size={18} color="#ED9C00" />
          }
          thumbActiveComponent={
            <Feather name="sun" size={18} color="#ED9C00" />
          }
          onPress={newState => setToggleValue(newState)}
          thumbButton={{
            width: 25,
            height: 25,
            radius: 100,
          }}
          thumbStyle={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          trackBar={{
            width: 50,
            height: 20,
            radius: 25,
          }}
          trackBarStyle={{
            backgroundColor: '#FFE144',
          }}
        />
      </View>
    </View>
  );
};

export default memo(Header);
