import React from "react";

function MusicBody({ title, artist, album, bpm, musickey }) {
    return (
        <div className="music-body">
            <h3>{title}</h3>
            <p>{artist}</p>
            
            <div className="music-details">
                <div className="detail-item">
                    <span className="detail-label">Key</span>
                    <span className="detail-value">{musickey}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">BPM</span>
                    <span className="detail-value">{bpm}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Album</span>
                    <span className="detail-value">{album}</span>
                </div>
            </div>
        </div>
    );
}

export default MusicBody;