import * as React from 'react';

import './Modal.scss';

interface IModalProps {
  setIsActive: any;
  isActive: boolean;
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const Modal: React.FunctionComponent<IModalProps> = ({isActive, setIsActive, children}) => {
  return (
    <div className={isActive ? 'modal active' : 'modal'} onClick={() => setIsActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
