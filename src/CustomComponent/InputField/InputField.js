import {View} from 'react-native';
import {Input} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import React, {memo} from 'react';
import styles from './Styles';

const InputField = ({
  label,
  onChangeText,
  contentType,
  value,
  placeholder,
  width,
  height,
  numberOfLines,
  keyboardType,
  multiline,
  textAlignVertical,
}) => {
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={onChangeText}
        label={label}
        multiline={multiline}
        textContentType={contentType}
        placeholderTextColor={'black'}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        textAlignVertical={textAlignVertical}
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle}
        containerStyle={{
          width: '100%',
          alignSelf: 'center',
        }}
        inputContainerStyle={[
          styles.inputContainer,
          {height: height, width: width},
        ]}
        leftIcon={<Feather name={'search'} size={20} color={'#4F525A'} />}
      />
    </View>
  );
};

export default memo(InputField);
