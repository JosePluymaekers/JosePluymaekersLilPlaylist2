import React from "react";

class SongList extends React.Component {
  render() {
    const songs = this.props.songs;

    return (
      <div id="songTable">
        <table style={{ width: "100%", marginTop: "5em" }}>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>

          {songs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.rating}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default SongList;
