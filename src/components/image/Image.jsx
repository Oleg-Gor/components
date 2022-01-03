import React from 'react'
import classNames from 'classnames'

import './Image.css'

const Image = ({ src, alt, className, width,height, circle, ...attrs }) => {
    if(!src) {
        src = 'https://www.freeiconspng.com/uploads/love-icon-11.png'
    } 
    
    const classes = classNames(
        className,
        {circle}
    )
    return (
        <img className={classes}
         src={src} 
         alt={alt} 
         {...attrs} 
         width={width}
         height={height}/>
    )
}


Image.defaultProps = {
    className: '',
    alt: 'image name',
    src: "",
    width: 100,
    height: 100,
    circle: false
}

export default Image;