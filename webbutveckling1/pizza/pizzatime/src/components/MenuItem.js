import React from "react";
import BannerImage from "../assets/music.jpg";

function MenuItem({image, name, price}) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> {price}kr </p>

        </div>
    )
}

export default MenuItem