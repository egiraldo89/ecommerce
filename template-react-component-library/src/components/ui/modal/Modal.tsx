import React, { ReactNode } from 'react'
import './Modal.scss'

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    style?: React.CSSProperties;

  }
const Modal = (props: ModalType) => {
    
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay"  onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box" style={props.style}>
            {props.children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal