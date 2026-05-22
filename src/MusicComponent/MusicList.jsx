import React from "react";
import MusicItem from "./MusicItem";

function MusicList({ music = [], onDelete }) {
    return (
        <div className="music-list">
            {music.map((item) => (
                <MusicItem
                    key={item.id}
                    musickey={item.musickey}
                    {...item}               
                    onDelete={onDelete}      
                />
            ))}
        </div>
    );
}

export default MusicList;