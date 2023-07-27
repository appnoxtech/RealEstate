import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Swiper showsButtons={false} loop={true}>
        {images.map((image, index) => (
          <View key={index}>
            <Image
              source={image}
              style={{ flex: 1, resizeMode: 'cover' }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default ImageSlider;
