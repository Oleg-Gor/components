import React from 'react'
import classNames from 'classnames'

import './ButtonGroup.css'

const ButtonGroup = ({ children, className, vertical, ...attrs }) => {

    const classes = classNames(
        'btn-group',
        className,
        { vertical },
    )
    return (
        <div className={classes} {...attrs}>{children}</div>
    )
}


ButtonGroup.defaultProps = {
    children: null,
    className:"",
    vertical: false
}

export default ButtonGroup