import * as React from 'react';

import styles from './Modal.module.scss';

interface IModalProps {
  isActive: any;
  setIsActive: any;
  children: any;
}

const Modal: React.FunctionComponent<IModalProps> = ({isActive, setIsActive, children}) => {
  return (
    <div className={isActive ? [styles.active, styles.modal].join(' ') : styles.modal} onClick={() => setIsActive(false)}>
      <div
        className={isActive ? [styles.active, styles.modal__content].join(' ') : styles.modal__content}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
