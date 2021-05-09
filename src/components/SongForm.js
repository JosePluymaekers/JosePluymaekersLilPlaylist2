import React from "react";

class SongForm extends React.Component {
  render() {
    return (
      <div id="table">
        <form style={{ marginTop: "5em" }} onSubmit={this.props.handleSubmit}>
          <input
            style={{ marginRight: "20px" }}
            id="title"
            type="text"
            name="title"
            value={this.props.playlistTitle}
            placeholder="title"
            onChange={this.props.handleChange}
          />
          <input
            style={{ marginRight: "20px" }}
            id="artist"
            type="text"
            name="artist"
            value={this.props.playlistArtist}
            placeholder="Artist"
            onChange={this.props.handleChange}
          />
          <input
            style={{ marginRight: "20px" }}
            id="genre"
            type="text"
            name="genre"
            value={this.props.playlistGenre}
            placeholder="Genre"
            onChange={this.props.handleChange}
          />

          <select
            className="dropdown"
            id="rating"
            name="rating"
            value={this.props.playlistRating}
            onChange={this.props.handleChange}
          >
            <option selected>Rating..</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit" value="Submit">
            Add To Playlist
          </button>
        </form>
      </div>
    );
  }
}

export default SongForm;
