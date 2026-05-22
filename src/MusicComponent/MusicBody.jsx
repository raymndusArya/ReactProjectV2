import React from "react";

function MusicBody({ title, artist }) {
    return (
        <div className="music-body">
            <h3 className="music-title">
                {title}
            </h3>

            <p className="music-author">
                {artist}
            </p>
        </div>
    );
}

export default MusicBody;