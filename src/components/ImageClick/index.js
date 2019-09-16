import React from "react";
import "./index.css";


function ImageClick(props) {
    return (
        <div onClick={() => props.handleImageClick(props.id)}>
            <img  alt="spongebob square pant is running"className="image-size" src={props.image} />
            {/* <p>{props.id}</p> */}

        </div>
    )
}

export default ImageClick;