import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// const AlbumDetail = (props) => {
  const AlbumDetail = (props) => {
    console.log(props.url);

    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
       } = styles; // destructure styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{ uri: props.url }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{props.title}</Text>
          <Text style={headerTextStyle}>{props.copyright}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: props.url}} style={imageStyle} />
      </CardSection>
      <CardSection>
       <Text style={headerTextStyle}>{props.description}</Text>
        <Button>
          Download
        </Button>
      </CardSection>
    </Card>
  )
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  thumbnailStyle: {
    height: 50,
    width:50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
