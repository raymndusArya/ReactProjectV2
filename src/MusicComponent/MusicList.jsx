import React from "react";
import MusicItem from "./MusicItem";

function MusicList({ music = [], onDelete }) {
    return (
        <div className="music-list">
            {music.map((music) => (
                <MusicItem
                    key={music.id}
                    {...music}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default MusicList;