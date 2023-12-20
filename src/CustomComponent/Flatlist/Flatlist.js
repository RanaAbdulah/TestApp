import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Title from '../../CustomComponent/Title';
import {flatlistStyles} from './Styles';

const Flatlist = () => {
  data = [
    {
      id: 1,
      arbi: 'سُوْرَ النَّاس',
      eng: 'Al-Fatihah',
      divide: '1:3',
      time: '12 hrs ago',
    },
    {
      id: 2,
      arbi: 'سُوْرَ المُلْك',
      eng: 'Al-Mulk',
      divide: '67:27',
      time: '12 hrs ago',
    },
    {
      id: 3,
      arbi: 'سُوْرَ الإِسْرَاء',
      eng: 'Al-Israa',
      divide: '17:81',
      time: '12 hrs ago',
    },
    {
      id: 4,
      arbi: 'سُوْرَ النَّاس',
      eng: 'Al-Fatihah',
      divide: '1:3',
      time: '12 hrs ago',
    },
    {
      id: 5,
      arbi: 'سُوْرَ المُلْك',
      eng: 'Al-Mulk',
      divide: '67:27',
      time: '12 hrs ago',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={flatlistStyles.container}>
        <View style={flatlistStyles.infoContainer}>
          <Title lable={item.arbi} col={'#5E2A2B'} fsize={18} fweight={'500'} />
          <Title lable={item.eng} col={'black'} fsize={16} fweight={'500'} />
        </View>
        <View style={flatlistStyles.textContainer}>
          <Title
            lable={item.divide}
            col={'#5E2A2B'}
            fsize={16}
            fweight={'500'}
          />
          <View style={flatlistStyles.iconContainer}>
            <Ionicons name={'time-outline'} size={20} color={'black'} />
            <Title lable={'12 Hours Ago'} col={'#828389'} fsize={14} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      data={data}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default memo(Flatlist);
