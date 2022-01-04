import React from 'react'
import classNames from 'classnames'

import Icon from '../icon/Icon'
import Image from '../image/Image'

import './Chip.css'

const Chip = ({ text,
    withImage,
    withIcon,
    withClose,
    imageSrc,
    imgAlt,
    iconName,
    className,
    id,
    onChipClick,
    onCloseClick,
    ...attrs }) => {

    const classes = classNames(
        'chip',
        className,
    )

    const onChipClickAction = () => {
        onChipClick(id)
    }

    const onCloseClickAction = (e) => {
        e.stopPropagation();
        onCloseClick(e, id)
    }
    return (
        <div className={classes} {...attrs} onClick={onChipClickAction}>
            {withImage &&
                <span className='chipImage'>
                    <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
                </span>
            }
            {withIcon &&
                <span className='chipIcon'>
                    <Image name={iconName} />
                </span>
            }
            <span className='chipText'>{text}</span>
            {withClose &&
                <span className='chipClose' onClick={onCloseClickAction}>
                    <Icon name="times" />
                </span>
            }

        </div>
    )
}

Chip.defaultProps = {
    withImage: false,
    withIcon: false,
    withClose: false,
    imageSrc: '',
    imgAlt: '',
    iconName: 'user-tie',
    className: '',
    id: null,
    onCloseClick: () => { },
    onChipClick: () => { },
}

export default Chip