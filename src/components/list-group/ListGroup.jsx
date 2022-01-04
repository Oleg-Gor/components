import React from 'react'
import classNames from 'classnames'

import './ListGroup.css'


const ListGroup = ({
    children, className, tag: Tag, ...attrs
}) => {

    const classes = classNames(
        'list-group',
        className,
    )
    return (
        <Tag className={classes}{...attrs} >
            {children}
        </Tag>
    )
}


ListGroup.defaultProps = {
    children: null,
    className: '',
    tag: 'ul',
};


export default ListGroup;