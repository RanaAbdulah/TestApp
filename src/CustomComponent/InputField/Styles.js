import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    top: Theme.hp('1%'),
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#848484',
  },
  inputStyle: {
    color: '#9296A1',
    fontSize: 14,
  },
  inputContainer: {
    borderRadius: 10,
    paddingHorizontal: Theme.wp('7%'),
    backgroundColor: 'white',
  },
});

export default styles;
