import React, { Component } from 'react'
import classNames from 'classnames'

import './Tooltip.css'


class Tooltip extends Component {

    static defaultProps = {
        content: "Tooltip content",
        style: {},
        position: 'top',
    }
    state = {
        visible: false,
    }

    show = () => {
        this.setVisibility(true)
    }

    hide = () => {
        this.setVisibility(false)
    }

    setVisibility = visible => {
        this.setState({ visible })
    }

    render() {
        const { visible } = this.state;
        const { children, content, style, position } = this.props;


        const classes = classNames(
            'tooltip',
            position
        )

        return (
            <span className='tooltipWrapper'>
                {visible && <span style={style} className={classes}>{content}</span>}
                <span className='targetElement'
                    onMouseEnter={this.show}
                    onMouseLeave={this.hide}
                >{children}</span>
            </span>
        )
    }

}


export default Tooltip;