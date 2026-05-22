import React from "react";
import MusicBody from "./MusicBody";
import MusicImage from "./MusicImage";
import DeleteButton from "./DeleteButton";

function MusicItem({
    imageUrl,
    title,
    artist,
    id,
    onDelete
}) {
    return (
        <div className="music-item">
            <MusicImage imageUrl={imageUrl} />

            <MusicBody
                title={title}
                artist={artist}
            />

            <DeleteButton
                id={id}
                onDelete={onDelete}
            />
        </div>
    );
}

export default MusicItem;