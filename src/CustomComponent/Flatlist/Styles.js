import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

export const flatlistStyles = StyleSheet.create({
  container: {
    height: Theme.hp('18.7%'),
    width: Theme.wp('35%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#8D8D8D',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: Theme.wp('2%'),
    padding: 3,
  },
  infoContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: Theme.hp('10%'),
    width: Theme.wp('33%'),
    backgroundColor: '#EFE8C8',
    alignItems: 'center',
    paddingTop: Theme.hp('1.5%'),
    gap: Theme.hp('1%'),
  },
  textContainer: {
    height: Theme.hp('8%'),
    width: Theme.wp('33%'),
    alignItems: 'center',
    paddingTop: Theme.hp('0.7%'),
  },
  iconContainer: {
    flexDirection: 'row',
    width: Theme.wp('30%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
