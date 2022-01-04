import React from 'react'
import classNames from 'classnames'


import './TabBarNav.css'


const TabBarNav = ({
    navLabel, className, onChangeActiveTab,
}) => {


    const classes = classNames(
        'nav-item',
        className,
    )
    return (
        <button className={classes}
            onClick={() => { onChangeActiveTab(navLabel) }}>
            {navLabel}
        </button>
    )
}


TabBarNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => { }

}

export default TabBarNav