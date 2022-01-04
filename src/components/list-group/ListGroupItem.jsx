import React from 'react';
import classNames from 'classnames';

import './ListGroupItem.css'

const ListGroupItem = ({
    children, className, tag: Tag, disabled, active, ...attrs
}) => {

    const classes = classNames(
        'list-group-item',
        className,
        { active },
        { disabled },
    )

    if (attrs.href && Tag === 'li') {
        Tag = 'a';
    }

    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    )
}


ListGroupItem.defaultProps = {
    chilsren: null,
    className: '',
    tag: 'li',
    disabled: false,
    active: false,
}


export default ListGroupItem;