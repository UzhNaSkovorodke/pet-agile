import * as React from 'react';

import '../Btn.scss';
import {IButton} from '../InterfaceButton';

const BtnPrimary: React.FunctionComponent<IButton> = ({children, fontSize, buttonHandleFunc}) => {
  return (
    <button type="button" className={`btn primary ${fontSize}`} onClick={buttonHandleFunc}>
      {children}
    </button>
  );
};

export default BtnPrimary;
