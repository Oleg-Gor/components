import React from 'react'
import classNames from 'classnames'

import './Icon.css'


const Icon = ({ name, className, onClick, size, disabled, ...attrs }) => {

    const elemSize = size? {fontSize:`${size}rem`}: null

    const classes = classNames(
        'fa',
        `fa-${name}`,
        className,
        {func: onClick},
        {disabled}
    )

    return (
        <i className={classes} onClick={disabled? null: onClick} style = {elemSize} {...attrs}></i>
    )
}

Icon.defaultProps = {
    onClick: null,
    name: '',
    className: '',
    size: null,
    disabled: false
}



export default Icon