import React from "react";
import classNames from "classnames";

import './TabBarItem.css'

const TabBarItem = ({
    children, label, activeTab, ...attrs
}) => {

    const classes = classNames(
        'tab-bar-item',
        { active: activeTab === label }
    )

    return (
        <div className={classes} {...attrs}>
            {children}
        </div>
    )
}

TabBarItem.defaultProps = {
    children: null,
    activeTab: ''
}


export default TabBarItem