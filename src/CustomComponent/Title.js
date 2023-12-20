import {Text} from 'react-native';
import React from 'react';

const Title = ({
  fsize,
  fweight,
  col,
  key,
  lable,
  left,
  top,
  right,
  bottom,
  textAlign,
  paddingLeft,
  paddingTop,
  fontFamily,
  transform,
}) => {
  return (
    <Text
      key={key}
      style={{
        fontSize: fsize,
        fontWeight: fweight,
        color: col,
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        textAlign: textAlign,
        paddingLeft: paddingLeft,
        paddingTop: paddingTop,
        fontFamily: fontFamily,
        transform: transform,
      }}>
      {lable}
    </Text>
  );
};

export default Title;
