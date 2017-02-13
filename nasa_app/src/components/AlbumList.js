import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6MJvYr9bOxzfzLoXAkDX3fExYsopZ0L6kvSBUwL9')
      .then(response => this.setState({ albums: response.data }));
        // .then(response => console.log(response.data))
  }

  renderAlbums() {
    return <AlbumDetail
     title={this.state.albums.title}
     copyright={this.state.albums.copyright}
     hdurl={this.state.albums.hdurl}
     url={this.state.albums.url}
     description={this.state.albums.explanation}
     headerText='NASA PICTURES'
     />
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
