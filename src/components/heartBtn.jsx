import React, { useState } from 'react';
import heart from '../assets/images/heart.png'
import heartFull from '../assets/images/heartFull.png'


const HeartBtn = () => {
    const [imageSrc, setImageSrc] = useState(heart)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setImageSrc(heart);
            setIsClicked(false);
        } else {
            setImageSrc(heartFull);
            setIsClicked(true);
        }
    };

    return(
        <img className="heartBtn" src={imageSrc} onClick={handleClick} alt="heartImg"/>
    )

}

export default HeartBtn;