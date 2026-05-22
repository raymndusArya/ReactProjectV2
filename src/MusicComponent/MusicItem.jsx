import React, { useState } from "react";
import MusicBody from "./MusicBody";
import MusicImage from "./MusicImage";
import DeleteButton from "./DeleteButton";

function MusicItem({
    imageUrl,
    title,
    artist,
    id,
    album,
    bpm,
    musickey,
    onDelete
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className={`music-item ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <MusicImage imageUrl={imageUrl} />

            <MusicBody
                title={title}
                artist={artist}
                album={album}
                bpm={bpm}
                musickey={musickey}
            />

            <DeleteButton
                id={id}
                onDelete={(e, deleteId) => {
                    e.stopPropagation();
                    onDelete(deleteId);
                }}
            />
        </div>
    );
}

export default MusicItem;