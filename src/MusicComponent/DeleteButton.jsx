import React from "react";

function DeleteButton({ id, onDelete }) {
    return (
        <button 
            className="music-button-delete" 
            onClick={(e) => onDelete(e, id)}
        >Delete</button>
    );
}

export default DeleteButton;