import React from 'react'
import classNames from 'classnames'

import './Badge.css'


const Badge = ({
    value, circle, className, inline, outer, ...attrs
}) => {

    const text = typeof value === 'string' || value instanceof String;

    const classes = classNames(
        'badge',
        { circle },
        className,
        { inline },
        { outer },
        { text },
        { warning: attrs.warning },
        { alert: attrs.alert },
        { success: attrs.success },
        { info: attrs.info },

    )

    return (
        <span className={classes}>
            {value}
        </span>
    )
}


Badge.defaultProps = {
    circle: false,
    className: '',
    inline: false,
    outer: false,
}


export default Badge;