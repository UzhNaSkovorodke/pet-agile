import * as React from 'react';

import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';

import styles from './Main.module.scss';

interface IMainPopupProps {
  isOpened: boolean;
  onPrevArrowClick?: any;
  title?: string;
  onClose: any;
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
