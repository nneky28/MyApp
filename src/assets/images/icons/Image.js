/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const GenImage = (props) => {
  return (
    <Image
      source={{ uri: props.ImageUri }}
      style={props.imageStyle || styles.GenImageStyle}
    />
  );
};

export default GenImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(40),
    //paddingVertical: height(1),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: width(5)
  },
  image: {
    height: height(20),
    width: width(20)
  }



});
