import React from 'react';
import { View } from 'react-native';

const Card  = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1, // top border
    borderRadius: 2, // round off the corners
    borderColor: '#ddd',
    borderBottomWidth: 0, // hide the bottom border entirely
    shadowColor: '#000', // shadow is for a little bit of pop, a little bit of elevation
    shadowOffset: { width: 0, height: 2 }, // side which shadow should appear on
    shadowOpacity: 0.1, // makes item sort of see-thru
    shadowRadius: 2, // just like the border radius. it rounds off the corners
    elevation: 1,
    marginLeft: 5, // margin settings put some spacing between components
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
