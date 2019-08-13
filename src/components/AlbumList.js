/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(Response => this.setState({ albums: Response.data }));
    //debugger;
  }

  // renderAlbums() {
  //   return this.state.albums.map(album => (
  //     <Text key={album.title}>{album.title}</Text>
  //   ));
  // }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail album={album} key={album.title} />
    ));
  }

  render() {
    // console.log(this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
