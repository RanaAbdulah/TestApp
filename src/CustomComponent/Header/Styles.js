import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  container: {
    height: Theme.hp('7%'),
    flexDirection: 'row',
    width: Theme.wp('100%'),
    backgroundColor: '#5E2A2B',
  },
  iconContainer: {
    width: Theme.wp('17%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: Theme.wp('63%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleContainer: {
    width: Theme.wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
