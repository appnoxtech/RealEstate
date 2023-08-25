import { Component } from 'react';
import StarRating from 'react-native-star-rating';

class CustomStarExample extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarRatingPress(rating : number) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        emptyStar={'star-outline'}
        fullStar={'star'}
        halfStar={'star-half-outline'}
        iconSet={'Ionicons'}
        maxStars={7}
        rating={3}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'red'}
      />
    );
  }
}

export default CustomStarExample