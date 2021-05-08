import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import "./styles/styles.css";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: "",
      songs: [],
    };
  }

  handleChange = (event) => {
    let input = event.target;
    let name = event.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let songs = [...this.state.songs];

    songs.push({
      title: this.state.title,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating,
    });

    this.setState({
      songs,
      title: "",
      artist: "",
      genre: "",
      rating: "",
    });
  };

  render() {
    return (
      <main className="main">
        <header className="header">Mijn speellijst</header>
        <div id="main">
          <SongForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            playlistTitle={this.state.title}
            playlistArtist={this.state.artist}
            playlistGenre={this.state.genre}
            playlistRating={this.state.rating}
          />

          <SongList songs={this.state.songs} />
        </div>
      </main>
    );
  }
}

export default SongOverview;
