import {Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {dark} from '../../../../assets/Styles/GlobalTheme';
interface props {
  imgUrl?: string;
  name?: string;
  rating?: number;
  description?: string;
  time?: string;
  style?: StyleProp<ViewStyle>,
}

const ReviewCard: FC<props> = ({imgUrl, name, rating, description, time, style}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(-2),
        }}>
        {name === 'View all review' ? null : (
          <Image source={{uri: `${imgUrl}`}} style={styles.image} />
        )}

        {name === 'View all review' ? (
          <Text style={{color: dark, textAlign: 'center'}}>
            {name}
          </Text>
        ) : (
          <Text style={{flex: 1, color: dark, fontSize: responsiveFontSize(2.5)}}>{name}</Text>
        )}
        {name === 'View all review' ? null : (
          <AirbnbRating
            ratingContainerStyle={{paddingBottom: responsiveScreenHeight(4)}}
            count={5}
            size={10}
            reviews={[]}
            isDisabled={true}
          />
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F4F8',
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(2),
  },
  textAlign: {
    textAlign: 'center'
  },
  image: {
    width: responsiveWidth(16),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(8),
    marginRight: responsiveScreenWidth(2),
    marginTop: responsiveScreenHeight(4)
  },
  description: {
    paddingHorizontal: responsiveScreenWidth(16),
    marginTop: responsiveHeight(-2.5),
    marginLeft: responsiveScreenWidth(2.5)
  },
});
