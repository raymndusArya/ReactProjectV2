import React from "react";
function MusicImage({ imageUrl }) {
    return (
        <div className="music-image">
            <img src={imageUrl} alt='avatar' width={100} />
        </div>
    );
}
export default MusicImage