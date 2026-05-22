import React from "react";
import MusicInput from "./MusicInput";
import MusicList from "./MusicList";
import { getData } from "../utils/data";

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      music: getData(),
      history: [],
    };

    this.onDeleteHandler =
      this.onDeleteHandler.bind(this);

    this.onAddMusicHandler =
      this.onAddMusicHandler.bind(this);
  }

  onDeleteHandler(id) {
    const music = this.state.music.filter(
      (music) => music.id !== id
    );

    this.setState({ music });
  }

  onAddMusicHandler({
    title,
    artist,
    imageUrl,
  }) {

    const newMusic = {
      id: +new Date(),
      title,
      artist,
      imageUrl,
    };

    this.setState((prevState) => {
      return {
        music: [
          ...prevState.music,
          newMusic,
        ],

        history: [
          `Menambahkan lagu "${title}" dari ${artist}`,
          ...prevState.history,
        ],
      };
    });
  }

  render() {
    return (
      <div className="music">

        <div className="music-container">
          <div className="left-panel">
            <h2>Tambah Music</h2>
            <MusicInput
              addMusic={this.onAddMusicHandler}
            />
          </div>
          <div className="right-panel">
            <h2>Histori</h2>
            <div className="history-list">
              {this.state.history.length === 0 ? (
                <p>
                  Belum ada histori
                </p>
              ) : (
                this.state.history.map(
                  (item, index) => (
                    <p key={index}>
                      {item}
                    </p>
                  )
                )
              )}

            </div>
          </div>
        </div>

        <h1>Daftar Music</h1>
        <MusicList
          music={this.state.music}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default Music;
