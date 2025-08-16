import React from "react";
import "../BasicFigure.css";

function BasicFigures({imageUrl, caption, onDelete}) {

    return(
        <div className="figure-container">
            <img src="{imageUrl}" alt={caption} className="figure-image" />
            <p className="figure-caption">{caption}</p>
            <button className="delete-btn" onClick={onDelete}>Remove</button>

        </div>
    );
}

export default BasicFigures;
