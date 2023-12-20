import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';
import Theme from '../../Utils/Theme';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from 'react-native';
import Title from '../../CustomComponent/Title';
import Flatlist from '../../CustomComponent/Flatlist/Flatlist';
import Header from '../../CustomComponent/Header/Header';
import InputField from '../../CustomComponent/InputField/InputField';
import styles from './Styles';

const Home = () => {
  first = [
    {
      id: 1,
      text: 'Read',
      imageSource: require('../../Asset/Read.png'),
    },
    {
      id: 2,
      text: 'Notes',
      imageSource: require('../../Asset/Notes.png'),
    },
    {
      id: 3,
      text: 'Bookmark',
      imageSource: require('../../Asset/BookMark.png'),
    },
  ];

  second = [
    {
      id: 1,
      width: Theme.wp('40%'),
      ayah: 'Ayah',
      number: '3,659/6,236',
      unfilledColor: '#5CB0E0',
    },
    {
      id: 2,
      width: Theme.wp('30%'),
      ayah: 'Suras',
      number: '90/114',
      unfilledColor: '#5F54E8',
    },
    {
      id: 3,
      width: Theme.wp('20%'),
      ayah: 'Juz',
      number: '20/30',
      unfilledColor: '#78C46C',
    },
  ];
  return (
    <View style={styles.homeMain}>
      <StatusBar backgroundColor={'#5E2A2B'} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.map2View2}>
          <View style={styles.map2View1}>
            <View style={styles.map2View}>
              {first.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.image4Touch}
                  onPress={() => {}}>
                  <Image
                    source={item.imageSource}
                    style={styles.image4}
                    resizeMode="contain"
                  />
                  <Title lable={item.text} col={Theme.black} fsize={18} />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.inputView}>
              <InputField
                height={Theme.hp('7%')}
                width={Theme.wp('90%')}
                placeholder={'Search word, page, ayah, themes'}
              />
              <Title
                lable={'Asalamou Alaykoum Ahmad 👋'}
                fsize={16}
                col={'white'}
                fweight={'bold'}
              />
            </View>
          </View>
          <View style={styles.readViewMain}>
            <View style={styles.ReadView}>
              <Title
                lable={'Last read'}
                fsize={16}
                fweight={'bold'}
                col={'black'}
              />
            </View>
            <Flatlist />
          </View>
          <View style={styles.gap} />
          <View
            style={{
              height: Theme.hp('30%'),
              width: Theme.wp('90%'),
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 15,
            }}>
            <Title
              lable={'Memorization'}
              fsize={16}
              fweight={'bold'}
              col={'black'}
            />
            <View style={styles.animatedProgress}>
              <AnimatedCircularProgress
                size={100}
                width={10}
                fill={30}
                tintColor="#F3F3F3"
                backgroundColor="#E5B300">
                {fill => (
                  <>
                    <Title
                      lable={'75%'}
                      fsize={18}
                      fweight={'bold'}
                      col={'black'}
                    />
                    <Title
                      lable={'complete'}
                      fsize={14}
                      fweight={'500'}
                      col={'black'}
                    />
                  </>
                )}
              </AnimatedCircularProgress>

              <View style={styles.mapView}>
                {second.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <View style={styles.progressMain}>
                      <Title
                        lable={item.ayah}
                        fsize={16}
                        fweight={'bold'}
                        col={'black'}
                      />
                      <Title
                        lable={item.number}
                        fsize={16}
                        fweight={'500'}
                        col={'black'}
                      />
                    </View>
                    <View style={styles.progressView}>
                      <Progress.Bar
                        key={item.id}
                        height={Theme.hp('1.3%')}
                        width={item.width}
                        borderWidth={0}
                        unfilledColor={item.unfilledColor}
                      />
                    </View>
                  </React.Fragment>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.gap} />
          <View style={styles.wordMain}>
            <View>
              <View style={styles.worldView}>
                <Title
                  lable={'Word of the Day'}
                  fsize={16}
                  fweight={'bold'}
                  col={'black'}
                />
              </View>
              <View style={styles.harirView}>
                <Title
                  lable={'حرير  — Harir'}
                  fsize={16}
                  fweight={'bold'}
                  col={'black'}
                />
              </View>
              <View style={styles.silkView}>
                <Title
                  lable={'Silk'}
                  fsize={16}
                  fweight={'500'}
                  col={'black'}
                />
                <Title
                  lable={'Total usage: 3'}
                  fsize={14}
                  fweight={'500'}
                  col={'black'}
                />
              </View>
            </View>
            <Image
              source={require('../../Asset/Cover.png')}
              style={styles.image3}
            />
          </View>
          <View style={styles.gap} />
          <View style={styles.image2View}>
            <Image
              source={require('../../Asset/Quran1.png')}
              style={styles.image2}
              resizeMode="contain"
            />
            <View style={styles.exploreView}>
              <Title
                lable={'Explore our books'}
                fsize={16}
                fweight={'bold'}
                col={'black'}
              />
              <Title
                lable={
                  'Explore a variety of our books to fit your particular needs...'
                }
                fsize={14}
                fweight={'400'}
                col={'black'}
              />
              <Title
                lable={'Explore Books'}
                fsize={14}
                fweight={'bold'}
                col={'#5E2A2B'}
              />
            </View>
          </View>
          <View style={styles.gap} />
        </View>
      </ScrollView>
      <View style={styles.imageViewAb}>
        <View style={styles.imageView}>
          <Image
            source={require('../../Asset/Person1.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={{width: Theme.wp('50%')}}>
            <Title
              lable={'Surah Al-Fatiha'}
              fsize={14}
              fweight={'bold'}
              col={'#5E2A2B'}
            />
            <Title
              lable={'Mishary Al-Afasy'}
              fsize={14}
              fweight={'400'}
              col={'#5E2A2B'}
            />
          </View>
          <TouchableOpacity>
            <Feather name={'pause-circle'} size={35} color={'#4F525A'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={'skip-next'}
              size={35}
              color={'#4F525A'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
