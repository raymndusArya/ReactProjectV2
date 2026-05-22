import React from "react";

class MusicInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: "",
      title: "",
      imageUrl: "",
    };

    this.onArtistChangeEventHandler       = this.onArtistChangeEventHandler.bind(this);
    this.onTitleChangeEventHandler        = this.onTitleChangeEventHandler.bind(this);
    this.onImageUrlChangeEventHandler     = this.onImageUrlChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler       = this.onSubmitChangeEventHandler.bind(this);
    
  }

  onArtistChangeEventHandler(event) {
    this.setState(() => {
      return {
        artist: event.target.value,
      };
    });
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onImageUrlChangeEventHandler(event) {
    this.setState(() => {
      return {
        imageUrl: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();

    const { artist, title, imageUrl } = this.state;

    if (!artist.trim() || !title.trim() || !imageUrl.trim()) {
      alert("Semua input wajib diisi");
      return;
    }

    this.props.addMusic({
      artist: artist.trim(),
      title: title.trim(),
      imageUrl: imageUrl.trim(),
    });

    this.setState({
      artist: "",
      title: "",
      imageUrl: "",
    });
  }

  render() {
    return (
      <form className="music-input" onSubmit={this.onSubmitChangeEventHandler}>
        <input
          type="text"
          placeholder="Artist"
          value={this.state.artist}
          onChange={this.onArtistChangeEventHandler}
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <input
          type="text"
          placeholder="Link-URL Album Cover"
          value={this.state.imageUrl}
          onChange={this.onImageUrlChangeEventHandler}
          required
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default MusicInput;