import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  image: {
    height: Theme.hp('7%'),
    width: Theme.wp('15%'),
  },
  imageView: {
    height: Theme.hp('10%'),
    width: Theme.wp('100%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageViewAb: {position: 'absolute', bottom: 0, height: Theme.hp('17%')},
  gap: {height: Theme.hp('2%')},
  exploreView: {
    height: Theme.hp('13%'),
    width: Theme.wp('50%'),
    justifyContent: 'space-between',
  },
  image2: {
    height: Theme.hp('14%'),
    width: Theme.wp('30%'),
  },
  image2View: {
    height: Theme.hp('17%'),
    width: Theme.wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image3: {
    height: Theme.hp('21%'),
    width: Theme.wp('40%'),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  silkView: {
    height: Theme.hp('9%'),
    width: Theme.wp('50%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    paddingLeft: Theme.wp('6%'),
  },
  harirView: {
    height: Theme.hp('6%'),
    width: Theme.wp('50%'),
    backgroundColor: '#EFE8C8',
    paddingLeft: Theme.wp('6%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  worldView: {
    height: Theme.hp('6%'),
    width: Theme.wp('50%'),

    paddingLeft: Theme.wp('6%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
  },

  wordMain: {
    height: Theme.hp('21%'),
    width: Theme.wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  progressView: {
    height: Theme.hp('1.3%'),
    width: Theme.wp('50%'),
    backgroundColor: '#ECECEC',
    borderRadius: 100,
  },
  progressMain: {
    width: Theme.wp('50%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mapView: {
    height: Theme.hp('20%'),
    width: Theme.wp('50%'),

    justifyContent: 'space-between',
  },
  animatedProgress: {
    flexDirection: 'row',
    height: Theme.hp('24%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ReadView: {
    height: Theme.hp('5%'),

    justifyContent: 'center',
  },
  readViewMain: {
    width: Theme.wp('90%'),

    height: Theme.hp('24%'),
    alignSelf: 'center',
  },
  inputView: {
    width: Theme.wp('90%'),
    justifyContent: 'space-around',
    height: Theme.hp('12%'),
  },
  image4: {
    width: Theme.wp('16%'),
    height: Theme.hp('6%'),
  },
  image4Touch: {
    height: Theme.hp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: Theme.wp('26%'),
    backgroundColor: Theme.white,
    borderRadius: 7,
  },
  map2View: {
    height: Theme.hp('15%'),
    width: Theme.wp('90%'),
    flexDirection: 'row',

    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  map2View1: {
    height: Theme.hp('31%'),
    width: Theme.wp('100%'),
    backgroundColor: '#5E2A2B',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  map2View2: {
    height: Theme.hp('148%'),
    width: Theme.wp('100%'),
    alignSelf: 'center',
  },
  homeMain: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
  },
});

export default styles;
