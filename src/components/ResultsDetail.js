import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: result.image_url  }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    //image는 꼭 가로, 세로 정해줘야 보인다. 그래서 스타일을 만들어줘야함.
    //그리고 borderradius는 해주는게 좋다. 그 모서리 둥글게 해주는 정도.
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom:5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;