import * as React from 'react';

import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';

import styles from './MainPopup.module.scss';

interface IMainPopupProps {
  isOpened: boolean;
  title?: string;
  onClose: (modalStatus: boolean) => void;
  children: React.ReactNode;
}

const MainPopup: React.FunctionComponent<IMainPopupProps> = ({children, onClose, isOpened, ...props}) => {
  return (
    <OverlayingPopup isActive={isOpened} onClose={onClose}>
      <div className={styles.container}>{children}</div>
    </OverlayingPopup>
  );
};

export default MainPopup;
