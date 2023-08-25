import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
interface props {
  imgUrl?: string;
  name?: string;
  rating?: number;
  description?: string;
  time?: string;
}

const ReviewCard: FC<props> = ({imgUrl, name, rating, description, time}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: `${imgUrl}`}} style={styles.image} />
          <Text>{name}</Text>
          <AirbnbRating count={5} size={10} reviews={[]} />
        </View>
        <Text>
          geOfProperty": null, "amenities": "", "area": "62727", "bhk": "2BHK",
          "city": "Delhi", "createdAt": "2023-08-19T10:02:18.000Z", "deletedAt":
          "2023-08-19T10:02:18.000Z",
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 30,
    height: 20,
  },
});
