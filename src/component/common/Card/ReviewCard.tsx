import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import StarRating from 'react-native-star-rating';

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
        <Image source={{uri: `${imgUrl}`}} style={styles.image} />
        <View>
          <Text>{name}</Text>
          {/* <StarRating
            disabled={false}
            emptyStar={'star-outline'}
            fullStar={'star'}
            halfStar={'star-half-outline'}
            iconSet={'ionicons'}
            maxStars={7}
            rating={3}
            selectedStar={rating => {}}
            fullStarColor={'red'}
          /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {},
  image: {},
});
