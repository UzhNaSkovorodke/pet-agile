import React from 'react';

import styles from '../Popup.module.scss';
import Portal from '../Portal/Portal';

interface IOverlayingPopupProps {
  isActive: boolean;
  onClose: (modalStatus: boolean) => void;
  children: React.ReactNode;
}

const OverlayingPopup: React.FunctionComponent<IOverlayingPopupProps> = ({isActive, onClose, children}) => {
  if (!isActive) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.container} role="dialog">
        <div className={styles.overlay} role="button" tabIndex={0} onClick={() => onClose(false)} />
        {children}
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
