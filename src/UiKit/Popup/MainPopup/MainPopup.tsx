import * as React from 'react';

import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';

import styles from './Main.module.scss';

interface IMainPopupProps {
  isOpened: any;
  onPrevArrowClick?: any;
  title?: any;
  onClose: any;
  children: any;
}

const MainPopup: React.FunctionComponent<IMainPopupProps> = ({children, onClose, isOpened, ...props}) => {
  return (
    <OverlayingPopup isActive={isOpened} onClose={onClose}>
      <div className={styles.container}>{children}</div>
    </OverlayingPopup>
  );
};

export default MainPopup;
