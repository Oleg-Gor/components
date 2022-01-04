import React from 'react'
import Portal from '../portal/Portal'
import Icon from '../icon/Icon'
import Button from '../button/Button'


import "./Modal.css"


const Modal = ({
    title, isOpen, onCancel, onSubmit, children,
}) => {


    return (
        <>{isOpen && <Portal>
            <div className='modalOverlay'>
                <div className='modalWindow'>
                    <div className='modalHeader'>
                        <div className='modalTitle'>{title}</div>
                        <Icon name="times" onClick={onCancel} />
                    </div>
                    <div className='modalBody'>
                        {children}
                    </div>
                    <div className="modalFooter">
                        <Button onClick={onCancel} invert>Cancel</Button>
                        <Button onClick={onSubmit} >Submit</Button>
                    </div>
                </div>
            </div>
        </Portal>
        }
        </>

    )
}


Modal.defaultProps = {
    title: "Modal title",
    isOpen: false,
    onCancel: () => { },
    onSubmit: () => { },
    children: null

}

export default Modal;